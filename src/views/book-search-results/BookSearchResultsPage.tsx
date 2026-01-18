'use client';

import { Badge, Box, Flex, Heading, Text } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

import { filterBooks } from '@/shared/api';
import { GoToMainPageButton } from './ui/GoToMainPageButton';

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
        const data = await filterBooks({
          book: bookSearchOptions,
          library: librarySearchOptions,
        });
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBooks();
  }, [searchOptions]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!books || books?.length === 0) {
    return (
      <Flex direction="column" align="center" p="6" gap="5">
        <Heading size="6">검색 결과가 없습니다!</Heading>
        <GoToMainPageButton>돌아가기</GoToMainPageButton>
      </Flex>
    );
  }

  return (
    <Flex direction="column" align="center" p="6" gap="3" overflow="scroll">
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
    </Flex>
  );
};

