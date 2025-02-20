import React from 'react';
import { ForceRouteToMainPage, BookSearchResultsPage } from '@/views';

interface SearchParams {
  title?: string;
  author?: string;
  publisher?: string;
  library?: string;
}
const page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const decodedSearchParams = Object.fromEntries(
    Object.entries(searchParams).map(([key, value]) => [
      key,
      value ? decodeURIComponent(value) : undefined,
    ]),
  );
  const isSearchParamsExist = Object.keys(searchParams).length > 0;
  if (!isSearchParamsExist) {
    return <ForceRouteToMainPage />;
  }

  return <BookSearchResultsPage searchOptions={decodedSearchParams} />;
};

export default page;
