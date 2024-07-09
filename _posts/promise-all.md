---
title: "手写promise.all"
excerpt: "Promise.all 用来处理多个并发请求，也是为了页面数据构造的方便，将一个页面所用到的在不同接口的数据一起请求过来，不过，如果其中一个接口失败了，多个请求也就失败了，页面可能啥也出不来，这就看当前页面的耦合程度了"
coverImage: "${basePath}/assets/blog/promise-all.svg"
date: '2024-06-14T10:11:44.511Z'
author:
  name: "Hebe Huang"
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/promise-all.svg"
---

### 核心思路

 1. 接收一个 Promise 实例的数组或具有 Iterator 接口的对象作为参数
 2. 这个方法返回一个新的 promise 对象，
 3. 遍历传入的参数，用Promise.resolve()将参数"包一层"，使其变成一个promise对象
 4. 参数所有回调成功才是成功，返回值数组与参数顺序一致
 5. 参数数组其中一个失败，则触发失败状态，第一个触发失败的 Promise 错误信息作为 Promise.all 的错误信息。

### 实现代码
  一般来说，Promise.all 用来处理多个并发请求，也是为了页面数据构造的方便，将一个页面所用到的在不同接口的数据一起请求过来，不过，如果其中一个接口失败了，多个请求也就失败了，页面可能啥也出不来，这就看当前页面的耦合程度了

```javascript
function promiseAll(promises) {
    if (!Array.isArray(promises)) {
        throw new TypeError(`argument must be an array)
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedResult = []
    for (let i = 0; i < promiseNum; i++) {
        Promise.resolve(promises[i]).then(value => {
            resolvedCounter++
            resolvedResult[i] = value
            if (resolvedCounter === promiseNum) {
                return resolve(resolvedResult)
            }
        }, error => {
            return reject(error)
        })
    }
}

// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1)
  }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2)
  }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3)
  }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
  console.log(res) // [3, 1, 2]
})
```

## 手写Promise.race

该方法的参数是 Promise 实例数组, 然后其 then 注册的回调方法是数组中的某一个 Promise 的状态变为 fulfilled 的时候就执行. 因为 Promise 的状态只能改变一次, 那么我们只需要把 Promise.race 中产生的 Promise 对象的 resolve 方法, 注入到数组中的每一个 Promise 实例中的回调函数中即可.

```javascript
Promise.race = function (args) {
  return new Promise((resolve, reject) => {
    for (let i = 0, len = args.length; i < len; i++) {
      args[i].then(resolve, reject)
    }
  })
}
```