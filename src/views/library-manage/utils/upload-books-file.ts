import * as XLSX from 'xlsx';
import { createBooks, deleteAllBooks } from '@/shared/api';

/**
 *
 * @param libraryId 도서를 추가할 도서관 id
 * @param file 도서 정보가 담긴 xlsx 파일
 * @returns file 속 도서 정보를 도서관에 저장
 */
export async function handleUploadNewBookFile(libraryId: number, file: File) {
  await deleteAllBooks(libraryId);
  const books = await parseBooksFromXlsx(file);
  const booksWithLibraryId = books.map((book) => ({
    ...book,
    library_id: libraryId,
  }));
  return await createBooks(booksWithLibraryId);
}

interface Book {
  title: string;
  author: string;
  publisher: string;
}
async function parseBooksFromXlsx(file: File): Promise<Book[]> {
  const arrayBuffer = await file.arrayBuffer();
  const data = new Uint8Array(arrayBuffer);

  const workbook = XLSX.read(data, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // 첫 번째 행을 목차로 사용해 데이터 파싱
  const jsonData = XLSX.utils.sheet_to_json(worksheet, {
    header: 1,
  }) as string[][];

  // 첫 번째 행은 목차이므로 제외
  const headers = jsonData[0]; // ['제목', '저자', '출판사']
  const rows = jsonData.slice(1);

  const books = rows
    .map((row) => {
      const title = row[headers.indexOf('제목')]?.trim?.() || '';
      const author = row[headers.indexOf('저자')]?.trim?.() || '';
      const publisher = row[headers.indexOf('출판사')]?.trim?.() || '';
      if (title && author && publisher) {
        return { title, author, publisher };
      }
      return null;
    })
    .filter((book): book is Book => book !== null);

  return books;
}
