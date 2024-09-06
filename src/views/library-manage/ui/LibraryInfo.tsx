import React from 'react';
import { getLibrary } from '@/shared/api';
import UploadBooksButton from './UploadBooksButton';

const LibraryInfo = async () => {
  const { id, name } = await getLibrary();

  return (
    <>
      <h1>도서 관리</h1>
      <h2>{name}</h2>
      <UploadBooksButton libraryId={id} />
    </>
  );
};

export default LibraryInfo;
