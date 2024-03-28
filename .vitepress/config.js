// https://vitepress.dev/reference/site-config
export default {
  title: "home | Coder Hao",
  head: [["link", { rel: "icon", href: "/blogs/snail.svg" }]],
  description: "Home of Coder Hao",
  base: "/blogs/",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/snail.svg',
    siteTitle: 'Coder Hao',
    nav: [
      {text: "Examples", link: "/markdown-examples"},
      { text: "🏡Home", link: "/",},
      {text: "🔖Tags", link: "/tags",},
      {text: "📃Archives", link: "/archives",}
    ],

    search: {
      provider: 'local'
    },

    outlineTitle: 'Outline',

    socialLinks: [
      {icon: "github", link: "https://github.com/coderhaooo"}
    ],

    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2024-present Coder Hao'
    }
  }
};
