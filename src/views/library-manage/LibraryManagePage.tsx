'use client';

import { getLibrary } from '@/shared/api';
import { Box, Flex, Heading } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

import { Books } from './ui/Books';
import { SignOutButton } from './ui/SignOutButton';
import { UploadBooksButton } from './ui/UploadBooksButton';

export function LibraryManagePage() {
  const [library, setLibrary] = useState<{ id: number; name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    async function fetchLibrary() {
      try {
        const data = await getLibrary();
        setLibrary({ id: data.id, name: data.name ?? '도서관' });
      } catch (error) {
        console.error('Failed to fetch library:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLibrary();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!library) {
    return <div>도서관 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <>
      <Box
        pt="4"
        pb="4"
        style={{ background: '#27AE60', color: '#fff', textAlign: 'center' }}
      >
        <Heading size="3">{library.name}</Heading>

        <Flex position="absolute" top="3" right="4" gap="3">
          <UploadBooksButton
            libraryId={library.id}
            onUploadSuccess={() => setRefreshTrigger((prev) => prev + 1)}
          />
          <SignOutButton />
        </Flex>
      </Box>

      <Books libraryId={library.id} refreshTrigger={refreshTrigger} />
    </>
  );
};
