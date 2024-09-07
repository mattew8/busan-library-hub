import React from 'react';
import { Button, Dialog, Flex } from '@radix-ui/themes';

const UploadBookDialogContent = () => {
  return (
    <>
      <Dialog.Title>도서 추가</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        엑셀 파일을 업로드해주세요.
      </Dialog.Description>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            취소
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button>저장</Button>
        </Dialog.Close>
      </Flex>
    </>
  );
};

export default UploadBookDialogContent;
