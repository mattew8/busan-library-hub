import React from 'react';
import { Library } from '@/entities';

interface Props {
  library: Library;
}
const LibraryManagePage = async ({ library }: Props) => {
  return (
    <div>
      <h1>도서 관리</h1>
      <h2>{library.name}</h2>
    </div>
  );
};

export default LibraryManagePage;
