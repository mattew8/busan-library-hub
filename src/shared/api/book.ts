'use server';

import { createClient } from './database';

export async function getBooks() {
  const supabase = createClient();
  const { error: authError } = await supabase.auth.getUser();
  if (authError) {
    throw new Error(authError.message);
  }

  const { data: books, error } = await supabase.from('Book').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return books;
}
