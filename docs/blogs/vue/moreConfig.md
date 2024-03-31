---
title: vue其他配置 # 文章标题
date: 2024-03-30 10:00:00 # 时间
sidebar: 'auto' # 侧边栏
categories: # 分类
 - vue
tags: # 标签
 - vue
 - vue其他配置
---

所有配置参考：[vue-cli 配置](https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE)

# vue.config.js

- devServer
- publicPath
- outputDir
- runtimeCompiler
- transpileDependencies
- configureWebpack
- css.requireModuleExtension

# babel配置

写到项目根目录下的`babel.config.js`中

# ESLint

ESLint 可以通过 `.eslintrc` 或 `package.json` 中的 `eslintConfig` 字段来配置。

# postcss

写到`postcss.config.js`

```js
// vue-cli的配置文件
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://test.my-site.com',
      },
    },
  },
  publicPath: '/news',
  // runtimeCompiler: true,
  // transpileDependencies: []
  // configureWebpack: {
  //   // webpack配置
  // }
  // css: {
  //   requireModuleExtension: false,
  // },
};

```

```js
// babel.config.js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}


```