import { error as sk_error } from '@sveltejs/kit';

export async function load({ locals: { supabase } }) {
  const wins = await get_table(supabase, 'hangman_wins');
  const percentages = await get_table(supabase, 'hangman_win_percentage');
  const totals = await get_table(supabase, 'hangman_total');

  return { wins, percentages, totals };
}

async function get_table(supabase, table) {
  const { data, error } = await supabase.from(table).select().limit(5);

  if (error) throw sk_error(500, error);

  return data;
}
