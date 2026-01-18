import { Flex, Heading, Spinner, Text } from '@radix-ui/themes';

interface Props {
  title?: string;
  message?: string;
}

export function LoadingState({ title = '로딩 중...', message = '데이터를 불러오는 중입니다.' }: Props) {
  return (
    <>
      <Heading size="6">{title}</Heading>
      <Flex direction="column" align="center" justify="center" gap="3" mt="4" minHeight="200px">
        <Spinner size="3" />
        <Text size="3" color="gray">
          {message}
        </Text>
      </Flex>
    </>
  );
}
