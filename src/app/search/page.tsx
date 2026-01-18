import { BookSearchResultsPage } from '@/views/book-search-results/BookSearchResultsPage';
import ForceRouteToMainPage from '@/views/book-search-results/ui/ForceRouteToMainPage';

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
    return <ForceRouteToMainPage />;
  }

  return <BookSearchResultsPage searchOptions={decodedSearchParams} />;
}
