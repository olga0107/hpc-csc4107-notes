import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/hpc-csc4107-notes/',
  title: 'CSC4107 Notes',
  description: 'High Performance Computing lecture notes — CUHK-Shenzhen, Fall 2026',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md', 'node_modules/**'],

  markdown: {
    image: { lazyLoading: true },
    math: true
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Lectures', link: '/notes/lec01-intro-and-locality' }
    ],

    sidebar: [
      {
        text: 'Lectures',
        items: [
          { text: 'Lec 01 · Locality & Memory Hierarchy', link: '/notes/lec01-intro-and-locality' },
          { text: 'Lec 02 · Register Reuse & Cache', link: '/notes/lec02-register-and-cache' }
        ]
      }
    ],

    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },

    docFooter: { prev: 'Previous', next: 'Next' }
  }
})
