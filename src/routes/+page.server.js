import { error as sk_error, redirect } from '@sveltejs/kit';
import { random_word } from '$lib/server';

export async function load({ cookies, locals: { supabase } }) {
  const player = cookies.get('playerid');
  const game =
    (await get_unfinished_game(supabase, player)) ??
    (await create_new_game(supabase, player));

  throw redirect(303, game);
}

async function get_unfinished_game(supabase, player) {
  const { data, error } = await supabase
    .from('hangman_games')
    .select()
    .eq('player', player)
    .is('win', null)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw sk_error(500, error);

  return data?.id;
}

async function create_new_game(supabase, player) {
  const word = random_word();
  const { data, error } = await supabase
    .from('hangman_games')
    .insert({ word, player })
    .select()
    .maybeSingle();

  if (error) throw sk_error(500, error);

  return data.id;
}
