'use client';

import React, { useEffect, useState } from 'react';
import { Flex, Heading, Spinner } from '@radix-ui/themes';

const loading = () => {
  const [isLoadingRequired, setIsLoadingRequired] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsLoadingRequired(true), 500);
  }, []);

  return (
    <Flex direction="column" align="center" p="6">
      {isLoadingRequired && (
        <Heading size="6">{`도서 검색 중 입니다...`}</Heading>
      )}
      <Spinner size="3" mt="3" />
    </Flex>
  );
};

export default loading;
