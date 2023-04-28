import { error as sk_error, fail } from '@sveltejs/kit';
import { in_word_list } from '$lib/server';

export const actions = {
  default: async ({ cookies, locals: { supabase }, request }) => {
    const player = cookies.get('playerid');

    const form_data = await request.formData();
    const word = form_data.get('word')?.normalize('NFC') ?? '';

    if (!in_word_list(word)) {
      return fail(400, { word });
    }

    const { data, error } = await supabase
      .from('hangman_games')
      .insert({ word, created_by: player })
      .select()
      .maybeSingle();

    if (error) throw sk_error(500, error);
  },
};
