import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/frpc-hub-doc/',
  title: "Frpc-Hub",
  description: "现代化的 Frpc 管理平台 - 基于 PocketBase 和 React 构建的强大内网穿透管理系统",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['script', { defer: '', src: 'https://umami.jwinks.com/script.js', 'data-website-id': '391debd4-52ac-47c0-a6e6-c1edabe3e671' }]
  ],
  metaChunk: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.svg', width: 24, height: 24 },

    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/what-is-frpc-hub' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '什么是 Frpc-Hub?', link: '/guide/what-is-frpc-hub' },
          { text: '快速开始', link: '/guide/getting-started' },
        ]
      },
      {
        text: '安装部署',
        items: [
          {
            text: '安装',
            items: [
              { text: '二进制', link: '/deploy/install/binary' },
              { text: 'Docker', link: '/deploy/install/docker' },
            ]
          },
          {
            text: '升级',
            items: [
              { text: '二进制', link: '/deploy/upgrade/binary' },
              { text: 'Docker', link: '/deploy/upgrade/docker' },
            ]
          }
        ]
      },
      {
        text: '故障排除',
        items: [
          { text: '常见问题', link: '/troubleshoot/faq' },
        ]
      }
      // {
      //   text: '专业版',
      //   items: [
      //     { text: '说明', link: '/pro/binary' },
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/luckjiawei/frpc-hub' }
    ],

    footer: {
      message: '基于 MIT 协议开源',
      copyright: 'Copyright © 2026-present Frpc-Hub'
    },

    search: {
      provider: 'local'
    }
  }
})
