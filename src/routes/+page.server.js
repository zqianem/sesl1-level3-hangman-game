import { error as sk_error, redirect } from '@sveltejs/kit';
import { americanAll } from 'wordlist-js';

export const actions = {
  default: async ({ locals: { supabase } }) => {
    const word = americanAll[Math.floor(Math.random() * americanAll.length)];
    const { data, error } = await supabase
      .from('hangman_games')
      .insert({ word })
      .select()
      .maybeSingle();

    if (error) throw sk_error(500, error);

    throw redirect(303, data.id);
  },
};
