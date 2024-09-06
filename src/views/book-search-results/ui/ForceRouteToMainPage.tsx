'use client';

import { useRouter } from 'next/navigation';

const ForceRouteToMainPage = () => {
  const router = useRouter();
  router.replace('/');

  return null;
};

export default ForceRouteToMainPage;
