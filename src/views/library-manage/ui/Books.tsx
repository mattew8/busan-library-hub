import { Table, Text } from '@radix-ui/themes';
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

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getBooks(libraryId);
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBooks();
  }, [libraryId, refreshTrigger]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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

      {isBookExist ? (
        <Table.Body>
          {books.map((book) => (
            <Table.Row key={book.id}>
              <Table.RowHeaderCell>{book.title}</Table.RowHeaderCell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>{book.publisher}</Table.Cell>
              <Table.Cell>{convertUTCToKST(book.created_at)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      ) : (
        <Table.Body>
          <Table.Row>
            <Table.Cell colSpan={4}>
              <Text size="3" m="2">
                등록된 도서가 없습니다.
              </Text>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      )}
    </Table.Root>
  );
};