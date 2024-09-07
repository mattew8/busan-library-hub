'use client';

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from '@/shared/api';
import { Button, Flex, Heading, Text, TextField } from '@radix-ui/themes';

const AdminSignInPage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const password = formJson['password'];

    try {
      await signIn(`${password}@gmail.com`, `${password}`);
      router.push('/library/manage');
    } catch (e) {
      setErrorMessage(e);
      setIsLoading(false);
    }
  }

  return (
    <Flex
      asChild
      height="100vh"
      direction="column"
      align="center"
      gap="4"
      p="6"
    >
      <form onSubmit={handleLogin}>
        <Heading size="8">도서 관리</Heading>

        <Flex direction="column" gap="4">
          <TextField.Root
            name="password"
            type="password"
            placeholder="비밀번호"
            size="2"
          />
          {errorMessage && errorMessage?.length > 0 && (
            <Text size="1" color="red">
              {errorMessage}
            </Text>
          )}
          <Button loading={isLoading}>로그인</Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default AdminSignInPage;
