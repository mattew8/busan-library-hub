import { getLibrary } from '@/shared/api';
import React from 'react';

const LibraryInfo = async () => {
  const library = await getLibrary();

  return (
    <>
      <h1>도서 관리</h1>
      <h2>{library.name}</h2>
    </>
  );
};

export default LibraryInfo;
