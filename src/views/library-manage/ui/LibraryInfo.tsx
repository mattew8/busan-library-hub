import React from 'react';
import { getLibrary } from '@/shared/api';
import UploadBooksForm from './UploadBooksForm';

const LibraryInfo = async () => {
  const { id, name } = await getLibrary();

  return (
    <>
      <h1>도서 관리</h1>
      <h2>{name}</h2>
      <UploadBooksForm libraryId={id} />
    </>
  );
};

export default LibraryInfo;
