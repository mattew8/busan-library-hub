import React from 'react';
import { LibraryManagePage } from '@/views';
import { getLibrary } from '@/shared/api';

const page = async () => {
  const libraryInfo = await getLibrary();
  return <LibraryManagePage library={libraryInfo} />;
};

export default page;
