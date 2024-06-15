---
title: "手写节流函数"
excerpt: "函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。"
coverImage: "${basePath}/assets/blog/throttle_debounce.gif"
date: '2024-06-14T14:52:34.278Z'
author:
  name: "Hebe Huang"
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/throttle_debounce.gif"
---

## 节流
  函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。

```
function throttle(fn, delay) {
    let timer;

    return function() {
        let context = this;
        let args = arguments;
        if (timer) {
            return
        }

        timer = setTimeout(() => {
            fn.apply(context, args)
            timer = null
        }, delay)
    }
}
```