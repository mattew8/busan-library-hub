import { Button, Dialog, Flex } from '@radix-ui/themes';
import React from 'react';
import UploadBookDialogContent from './UploadBookFormDialog';

interface Props {
  libraryId: number;
}
const UploadBooksButton = ({ libraryId }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="surface">도서 추가</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <UploadBookDialogContent />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default UploadBooksButton;
