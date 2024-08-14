---
title: "去除字符串中出现次数最少的字符，不改变原字符串的顺序。"
excerpt: "实现删除字符串中出现次数最少的字符，若出现次数最少的字符有多个，则把出现次数最少的字符都删除。输出删除这些单词后的字符串，字符串中其它字符保持原来的顺序。"
coverImage: "${basePath}/assets/blog/15.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: "Hebe Huang"
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/15.jpg"
---

## 方法一
```
function removeLeastFrequentChar(str) {
    const map = new Map()
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1)
        } else {
            map.set(str[i], 1)
        }
    }
    let minCount = Math.min.apply(undefined, [...map.values()])
    for (const [key, value] of map) {
        if (value === minCount) {
            map.delete(key)
        }
    }
    let ans = ''
    for(let i = 0; i < str.length;i++) {
        if (map.has(str[i])){
            ans += str[i]
        }
    }
    return ans;
}
```
## 方法二
实现删除字符串中出现次数最少的字符，若出现次数最少的字符有多个，则把出现次数最少的字符都删除。输出删除这些单词后的字符串，字符串中其它字符保持原来的顺序。

“ababac” —— “ababa”
“aaabbbcceeff” —— “aaabbb”
难度：
更新时间：2024-07-22
参考答案：

可以通过以下步骤使用 JavaScript 去除字符串中出现次数最少的字符，同时不改变原字符串的顺序：

定义一个对象来存储每个字符出现的次数。

遍历字符串，将每个字符出现的次数保存到对象中。

找出出现次数最少的字符，并将其从对象中删除。

遍历字符串并根据存储的次数对象过滤出符合条件的字符。

将符合条件的字符拼接成新的字符串并返回。

下面是代码示例：

复制
function removeLeastFrequentChar(str) {
  // 定义存储每个字符出现次数的对象
  const charMap = {};

  // 遍历字符串并将每个字符出现的次数保存到对象中
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  // 找出出现次数最少的字符，并将其从对象中删除
  const minCount = Math.min(...Object.values(charMap));
  for (const key in charMap) {
    if (charMap.hasOwnProperty(key)) {
      if (charMap[key] === minCount) {
        delete charMap[key];
      }
    }
  }

  // 遍历字符串并根据存储的次数对象过滤出符合条件的字符
  const filteredChars = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charMap[char]) {
      filteredChars.push(char);
    }
  }

  // 将符合条件的字符拼接成新的字符串并返回
  return filteredChars.join("");
}