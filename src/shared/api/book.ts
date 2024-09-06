'use server';

import { createClient } from './database';

export async function getBooks(libraryId: number) {
  const supabase = createClient();
  const { error: authError } = await supabase.auth.getUser();
  if (authError) {
    throw new Error(authError.message);
  }

  const { data: books, error } = await supabase
    .from('book')
    .select('*')
    .eq('library_id', libraryId);

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
    .from('book')
    .delete()
    .eq('library_id', libraryId);

  if (error) {
    console.error('Error deleting old books:', error.message);
    throw new Error('Failed to delete existing books');
  }
}

interface CreateBookDto {
  title: string;
  author: string;
  publisher: string;
  library_id: number;
}
export async function createBooks(books: CreateBookDto[]) {
  const supabase = createClient();
  const { error } = await supabase.from('book').insert(books);

  if (error) {
    throw new Error(error.message);
  }
}

interface SearchOptions {
  title?: string;
  author?: string;
  publisher?: string;
}
export async function filterBooks(searchOptions: SearchOptions) {
  const searchOptionArray = Object.entries(searchOptions);
  if (searchOptionArray.length === 0) return [];

  const supabase = createClient();
  let query = supabase.from('book').select(`
    *,
    library (name)
  `);
  searchOptionArray.forEach(([key, value]) => {
    if (value) {
      query = query.ilike(key, `%${value}%`);
    }
  });

  // 쿼리 실행
  const { data: books, error } = await query;

  if (error) {
    console.error('Error fetching books:', error.message);
    throw new Error('Failed to search books');
  }

  return books;
}
