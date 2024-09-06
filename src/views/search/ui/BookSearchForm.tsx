'use client';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { convertInputValuesToSearchParams } from '../service/convert-input-values-to-search-params';

const BookSearchForm = () => {
  const router = useRouter();

  function handleSubmitSeacrh(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const searchParams = convertInputValuesToSearchParams(formJson);
    router.push(`/search${searchParams}`);
  }

  return (
    <form onSubmit={handleSubmitSeacrh}>
      <div>
        <label>서명</label>
        <input name="title" />
      </div>
      <div>
        <label>저자</label>
        <input name="author" />
      </div>
      <div>
        <label>출판사</label>
        <input name="publisher" />
      </div>
      <button>검색</button>
    </form>
  );
};

export default BookSearchForm;
