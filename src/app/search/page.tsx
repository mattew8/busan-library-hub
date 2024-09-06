import React from 'react';
import { filterBooks } from '@/shared/api';

interface SearchParams {
  title?: string;
  author?: string;
  publisher?: string;
}
const page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const searchResults = await filterBooks(searchParams);

  if (searchResults.length === 0) {
    return (
      <>
        <h1>검색 결과가 없습니다!</h1>
      </>
    );
  }

  return (
    <div>
      {searchResults?.map((book) => (
        <div>
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
