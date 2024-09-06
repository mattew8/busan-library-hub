'use client';

import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from '@/shared/api';

const AdminSignInPage = () => {
  const router = useRouter();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await signIn('test@gmail.com', 'test');
      router.push('/library/manage');
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <h1>관리자 페이지</h1>
      <form onSubmit={handleLogin}>
        <input name="password" />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default AdminSignInPage;
