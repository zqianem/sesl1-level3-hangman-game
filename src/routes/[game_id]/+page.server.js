import { error as sk_error } from '@sveltejs/kit';

export async function load({ params: { game_id }, locals: { supabase } }) {
  const { data, error } = await supabase
    .from('hangman_games')
    .select()
    .eq('id', game_id)
    .maybeSingle();

  if (error) throw sk_error(500, error);
  if (!data) throw sk_error(404, 'Game not found');

  const board = get_board(data);
  const { guesses_remaining, letters_guessed } = data;

  return { board, guesses_remaining, letters_guessed };
}

function get_board({ word, letters_guessed }) {
  return [...word].map((char) =>
    char.match(/\p{P}|\p{White_Space}/gu) || letters_guessed.includes(char)
      ? char
      : '_',
  );
}
