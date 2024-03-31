// let VuepressEs = require('./src/index.js')

// 初始化定义 & 启动报警提示
// let vuepressEs = new VuepressEs({
//   // 1.导航栏文案（因为导航栏文件夹不能是中文的）
//   navDataConfig: [
//       ['1.quickcheck', '速查'],
//       ['2.note', '前端体系'],
//       ['3.other', '其他']
//   ]
// })


module.exports = {
  title: "JY-前端",
  description: "前端知识点",
  theme: "reco",
  dest:'./dist',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
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
    ],
    noFoundPageByTencent: true,
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    codeTheme: "tomorrow",
    author: 'JY前端',
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "菜单", // 默认文案 “分类”
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
    ['autobar'],
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      body: [
        {
          type: 'title',
          content: '欢迎来到JY-前端技术博客！ 🎉🎉🎉',
          style: 'text-aligin: center;'
        },
        {
          type:'text',
          content:`这里是一个充满前端技术的世界，我们致力于分享最新的前端开发趋势、技巧和经验。无论您是初学者还是经验丰富的开发者，都能在这里找到有价值的内容。
          我们希望通过这个博客，与您一同探索前端开发的无限可能。让我们携手共进，探索前端技术的奥秘，共同成长，共同进步！
         ！`,
         style: 'text-aligin:center;font-size: 12px;'
        },
        // {
        //   type: 'image',
        //   src: '/qq.png'
        // }
      ],
      footer: [
        // {
        //   type: 'button',
        //   text: '打赏',
        //   link: '/donate'
        // },
      ]
    }],
 ]
};
