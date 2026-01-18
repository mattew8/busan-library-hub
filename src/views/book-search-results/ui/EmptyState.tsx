import { Flex, Heading, Text } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface Props {
  title?: string;
  message?: string;
  action?: ReactNode;
}

export function EmptyState({
  title = '결과가 없습니다',
  message = '다른 검색어로 다시 시도해주세요.',
  action,
}: Props) {
  return (
    <>
      <Heading size="6">{title}</Heading>
      <Flex direction="column" align="center" justify="center" gap="3" mt="4" minHeight="200px">
        <Text size="3" color="gray">
          {message}
        </Text>
      </Flex>
      {action}
    </>
  );
}
