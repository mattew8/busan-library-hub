import { createBooks, deleteAllBooks } from '@/shared/api';
import { parseBooksFromXlsx } from '../service/parse-books-from-xlsx';

export async function handleUploadNewBookFile(libraryId: number, file: File) {
  await deleteAllBooks(libraryId);
  const books = await parseBooksFromXlsx(file);
  const booksWithLibraryId = books.map((book) => ({
    ...book,
    library_id: libraryId,
  }));
  return await createBooks(booksWithLibraryId);
}
