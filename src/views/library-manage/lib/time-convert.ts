/**
 *
 * @param time 변환 시간
 * @returns 한국 시간 기준 "OO년 OO월 OO일" 형태로 변환
 */
export function convertUTCToKST(time: string): string {
  // KST 시간 문자열을 Date 객체로 변환
  const kstDate = new Date(time);

  // "YYYY년 MM월 DD일 HH시 mm분" 형식으로 변환
  const year = kstDate.getFullYear();
  const month = String(kstDate.getMonth() + 1).padStart(2, '0');
  const day = String(kstDate.getDate()).padStart(2, '0');
  const hours = String(kstDate.getHours()).padStart(2, '0');
  const minutes = String(kstDate.getMinutes()).padStart(2, '0');

  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
}
