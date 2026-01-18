import { redirect } from 'next/navigation';

import { BookSearchResultsPage } from '@/views/book-search-results/BookSearchResultsPage';

interface SearchParams {
  title?: string;
  author?: string;
  publisher?: string;
  library?: string;
}

export default function page({ searchParams }: { searchParams: SearchParams }) {
  const decodedSearchParams = Object.fromEntries(
    Object.entries(searchParams).map(([key, value]) => [
      key,
      value ? decodeURIComponent(value) : undefined,
    ]),
  );
  const isSearchParamsExist = Object.keys(searchParams).length > 0;
  if (!isSearchParamsExist) {
    redirect('/');
  }

  return <BookSearchResultsPage searchOptions={decodedSearchParams} />;
}
