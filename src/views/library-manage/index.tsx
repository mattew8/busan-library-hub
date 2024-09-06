import React from 'react';
import LibraryInfo from './ui/LibraryInfo';
import Books from './ui/Books';

export const LibraryManagePage = async () => {
  return (
    <>
      <LibraryInfo />
      <Books />
    </>
  );
};
