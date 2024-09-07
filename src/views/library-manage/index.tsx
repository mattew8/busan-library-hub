import React from 'react';
import { getLibrary } from '@/shared/api';
import Books from './ui/Books';
import SignOutButton from './ui/SignOutButton';
import { Box, Flex, Heading } from '@radix-ui/themes';
import UploadBooksButton from './ui/UploadBooksButton';

export const LibraryManagePage = async () => {
  const { id, name } = await getLibrary();
  return (
    <>
      <Box
        pt="4"
        pb="4"
        style={{ background: '#27AE60', color: '#fff', textAlign: 'center' }}
      >
        <Heading size="3">{name}</Heading>

        <Flex position="absolute" top="3" right="4" gap="3">
          <UploadBooksButton libraryId={id} />
          <SignOutButton />
        </Flex>
      </Box>

      <Books libraryId={id} />
    </>
  );
};
