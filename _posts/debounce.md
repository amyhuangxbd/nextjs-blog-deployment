---
title: "手写防抖函数"
excerpt: "函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。"
coverImage: "${basePath}/assets/blog/debounce.avif"
date: '2024-06-14T10:11:44.511Z'
author:
  name: "Hebe Huang"
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/debounce.avif"
---

### 防抖
函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
```javascript
function debounce(fn,wait) {
    let timer = null;
    return function() {
        let context = this;
        let args = arguments

        if (timer) {
            clearTimeout(timer);
            timer = null
        }

        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait)
    }
}
```
