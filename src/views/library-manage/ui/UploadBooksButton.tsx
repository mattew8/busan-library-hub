'use client';

import React, { useState } from 'react';
import { Button, Dialog, Flex } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { handleUploadNewBookFile } from '../service/upload-new-books-file';

interface Props {
  libraryId: number;
}
const UploadBooksButton = ({ libraryId }: Props) => {
  const router = useRouter();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const fileInput = e.target as HTMLFormElement;
    const file = fileInput.elements.namedItem('file') as HTMLInputElement;
    const selectedFile = file?.files?.[0];
    if (!selectedFile) {
      alert('선택된 파일이 없습니다.');
      setIsLoading(false);
      return;
    }

    try {
      await handleUploadNewBookFile(libraryId, selectedFile);
      router.refresh();
    } catch {
      alert('문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsDialogOpen(false);
      setIsLoading(false);
    }
  }

  return (
    <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Dialog.Trigger>
        <Button variant="surface">도서 추가</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <form onSubmit={handleSubmit}>
          <Dialog.Title>도서 추가</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            엑셀 파일을 업로드해주세요.
          </Dialog.Description>

          <input type="file" name="file" accept=".xlsx, .xls, .csv" />

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray" type="button">
                취소
              </Button>
            </Dialog.Close>

            <Button type="submit" loading={isLoading}>
              저장
            </Button>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default UploadBooksButton;
