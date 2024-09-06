'use client';

import React from 'react';
import { parseBooksFromXlsx } from '../service/parse-books-from-xlsx';
import { createBooks, deleteAllBooks } from '@/shared/api';
import { useRouter } from 'next/navigation';

interface Props {
  libraryId: number;
}
const UploadBooksForm = ({ libraryId }: Props) => {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fileInput = e.target as HTMLFormElement;
    const file = fileInput.elements.namedItem('file') as HTMLInputElement;
    const selectedFile = file?.files?.[0];
    if (!selectedFile) {
      return;
    }

    try {
      await deleteAllBooks(libraryId);
      const books = await parseBooksFromXlsx(selectedFile);
      await createBooks(books);
      router.reload();
    } catch {
      alert('문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
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
