'use client';

import { Badge, Box, Flex, Heading, Text } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

import { filterBooks } from '@/shared/api';
import { EmptyState } from './ui/EmptyState';
import { ErrorState } from './ui/ErrorState';
import { GoToMainPageButton } from './ui/GoToMainPageButton';
import { LoadingState } from './ui/LoadingState';

interface Props {
  searchOptions: {
    title?: string;
    author?: string;
    publisher?: string;
    library?: string;
  };
}

export function BookSearchResultsPage({ searchOptions }: Props) {
  const [books, setBooks] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBooks() {
      const bookSearchOptions = {
        title: searchOptions.title,
        author: searchOptions.author,
        publisher: searchOptions.publisher,
      };
      const librarySearchOptions = {
        name: searchOptions.library,
      };

      try {
        setIsLoading(true);
        setError(null);
        const data = await filterBooks({
          book: bookSearchOptions,
          library: librarySearchOptions,
        });
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
        setError('도서 검색 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchBooks();
  }, [searchOptions]);

  return (
    <Flex direction="column" align="center" p="6" gap="3" overflow="scroll">
      {isLoading ? (
        <LoadingState title="도서 검색 중..." message="검색 결과를 불러오는 중입니다." />
      ) : error ? (
        <ErrorState
          title="검색 오류"
          error={error}
          action={<GoToMainPageButton>돌아가기</GoToMainPageButton>}
        />
      ) : !books || books?.length === 0 ? (
        <EmptyState
          title="검색 결과가 없습니다"
          action={<GoToMainPageButton>돌아가기</GoToMainPageButton>}
        />
      ) : (
        <>
          <Heading size="6">{`도서(${books.length}건)`}</Heading>

          <Flex direction="column" gap="5" mt="2">
            {books.map((book, index) => (
              <Box key={book.id}>
                <Flex align="center" gap="2">
                  <Text size="5" weight="bold">
                    {index + 1}
                  </Text>
                  <Badge variant="solid" color="gray">
                    도서
                  </Badge>
                  <Text size="5" weight="bold">
                    {book.title}
                  </Text>
                </Flex>

                <Flex gap="2" mt="1">
                  <Text size="3" color="gray">
                    저자: {book.author}
                  </Text>
                  <Text size="3" color="gray">
                    발행자: {book.publisher}
                  </Text>
                  <Text size="3" color="gray">
                    도서관: {book.library?.name}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Flex>

          <GoToMainPageButton>돌아가기</GoToMainPageButton>
        </>
      )}
    </Flex>
  );
};

