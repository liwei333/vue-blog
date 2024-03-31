---
title: map集合 # 文章标题
date: 2024-03-30 10:00:00 # 时间
sidebar: 'auto' # 侧边栏
categories: # 分类
 - es6
tags: # 标签
 - es6
 - map集合
---

键值对（key value pair）数据集合的特点：键不可重复

map集合专门用于存储多个键值对数据。

在map出现之前，我们使用的是对象的方式来存储键值对，键是属性名，值是属性值。

使用对象存储有以下问题：

1. 键名只能是字符串
2. 获取数据的数量不方便
3. 键名容易跟原型上的名称冲突

1. 如何创建map

```js
new Map(); //创建一个空的map
new Map(iterable); //创建一个具有初始内容的map，初始内容来自于可迭代对象每一次迭代的结果，但是，它要求每一次迭代的结果必须是一个长度为2的数组，数组第一项表示键，数组的第二项表示值
```

2. 如何进行后续操作

- size：只读属性，获取当前map中键的数量
- set(键, 值)：设置一个键值对，键和值可以是任何类型
  - 如果键不存在，则添加一项
  - 如果键已存在，则修改它的值
  - 比较键的方式和set相同
- get(键): 根据一个键得到对应的值
- has(键)：判断某个键是否存在
- delete(键)：删除指定的键
- clear(): 清空map

3. 和数组互相转换

和set一样

4. 遍历

- for-of，每次迭代得到的是一个长度为2的数组
- forEach，通过回调函数遍历
  - 参数1：每一项的值
  - 参数2：每一项的键
  - 参数3：map本身

```js
  const mp = new Map([
            ["a", 3],
            ["c", 10],
            ["b", 4],
            ["c", 5]
        ]);
        const result = [...mp]
        console.log(result);
        // for (const [key, value] of mp) {
        //     console.log(key, value)
        // }
        mp.forEach((value, key, mp) => {
            console.log(value, key, mp)
        })
```

```js
  const mp1 = new Map([["a", 3], ["b", 4], ["c", 5]]);
  const obj = {};
  mp1.set(obj, 6456);
  mp1.set("a", "abc");
  mp1.set(obj, 111);
  
  console.log(mp1)
  console.log("总数：", mp1.size);
  console.log("get('a')", mp1.get("a"));
  console.log("has('a')", mp1.has("a"));
```
