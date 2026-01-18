import { supabase } from '../database/supabase';

/**
 * 현재 로그인한 사용자의 도서관 정보 조회
 */
export async function getLibrary() {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error('로그인이 필요합니다.');
  }

  const { data: library, error } = await supabase
    .from('library')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return library;
}
