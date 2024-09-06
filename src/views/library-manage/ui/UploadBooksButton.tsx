'use client';

import { deleteAllBooks } from '@/shared/api';
import React from 'react';

interface Props {
  libraryId: number;
}
const UploadBooksButton = ({ libraryId }: Props) => {
  function handleDeleteAllBooks() {
    deleteAllBooks(libraryId);
  }

  return <button onClick={handleDeleteAllBooks}>도서 업로드</button>;
};

export default UploadBooksButton;
