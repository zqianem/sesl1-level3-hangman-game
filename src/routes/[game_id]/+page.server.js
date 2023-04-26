import { error as sk_error } from '@sveltejs/kit';

export async function load({ params: { game_id }, locals: { supabase } }) {
  const game = await get_game_from_db(supabase, game_id);
  const board = create_board(game);
  const { lives_remaining, letters_guessed } = game;

  return { board, lives_remaining, letters_guessed };
}

export const actions = {
  default: async ({ params: { game_id }, locals: { supabase }, request }) => {
    const game = await get_game_from_db(supabase, game_id);
    let { word, lives_remaining, letters_guessed, win } = game;

    if (win !== null) throw sk_error(500, 'Game is over');

    const form_data = await request.formData();
    const guess = form_data.get('guess');

    lives_remaining = word.includes(guess)
      ? lives_remaining
      : lives_remaining - 1;

    letters_guessed = [...letters_guessed, guess];

    win = all_letters_guessed(word, letters_guessed)
      ? true
      : lives_remaining === 0
      ? false
      : null;

    const { error } = await supabase
      .from('hangman_games')
      .update({ lives_remaining, letters_guessed, win })
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

function all_letters_guessed(word, letters_guessed) {
  return create_board({ word, letters_guessed }).join('') === word;
}

function create_board({ word, letters_guessed }) {
  return [...word].map((char) =>
    letters_guessed.includes(char) || char.match(/\p{P}|\p{White_Space}/gu)
      ? char
      : '_',
  );
}
