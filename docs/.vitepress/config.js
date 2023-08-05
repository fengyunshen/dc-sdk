import { defineConfig } from 'vitepress'
import zhConfig from './locales/zh.config.js'
import enConfig from './locales/en.config.js'
export default defineConfig({
  base: '/docs/',
  cleanUrls: 'without-subfolders',
  head: [['link', { rel: 'icon', href: '/assets/favicon.png' }]],
  locales: {
    root: zhConfig,
    // en: enConfig,
  },
  themeConfig: {
    logo: '/assets/favicon.png',
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/dvgis/dc-sdk' }],
    footer: {
      copyright: '版权所有 © 2019 - 2023 数字视觉(Digital Visual)',
    },
  },
})
