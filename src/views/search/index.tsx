import React from 'react';
import BookSearchForm from './ui/BookSearchForm';

export const SearchPage = () => {
  return (
    <div>
      <h1>부산지역 도서관 자료 검색</h1>
      <p>찾고자 하는 도서 정보를 입력해주세요.</p>

      <BookSearchForm />
    </div>
  );
};
