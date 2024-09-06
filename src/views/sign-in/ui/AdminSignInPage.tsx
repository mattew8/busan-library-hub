'use client';

import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from '@/shared/api';

const AdminSignInPage = () => {
  const router = useRouter();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const password = formJson['password'];
    try {
      await signIn(`${password}@gmail.com`, `${password}`);
      router.push('/library/manage');
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <h1>관리자 페이지</h1>
      <form onSubmit={handleLogin}>
        <input name="password" type="password" />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default AdminSignInPage;
