# busan-library-hub

## 소개

**busan-library-hub**는 부산 지역의 사설 도서관들을 위한 웹 애플리케이션입니다. 공영 도서관들이 정부에서 제공하는 도서 검색 프로그램을 통해 재고를 파악할 수 있는 반면, 사설 도서관들은 개인정보 수집 등의 이유로 이러한 프로그램을 사용할 수 없습니다. 이로 인해 사설 도서관들은 서로의 재고를 파악하지 못해 중복된 책을 구입하는 비효율이 발생하고 있습니다.

이 프로젝트는 이러한 문제를 해결하기 위해 다음과 같은 기능을 제공합니다:

- 각 도서관별 계정 발급
- 도서 목록 엑셀 파일 업로드를 통한 재고 관리
- 전체 도서 검색 기능 제공

## 프로젝트 기간

- **작업일**: 2023년 9월 5일 ~ 9월 7일

## 주요 기능

1. **도서관 계정 관리 시스템**

   - Supabase를 이용해 각 사용자 계정, 도서관, 도서 데이터를 관리합니다.
   - RLS(Row-Level Security)를 통해 각 도서관은 자신의 도서관에만 자료를 업로드할 수 있습니다.

2. **도서 업로드 시스템**

   - 도서관 관리자 페이지에서 엑셀 파일을 업로드하여 도서 목록을 저장할 수 있습니다.

3. **도서 검색 시스템**
   - 메인 페이지에서 모든 도서관에서 업로드한 전체 도서를 검색할 수 있습니다.
   - 도서 제목, 저자, 출판사, 도서관 이름 을 기준으로 검색할 수 있습니다.

## 배포

- **웹사이트 링크**: [busan-library-hub](https://busan-library-hub-mattew8s-projects.vercel.app/)

## 설치 및 실행 방법

1. **프로젝트 클론 및 디렉토리 이동**

   ```bash
   git clone https://github.com/username/busan-library-hub.git
   cd busan-library-hub
   ```

2. **의존성 설치**
   ```bash
   yarn install
   ```

3. **개발 서버 실행**
   ```bash
   yarn dev
   ```

4. **프로덕션 빌드**
   ```bash
   yarn build
   ```

## 시스템 요구 사항

- **Node.js**: 18.12.0 버전 이상
- **Yarn**: 4.4.1 버전

## 주요 의존성

- **Next.js**: 14.2.7 (App Directory 사용)
- **TypeScript**
- **Supabase**
- **Radix UI**
- **xlsx**: 업로드한 엑셀 파일 해석용 라이브러리

## 프로젝트 구조

이 프로젝트는 프론트엔드 프로젝트 폴더 구조 아키텍처 중 하나인 **Feature-Sliced Design (FSD)** 패턴을 적용하였습니다. 프로젝트 규모가 작은 관계로 다음의 세 계층만 사용하여 의존성 방향을 유지하였습니다:

- **Shared**: 공용 모듈 및 컴포넌트
- **Views**: 기존 FSD 패턴의 `pages`에 해당하며, Next.js와의 호환을 위해 네이밍을 수정하였습니다.
- **App**: 기존 FSD 패턴의 `app`이자 Next.js의 `app` 디렉토리에 해당합니다. FSD 패턴의 `app`에 해당하는 슬라이스가 없어 동일한 네이밍을 사용하였습니다.

## 기여자

- **@mattew8**

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.


   
