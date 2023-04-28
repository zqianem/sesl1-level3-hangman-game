import { error as sk_error, redirect } from '@sveltejs/kit';
import {
  create_board,
  is_letter,
  letter_in_word,
  game_won,
  game_lost,
} from '$lib/server';

export async function load({ params: { game_id }, locals: { supabase } }) {
  const game = await get_game_from_db(supabase, game_id);
  const { word, lives_remaining, letters_guessed, win } = game;

  const board = create_board(word, letters_guessed);
  const revealed_word = win === null ? null : word;

  return { board, lives_remaining, letters_guessed, win, revealed_word };
}

export const actions = {
  default: async ({
    params: { game_id },
    cookies,
    locals: { supabase },
    request,
  }) => {
    const player_id = cookies.get('playerid');
    const game = await get_game_from_db(supabase, game_id);
    let { word, lives_remaining, letters_guessed, win, player } = game;

    if (player && player !== player_id) throw sk_error(403, 'Not your game');
    if (win !== null) throw redirect(303, game_id); // game is over, refresh

    const form_data = await request.formData();
    const guess = form_data.get('guess')?.normalize('NFC') ?? '';

    if (!is_letter(guess)) throw sk_error(422, 'Guess not a letter');

    lives_remaining = letter_in_word(guess, word)
      ? lives_remaining
      : lives_remaining - 1;

    letters_guessed = [...letters_guessed, guess];

    win = game_won(word, letters_guessed, lives_remaining)
      ? true
      : game_lost(lives_remaining)
      ? false
      : null;

    player ??= player_id;

    const { error } = await supabase
      .from('hangman_games')
      .update({ lives_remaining, letters_guessed, win, player })
      .eq('id', game_id);

    if (error) throw sk_error(500, error);
  },
};

async function get_game_from_db(supabase, game_id) {
  const { data, error } = await supabase
    .from('hangman_games')
    .select()
    .eq('id', game_id)
    .maybeSingle();

  if (error) throw sk_error(500, error);
  if (!data) throw sk_error(404, 'Game not found');

  return data;
}
