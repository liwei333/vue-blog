---
title: vue-插槽和作用域插槽 # 文章标题
date: 2024-03-30 10:00:00 # 时间
sidebar: 'auto' # 侧边栏
categories: # 分类
 - vue
tags: # 标签
 - javascript 
 - vue
 - 插槽和作用域插槽
---


`有时我们需要多个插槽。例如对于一个带有如下模板的 <base-layout> 组件：`

```js
<div class="container">
  <header>
    <!-- 我们希望把页头放这里 -->
  </header>
  <main>
    <!-- 我们希望把主要内容放这里 -->
  </main>
  <footer>
    <!-- 我们希望把页脚放这里 -->
  </footer>
</div>

```
`对于这样的情况，<slot> 元素有一个特殊的 attribute：name。这个 attribute 可以用来定义额外的插槽：`

```js

<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

`一个不带 name 的 <slot> 出口会带有隐含的名字“default”。
在向具名插槽提供内容的时候，我们可以在一个 <template> 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称：`
```js
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```
`Vue.js 中的作用域插槽（Scoped Slots）是一种高级技术，用于在父组件中传递数据给子组件，并让子组件有能力自定义如何渲染这些数据。作用域插槽允许子组件在其模板中定义额外的插槽内容，并且可以访问父组件中的数据，这样就实现了更高级的组件通信和灵活性。`

`在 Vue.js 中，通常使用 <slot> 元素来定义插槽，而作用域插槽则是在 <slot> 元素上添加 v-slot 指令，并通过该指令可以传递数据给子组件。作用域插槽的语法如下：`

```js

<!-- 父组件模板 -->
<template>
  <child-component>
    <!-- 使用作用域插槽，并传递数据给子组件 -->
    <template v-slot:default="slotProps">
      <p>{{ slotProps.message }}</p>
    </template>
  </child-component>
</template>

<!-- 子组件模板 -->
<template>
  <div>
    <!-- 使用父组件传递过来的数据 -->
    <slot :message="parentMessage"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentMessage: 'Hello from parent component!'
    };
  }
};
</script>

```
