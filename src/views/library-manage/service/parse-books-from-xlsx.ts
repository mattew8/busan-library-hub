import * as XLSX from 'xlsx';

interface Book {
  title: string;
  author: string;
  publisher: string;
}

export async function parseBooksFromXlsx(file: File): Promise<Book[]> {
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
  const headers = jsonData[0]; // ['이름', '저자', '출판사']
  const rows = jsonData.slice(1);

  const books = rows
    .map((row) => {
      const title = row[headers.indexOf('이름')]?.trim() || '';
      const author = row[headers.indexOf('저자')]?.trim() || '';
      const publisher = row[headers.indexOf('출판사')]?.trim() || '';
      if (title && author && publisher) {
        return { title, author, publisher };
      }
      return null;
    })
    .filter((book): book is Book => book !== null);

  return books;
}
