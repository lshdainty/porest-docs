import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'POREST',
  description: '사람이 숲이 되는 곳, 인재의 숲을 키우다',
  base: '/porest-docs/',

  head: [
    ['link', { rel: 'icon', href: '/porest-docs/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#00A86B' }],
  ],

  locales: {
    root: {
      label: '한국어',
      lang: 'ko',
      themeConfig: {
        nav: [
          { text: '가이드', link: '/guide/introduction' },
          { text: '기능', link: '/features/home/dashboard' },
          { text: '관리자', link: '/admin/company' },
          { text: 'FAQ', link: '/faq' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '시작하기',
              items: [
                { text: '소개', link: '/guide/introduction' },
                { text: '로그인', link: '/guide/login' },
                { text: '화면 구성', link: '/guide/layout' },
              ]
            }
          ],
          '/features/': [
            {
              text: '홈',
              collapsed: false,
              items: [
                { text: '대시보드', link: '/features/home/dashboard' },
                { text: '캘린더', link: '/features/home/calendar' },
                { text: '공지사항', link: '/features/home/notice' },
              ]
            },
            {
              text: '휴가',
              collapsed: false,
              items: [
                { text: '휴가 내역', link: '/features/vacation/history' },
                { text: '휴가 신청', link: '/features/vacation/application' },
              ]
            },
            {
              text: '업무',
              collapsed: false,
              items: [
                { text: '업무 보고', link: '/features/work/report' },
                { text: '업무 일정', link: '/features/work/schedule' },
              ]
            },
            {
              text: '문화',
              collapsed: false,
              items: [
                { text: '회비', link: '/features/culture/dues' },
                { text: '규정', link: '/features/culture/regulation' },
              ]
            },
          ],
          '/admin/': [
            {
              text: '관리자',
              items: [
                { text: '회사 관리', link: '/admin/company' },
                { text: '공휴일 관리', link: '/admin/holiday' },
                { text: '업무 코드', link: '/admin/work-code' },
                { text: '공지사항 관리', link: '/admin/notice' },
              ]
            },
            {
              text: '사용자 관리',
              collapsed: false,
              items: [
                { text: '사용자 관리', link: '/admin/users/management' },
                { text: '부서 관리', link: '/admin/users/department' },
              ]
            },
            {
              text: '휴가 관리',
              collapsed: false,
              items: [
                { text: '휴가 승인', link: '/admin/vacation/approval' },
                { text: '휴가 정책', link: '/admin/vacation/policy' },
                { text: '휴가 계획', link: '/admin/vacation/plan' },
              ]
            },
            {
              text: '권한 관리',
              items: [
                { text: '권한 설정', link: '/admin/authority' },
              ]
            },
          ],
        },
        outline: {
          label: '목차',
        },
        docFooter: {
          prev: '이전',
          next: '다음',
        },
        lastUpdated: {
          text: '마지막 수정',
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '검색',
                buttonAriaLabel: '검색',
              },
              modal: {
                noResultsText: '검색 결과가 없습니다',
                resetButtonTitle: '초기화',
                footer: {
                  selectText: '선택',
                  navigateText: '이동',
                  closeText: '닫기',
                },
              },
            },
          },
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/introduction' },
          { text: 'Features', link: '/en/features/home/dashboard' },
          { text: 'Admin', link: '/en/admin/company' },
          { text: 'FAQ', link: '/en/faq' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/en/guide/introduction' },
                { text: 'Login', link: '/en/guide/login' },
                { text: 'Layout', link: '/en/guide/layout' },
              ]
            }
          ],
          '/en/features/': [
            {
              text: 'Home',
              collapsed: false,
              items: [
                { text: 'Dashboard', link: '/en/features/home/dashboard' },
                { text: 'Calendar', link: '/en/features/home/calendar' },
                { text: 'Notice', link: '/en/features/home/notice' },
              ]
            },
            {
              text: 'Vacation',
              collapsed: false,
              items: [
                { text: 'Vacation History', link: '/en/features/vacation/history' },
                { text: 'Vacation Application', link: '/en/features/vacation/application' },
              ]
            },
            {
              text: 'Work',
              collapsed: false,
              items: [
                { text: 'Work Report', link: '/en/features/work/report' },
                { text: 'Work Schedule', link: '/en/features/work/schedule' },
              ]
            },
            {
              text: 'Culture',
              collapsed: false,
              items: [
                { text: 'Dues', link: '/en/features/culture/dues' },
                { text: 'Regulation', link: '/en/features/culture/regulation' },
              ]
            },
          ],
          '/en/admin/': [
            {
              text: 'Admin',
              items: [
                { text: 'Company', link: '/en/admin/company' },
                { text: 'Holiday', link: '/en/admin/holiday' },
                { text: 'Work Code', link: '/en/admin/work-code' },
                { text: 'Notice', link: '/en/admin/notice' },
              ]
            },
            {
              text: 'User Management',
              collapsed: false,
              items: [
                { text: 'User Management', link: '/en/admin/users/management' },
                { text: 'Department', link: '/en/admin/users/department' },
              ]
            },
            {
              text: 'Vacation Management',
              collapsed: false,
              items: [
                { text: 'Approval', link: '/en/admin/vacation/approval' },
                { text: 'Policy', link: '/en/admin/vacation/policy' },
                { text: 'Plan', link: '/en/admin/vacation/plan' },
              ]
            },
            {
              text: 'Permission',
              items: [
                { text: 'Authority', link: '/en/admin/authority' },
              ]
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'POREST',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lshdainty/POREST' },
    ],

    footer: {
      message: 'Where People Grow into a Forest',
      copyright: '© 2025 POREST. All rights reserved.',
    },

    search: {
      provider: 'local',
    },
  },

  lastUpdated: true,
})
