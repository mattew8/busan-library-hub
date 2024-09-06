import React, { Fragment } from 'react';
import { getBooks } from '@/shared/api';

interface Props {
  libraryId: number;
}
const Books = async ({ libraryId }: Props) => {
  const books = await getBooks(libraryId);

  if (books === null || books.length === 0) {
    return <>도서를 추가해주세요.</>;
  }

  return (
    <div>
      {books.map((book) => (
        <Fragment key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.publisher}</p>
          <p>{book.created_at}</p>
        </Fragment>
      ))}
    </div>
  );
};

export default Books;
