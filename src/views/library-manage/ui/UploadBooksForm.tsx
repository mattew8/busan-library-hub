'use client';

import React from 'react';
import { parseBooksFromXlsx } from '../service/parse-books-from-xlsx';

interface Props {
  libraryId: number;
}
const UploadBooksForm = ({ libraryId }: Props) => {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fileInput = e.target as HTMLFormElement;
    const file = fileInput.elements.namedItem('file') as HTMLInputElement;
    const selectedFile = file?.files?.[0];
    if (!selectedFile) {
      return;
    }

    const books = await parseBooksFromXlsx(selectedFile);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" accept=".xlsx, .xls, .csv" />
        <button type="submit">도서 업로드</button>
      </form>
    </>
  );
};

export default UploadBooksForm;
