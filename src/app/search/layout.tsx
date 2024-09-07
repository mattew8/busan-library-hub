import React, { ReactNode } from 'react';
import { Heading, Box } from '@radix-ui/themes';

interface Props {
  children: ReactNode;
}
const layout = ({ children }: Props) => {
  return (
    <div>
      <Box
        style={{
          background: '#27AE60',
          padding: '60px 0',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Heading size="8">통합 검색 결과</Heading>
      </Box>

      {children}
    </div>
  );
};

export default layout;
