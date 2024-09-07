'use client';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { convertInputValuesToSearchParams } from '../service/convert-input-values-to-search-params';
import { TextField, Button, Text, Flex } from '@radix-ui/themes';

const BookSearchForm = () => {
  const router = useRouter();

  function handleSubmitSeacrh(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const searchParams = convertInputValuesToSearchParams(formJson);
    router.push(`/search${searchParams}`);
  }

  return (
    <Flex asChild direction="column" width="100%" maxWidth="400px" gap="4">
      <form onSubmit={handleSubmitSeacrh}>
        <div>
          <Text as="label" htmlFor="title" size="2">
            서명
          </Text>
          <TextField.Root name="title" placeholder="책 제목" size="2" mt="1" />
        </div>

        <div>
          <Text as="label" htmlFor="author" size="2">
            저자
          </Text>
          <TextField.Root name="author" placeholder="저자명" size="2" mt="1" />
        </div>

        <div>
          <Text as="label" htmlFor="publisher" size="2">
            출판사
          </Text>
          <TextField.Root
            name="publisher"
            placeholder="출판사"
            size="2"
            mt="1"
          />
        </div>

        <div>
          <Text as="label" htmlFor="library" size="2">
            도서관
          </Text>
          <TextField.Root
            name="library"
            placeholder="도서관 명"
            size="2"
            mt="1"
          />
        </div>

        <Button variant="solid" size="3" mt="2">
          검색
        </Button>
      </form>
    </Flex>
  );
};

export default BookSearchForm;
