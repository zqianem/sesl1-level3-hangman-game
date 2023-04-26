import { error as sk_error, redirect } from '@sveltejs/kit';
import { americanAll, englishAll } from 'wordlist-js';

export const actions = {
  default: async ({ locals: { supabase } }) => {
    const word = random_word();
    const { data, error } = await supabase
      .from('hangman_games')
      .insert({ word })
      .select()
      .maybeSingle();

    if (error) throw sk_error(500, error);

    throw redirect(303, data.id);
  },
};

function random_word() {
  const words = [...englishAll, ...americanAll].map((w) => w.normalize('NFC'));
  return words[Math.floor(Math.random() * words.length)];
}
