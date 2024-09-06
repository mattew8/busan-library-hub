import React from 'react';
import { getLibrary } from '@/shared/api';
import Books from './ui/Books';
import UploadBooksForm from './ui/UploadBooksForm';

export const LibraryManagePage = async () => {
  const { id, name } = await getLibrary();
  return (
    <>
      <h1>도서 관리</h1>
      <h2>{name}</h2>
      <UploadBooksForm libraryId={id} />
      <Books libraryId={id} />
    </>
  );
};
