import { Flex, Heading, Text } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface Props {
  title?: string;
  error: string;
  description?: string;
  action?: ReactNode;
}

export function ErrorState({
  title = '오류',
  error,
  description = '잠시 후 다시 시도해주세요.',
  action,
}: Props) {
  return (
    <>
      <Heading size="6">{title}</Heading>
      <Flex direction="column" align="center" justify="center" gap="3" mt="4" minHeight="200px">
        <Text size="4" color="red">
          {error}
        </Text>
        <Text size="2" color="gray">
          {description}
        </Text>
      </Flex>
      {action}
    </>
  );
}
