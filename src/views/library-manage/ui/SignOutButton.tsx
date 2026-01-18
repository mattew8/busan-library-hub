import { signOut } from '@/shared/api';
import { Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';

export function SignOutButton() {
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