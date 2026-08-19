# porest-docs — 작업 규칙

> **워크스페이스 공통 규칙**(Git 작업 격리 · 스테이징 범위 · 태그·릴리스)은
> 상위 `/home/lshdainty/study/CLAUDE.md` 에 있다. Claude Code 가 디렉토리 워크업으로
> 자동 로드하므로 여기에 복사하지 않는다 — 복사본은 원문이 바뀌어도 따라오지 않는다.

## 이 레포는

POREST HR 제품의 사용자 가이드 문서 사이트. 애플리케이션 코드는 없고 마크다운 48개(ko 루트 24 + `en/` 24)와
`.vitepress/config.ts` 하나가 전부다. VitePress 1.6.4 정적 사이트, `main` 푸시가 곧 GitHub Pages 프로덕션 배포다.

## 검증

```bash
export PATH="$HOME/.local/node/bin:$PATH"   # 비대화형 셸엔 node 가 없다
npm ci          # node_modules 가 로컬에 없다. CI 와 같은 ci — install 로 lock 을 흔들면 CI 가 깨진다
npm run build   # 유일한 실질 검증. 린트·테스트·타입체크는 이 레포에 없다
```

`build` 가 잡는 건 **본문 마크다운의 죽은 링크뿐**이다(`ignoreDeadLinks` 미설정 → 기본 false).
페이지를 옮기거나 지웠으면 config 링크는 이렇게 손으로 확인해라.

```bash
grep -oE "link: '/[^']*'" .vitepress/config.ts | sed "s/link: '//;s/'//" | sort -u \
  | while read l; do p="${l#/}"; [ -f "$p.md" ] || echo "MISSING: $l"; done
```

배포 경로가 걸리면 `npm run preview`. `base: '/porest-docs/'` 라 `npm run dev` 와 경로가 다르다.

## 이 레포에서만 통하는 것

- **빌드가 초록이어도 링크는 죽어 있을 수 있다.** frontmatter 의 hero actions 와 `config.ts` 의 nav/sidebar 링크는
  검사 대상이 아니다. 커밋 `321bc0d` 가 `features/schedule.md` 를 지웠는데 `index.md:14` 의 '기능 보기' 버튼은
  아직 `/features/schedule` 을 가리키고, CI 는 통과했고, 배포된 그 버튼은 지금 404 다.
- **페이지를 추가·이동·삭제하면 사이드바 두 벌을 다 고쳐라.** `config.ts` 의 root 로케일(24-104줄)과
  en 로케일(148-228줄)은 자동 생성 없이 별개로 하드코딩돼 있다. 한쪽만 고치면 다른 언어에서 그 페이지가 안 뜬다.
- **문서는 ko/en 쌍으로 만들어라.** 루트 `X.md` 마다 `en/X.md` 가 같은 상대경로에 있어야 한다(현재 24:24).
  한국어만 추가하면 영어 사이드바 항목이 비거나 대상 없는 링크가 생긴다.
- **base 접두 규칙이 두 군데에서 반대다.** `head[]` 자산은 base 가 자동으로 안 붙으니 직접
  `/porest-docs/favicon.ico` 로 쓰고(config.ts:9), `themeConfig` 자산은 withBase 를 타니 `/logo.svg` 로 쓴다(:234).
  head 에 `/foo.png` 를 넣으면 dev 에선 보이고 배포하면 404, themeConfig 에 base 를 붙이면 경로가 이중 접두된다.
- **머지 = 즉시 공개.** `main` 푸시가 바로 Pages 로 나간다. 스테이징이 없어 오탈자·깨진 링크가 곧장 사용자에게 간다.
- **README.md 의 '문서 구조' 섹션을 믿지 마라.** 이미 삭제된 `features/schedule.md` 등을 나열한다.
  구조의 진실은 `config.ts` 사이드바와 실제 파일 트리다. 이걸 보고 파일을 만들면 사이드바에 없는 고아 페이지가 된다.
