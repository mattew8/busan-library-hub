import React from 'react';
import { getBooks } from '@/shared/api';
import { Table, Text } from '@radix-ui/themes';
import { convertUTCToKST } from '../utils/time-convert';

interface Props {
  libraryId: number;
}
const Books = async ({ libraryId }: Props) => {
  const books = await getBooks(libraryId);
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
        <Text size="3" m="2">
          등록된 도서가 없습니다.
        </Text>
      )}
    </Table.Root>
  );
};

export default Books;
