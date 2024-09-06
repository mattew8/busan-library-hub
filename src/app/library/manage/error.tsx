'use client';

import { useRouter } from 'next/navigation';

const error = () => {
  const router = useRouter();
  function handleRouteToSignIn() {
    router.replace('/library/login');
  }

  return (
    <div>
      <h2>잘못된 접근입니다.</h2>
      <h3>로그인 후 다시 시도해주세요.</h3>
      <button onClick={handleRouteToSignIn}>로그인</button>
    </div>
  );
};

export default error;
