import { error as sk_error } from '@sveltejs/kit';
import { generateUsername } from 'friendly-username-generator';

export async function load({ cookies, locals: { supabase } }) {
  const id = cookies.get('playerid');
  const username =
    (id ? get_username_from_database(supabase, id) : null) ??
    (await create_new_player(cookies, supabase));

  return { username };
}

async function create_new_player(cookies, supabase) {
  const username = generateUsername();

  const { data, error } = await supabase
    .from('hangman_players')
    .insert({ username })
    .select()
    .maybeSingle();

  if (error) throw sk_error(500, error);

  const now = new Date();
  const later = new Date(now.getTime() + 10000000000000); // a few hundred years
  cookies.set('playerid', data.id, { expires: later });

  return username;
}

async function get_username_from_database(supabase, id) {
  const { data, error } = await supabase
    .from('hangman_players')
    .select()
    .eq('id', id)
    .maybeSingle();

  if (error) throw sk_error(500, error);

  return data?.username;
}
