import React from 'react';
import { ForceRouteToMainPage, BookSearchResultsPage } from '@/views';

interface SearchParams {
  title?: string;
  author?: string;
  publisher?: string;
  library?: string;
}
const page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const isSearchParamsExist = Object.keys(searchParams).length > 0;
  if (!isSearchParamsExist) {
    return <ForceRouteToMainPage />;
  }

  return <BookSearchResultsPage searchOptions={searchParams} />;
};

export default page;
