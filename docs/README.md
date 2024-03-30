---
home: true
heroText: JY的前端知识博客
tagline: JY前端知识库
heroImage: /hero.jpg
heroImageStyle: {
  maxWidth: '200px',
  width: '100%',
  display: block,
  margin: '9rem auto 2rem',
  background: '#fff',
  borderRadius: '50%',
}
isShowTitleInHome: false
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题
- title: Today
  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
- title: Tomorrow
  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---
<!-- <marquee> -->
  <!-- <Cat/> -->
  <!-- <KanBanNiang home message="hello"/> -->
  <Boxx :blockStyle="blockStyle"  />
<!-- </marquee> -->

<script>
 export default {
  data() {
   return {
    blockStyle: {'background':'#eee','color':'#000'},
    titleStyle: {'margin-right': '10%','font-size':'16px'},
    contentStyle: {'margin-right': '20%','font-size':'10px',
                               "margin-top": "1rem","margin-bottom": "0.4rem"},
   }
  }
 }
</script>
