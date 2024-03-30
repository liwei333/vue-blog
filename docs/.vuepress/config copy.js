module.exports = {
  title: "JY-前端",
  description: "前端知识点",
  theme: "reco",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
      { text: 'Tags', link: '/tags/', icon: 'reco-tag' }
    ],
  ],
  themeConfig: {
    type: "blog",
    huawei: true,
    //头部导航栏
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      // { text: 'sidebar', link: '/views/sidebar/' },
      // { text: 'sidebar', link: '/views/sidebargroup/' }
    ],
    noFoundPageByTencent: true,
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    codeTheme: "tomorrow",
    author: 'JY前端',
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "前端", // 默认文案 “分类”
      },
    },
    // 搜索设置
    search: true,
    
    // 项目开始时间，只填写年份
    startYear: '2019',
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "http://v1.vuepress-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'http://v1.vuepress-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
    ],
  
    // 备案
    // record: 'ICP 备案文案',
    // recordLink: 'ICP 备案指向链接',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
  },
  plugins: [
    ["vuepress-plugin-boxx"],
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      body: [
        {
          type: 'title',
          content: '欢迎加入QQ11交流群 🎉🎉🎉',
          style: 'text-aligin: center;'
        },
        {
          type: 'image',
          src: '/qq.png'
        }
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/donate'
        },
        // {
        //   type: 'button',
        //   text: '打赏',
        //   link: '/donate'
        // }
      ]
    }],
 ]
};
