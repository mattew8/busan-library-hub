'use server';

import { createClient } from './database';

export async function signIn(email: string, password: string) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function signOut() {
  const supabase = createClient();
  return supabase.auth.signOut();
}
