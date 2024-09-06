import React from 'react';
import { filterBooks } from '@/shared/api';

interface SearchParams {
  title?: string;
  author?: string;
  publisher?: string;
  library?: string;
}
const page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const isSearchParamsExist = Object.keys(searchParams).length > 0;
  if (!isSearchParamsExist) {
    return (
      <>
        <h1>잘못된 접근입니다.</h1>
      </>
    );
  }

  const bookSearchOptions = {
    title: searchParams.title,
    author: searchParams.author,
    publisher: searchParams.publisher,
  };
  const librarySearchOptions = {
    name: searchParams.library,
  };
  const books = await filterBooks({
    book: bookSearchOptions,
    library: librarySearchOptions,
  });

  if (!books || books?.length === 0) {
    return (
      <>
        <h1>검색 결과가 없습니다!</h1>
      </>
    );
  }

  return (
    <div>
      {books?.map((book) => (
        <div key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.publisher}</p>
          <p>{book.library?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
