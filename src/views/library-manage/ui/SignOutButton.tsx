'use client';

import React from 'react';
import { signOut } from '@/shared/api';
import { useRouter } from 'next/navigation';

const SignOutButton = () => {
  const router = useRouter();
  async function handleSignOut() {
    await signOut();
    router.replace('/library/login');
  }

  return <button onClick={handleSignOut}>로그아웃</button>;
};

export default SignOutButton;
