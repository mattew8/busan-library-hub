'use client';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@radix-ui/themes';

interface Props {
  children: ReactNode;
}
const GoToMainPageButton = ({ children }: Props) => {
  const router = useRouter();
  function handleReplaceToMain() {
    router.replace('/');
  }
  return <Button onClick={handleReplaceToMain}>{children}</Button>;
};

export default GoToMainPageButton;
