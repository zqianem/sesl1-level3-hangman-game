import { error as sk_error, redirect } from '@sveltejs/kit';
import { random_word } from '$lib/server';

export async function load({ cookies, locals: { supabase } }) {
  const player = cookies.get('playerid');
  const word = random_word();
  const { data, error } = await supabase
    .from('hangman_games')
    .insert({ word, player })
    .select()
    .maybeSingle();

  if (error) throw sk_error(500, error);

  throw redirect(303, data.id);
}
