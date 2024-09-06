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

/**
 *
 * @param libraryId 도서관 식별자
 * @description 해당 도서관의 모든 도서 삭제
 */
export async function deleteAllBooks(libraryId: number) {
  const supabase = createClient();
  const { error } = await supabase
    .from('Book')
    .delete()
    .eq('library_id', libraryId);

  if (error) {
    console.error('Error deleting old books:', error.message);
    throw new Error('Failed to delete existing books');
  }
}

interface CreateBookDto {
  name: string;
  author: string;
  publisher: string;
}
export async function createBooks(books: CreateBookDto[]) {
  const supabase = createClient();
  const { error } = await supabase.from('Book').insert(books);

  if (error) {
    throw new Error(error.message);
  }
}
