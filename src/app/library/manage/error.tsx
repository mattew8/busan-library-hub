'use client';

import { Button, Flex, Heading, Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';

const error = () => {
  const router = useRouter();
  function handleRouteToSignIn() {
    router.replace('/library/login');
  }

  return (
    <Flex direction="column" p="6" gap="3" maxWidth="360px">
      <Heading>잘못된 접근입니다.</Heading>
      <Text>로그인 후 다시 시도해주세요.</Text>
      <Button onClick={handleRouteToSignIn}>로그인</Button>
    </Flex>
  );
};

export default error;
