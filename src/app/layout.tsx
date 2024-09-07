import './global.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

export const metadata = {
  title: '부산 도서관 통합 검색',
  description: '부산 사설 도서관 도서 정보 통합 조회 서비스입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Theme accentColor="grass" grayColor="olive">
          {children}
        </Theme>
      </body>
    </html>
  );
}
