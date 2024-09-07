'use server';

import { createClient } from './database';

export async function getLibrary() {
  const supabase = createClient();
  const { data, error: authError } = await supabase.auth.getUser();
  if (authError) {
    throw new Error(authError.message);
  }

  /** @note by using supabase policy, only session user's data will be returned */
  const { data: library, error } = await supabase
    .from('library')
    .select('*')
    .eq('user_id', data.user.id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return library;
}
