import React from 'react';
import { Flex, Heading, Text } from '@radix-ui/themes';
import BookSearchForm from './ui/BookSearchForm';

export const SearchPage = () => {
  return (
    <Flex direction="column" align="center" justify="center" gap="4" p="6">
      <Heading size="8">동래구 새마을문고 작은도서관 자료 검색</Heading>
      <Text size="4" color="gray">
        찾고자 하는 도서 정보를 입력해주세요.
      </Text>

      <BookSearchForm />
    </Flex>
  );
};
