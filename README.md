# POREST Documentation

POREST 사용자 가이드 문서 사이트입니다.

## Tech Stack

- [VitePress](https://vitepress.dev/) - Static Site Generator
- Markdown 기반 문서 관리
- 다국어 지원 (한국어, 영어)

## Development

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 프리뷰
npm run preview
```

## 문서 구조

```
├── index.md                 # 홈페이지
├── guide/                   # 시작 가이드
│   ├── introduction.md      # 소개
│   ├── login.md             # 로그인
│   └── layout.md            # 화면 구성
├── features/                # 기능 설명
│   ├── schedule.md          # 일정관리
│   ├── vacation.md          # 휴가관리
│   ├── approval.md          # 전자결재
│   └── permission.md        # 권한관리
├── faq.md                   # FAQ
└── en/                      # 영문 문서
```

## 문서 작성 가이드

### 새 문서 추가

1. 해당 폴더에 `.md` 파일 생성
2. `.vitepress/config.ts`의 sidebar에 추가

### 다국어 문서

- 한국어: 루트 폴더 (`/guide/`, `/features/`)
- 영어: `/en/` 폴더 (`/en/guide/`, `/en/features/`)

## 배포

GitHub Pages 또는 Vercel로 자동 배포됩니다.

## 관련 링크

- [POREST](https://github.com/lshdainty/POREST) - 메인 레포지토리
- [porest-front](https://github.com/lshdainty/porest-front) - 프론트엔드
- [porest-back](https://github.com/lshdainty/porest-back) - 백엔드
