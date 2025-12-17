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
          { text: '기능', link: '/features/schedule' },
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
              text: '기능',
              items: [
                { text: '일정관리', link: '/features/schedule' },
                { text: '휴가관리', link: '/features/vacation' },
                { text: '전자결재', link: '/features/approval' },
                { text: '권한관리', link: '/features/permission' },
              ]
            }
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
          { text: 'Features', link: '/en/features/schedule' },
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
              text: 'Features',
              items: [
                { text: 'Schedule', link: '/en/features/schedule' },
                { text: 'Vacation', link: '/en/features/vacation' },
                { text: 'Approval', link: '/en/features/approval' },
                { text: 'Permission', link: '/en/features/permission' },
              ]
            }
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
