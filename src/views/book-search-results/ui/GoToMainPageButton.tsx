'use client';
import { Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function GoToMainPageButton({ children }: Props) {
  const router = useRouter();
  function handleReplaceToMain() {
    router.replace('/');
  }
  return <Button onClick={handleReplaceToMain}>{children}</Button>;
};

