'use client';

import { getLibrary } from '@/shared/api';
import { Box, Flex, Heading, Spinner, Text } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

import { Books } from './ui/Books';
import { SignOutButton } from './ui/SignOutButton';
import { UploadBooksButton } from './ui/UploadBooksButton';

export function LibraryManagePage() {
  const [library, setLibrary] = useState<{ id: number; name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    async function fetchLibrary() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getLibrary();
        setLibrary({ id: data.id, name: data.name ?? '도서관' });
      } catch (error) {
        console.error('Failed to fetch library:', error);
        setError('도서관 정보를 불러올 수 없습니다.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchLibrary();
  }, []);

  return (
    <>
      <Box
        pt="4"
        pb="4"
        style={{ background: '#27AE60', color: '#fff', textAlign: 'center' }}
      >
        {isLoading ? (
          <Flex align="center" justify="center" gap="2">
            <Heading size="3">도서관</Heading>
          </Flex>
        ) : error || !library ? (
          <Heading size="3">도서관 정보 오류</Heading>
        ) : (
          <Heading size="3">{library.name}</Heading>
        )}

        <Flex position="absolute" top="3" right="4" gap="3">
          {library && (
            <UploadBooksButton
              libraryId={library.id}
              onUploadSuccess={() => setRefreshTrigger((prev) => prev + 1)}
            />
          )}
          <SignOutButton />
        </Flex>
      </Box>

      {error ? (
        <Flex direction="column" align="center" justify="center" p="8" gap="3">
          <Text size="4" color="red">
            {error}
          </Text>
          <Text size="2" color="gray">
            페이지를 새로고침하거나 다시 로그인해주세요.
          </Text>
        </Flex>
      ) : library ? (
        <Books libraryId={library.id} refreshTrigger={refreshTrigger} />
      ) : (
        <Flex direction="column" align="center" justify="center" p="8">
          <Spinner size="3" />
        </Flex>
      )}
    </>
  );
};
