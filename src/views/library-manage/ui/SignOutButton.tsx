'use client';

import React from 'react';
import { signOut } from '@/shared/api';
import { useRouter } from 'next/navigation';
import { Button } from '@radix-ui/themes';

const SignOutButton = () => {
  const router = useRouter();
  async function handleSignOut() {
    const isConfirm = confirm('로그아웃 하시겠습니까?');
    if (isConfirm) {
      await signOut();
      router.replace('/library/login');
    }
  }

  return (
    <Button onClick={handleSignOut} style={{ color: '#fff' }} variant="outline">
      로그아웃
    </Button>
  );
};

export default SignOutButton;
