'use server';

import { createClient } from './database';

export async function getLibrary() {
  const supabase = createClient();
  const { error: authError } = await supabase.auth.getUser();
  if (authError) {
    throw new Error(authError.message);
  }

  /** @note by using supabase policy, only session user's data will be returned */
  const { data: library, error } = await supabase
    .from('Library')
    .select('*')
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return library;
}
