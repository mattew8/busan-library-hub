import { Flex, Spinner, Table, Text } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

import { getBooks } from '@/shared/api';
import { convertUTCToKST } from '../lib/time-convert';

interface Props {
  libraryId: number;
  refreshTrigger?: number;
}

export function Books({ libraryId, refreshTrigger }: Props) {
  const [books, setBooks] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getBooks(libraryId);
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
        setError('도서 목록을 불러올 수 없습니다.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchBooks();
  }, [libraryId, refreshTrigger]);

  const isBookExist = books !== null && books.length > 0;

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>도서명</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>저자</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>출판사</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>등록일</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {isLoading ? (
          <Table.Row>
            <Table.Cell colSpan={4}>
              <Flex align="center" justify="center" gap="2" p="4">
                <Spinner size="2" />
                <Text size="3" color="gray">
                  도서 목록을 불러오는 중...
                </Text>
              </Flex>
            </Table.Cell>
          </Table.Row>
        ) : error ? (
          <Table.Row>
            <Table.Cell colSpan={4}>
              <Flex direction="column" align="center" justify="center" gap="2" p="4">
                <Text size="3" color="red">
                  {error}
                </Text>
                <Text size="2" color="gray">
                  잠시 후 다시 시도해주세요.
                </Text>
              </Flex>
            </Table.Cell>
          </Table.Row>
        ) : isBookExist ? (
          books.map((book) => (
            <Table.Row key={book.id}>
              <Table.RowHeaderCell>{book.title}</Table.RowHeaderCell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>{book.publisher}</Table.Cell>
              <Table.Cell>{convertUTCToKST(book.created_at)}</Table.Cell>
            </Table.Row>
          ))
        ) : (
          <Table.Row>
            <Table.Cell colSpan={4}>
              <Text size="3" m="2">
                등록된 도서가 없습니다.
              </Text>
            </Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table.Root>
  );
};