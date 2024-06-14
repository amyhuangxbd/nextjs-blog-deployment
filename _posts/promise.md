---
title: "手写promise实现"
excerpt: "手写一个简单的“Promise”实现可以帮助我们更好的理解“Promise”内部机制"
coverImage: "${basePath}/assets/blog/promise.jpeg"
date: '2024-05-31T13:20:15.502Z'
author:
  name: "Hebe Huang"
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/promise.jpeg"
---

手写一个简单的“Promise”实现可以帮助我们更好的理解“Promise”内部机制。以下是一个简化版的“Promise”实现
```javascript

class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onFulfilledCallbacks.forEach(callback => callback(value));
            }
        }

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(callback => callback(reason));
            }
        }

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error)
        }
    }

    then(onFullfilled, onRejected) {
        // 如果 onFulfilled 不是函数，则创建一个默认函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        // 如果 onRejected 不是函数，则创建一个默认函数
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

        const promise2 = new MyPromise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                })
            } else if (this.state === 'rejected') {
                setTimeout(() => {
                try {
                    const x = onRejected(this.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
                });
            } else if (this.state === 'pending') {
                this.onFulfilledCallbacks.push(() => {
                setTimeout(() => {
                    try {
                    const x = onFulfilled(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                    reject(error);
                    }
                });
                });

                this.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                    const x = onRejected(this.reason);
                    resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                    reject(error);
                    }
                });
                });
            }
        })
        return promise2;
    }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }

  let called = false;
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      const then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, r => {
          if (called) return;
          called = true;
          reject(r);
        });
      } else {
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
}

// 使用示例
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

p.then(value => {
  console.log(value); // 输出 'Success!'
}).catch(error => {
  console.error(error);
});

```

解释
构造函数：

初始化 state（状态）为 pending，value 和 reason 为 undefined。
onFulfilledCallbacks 和 onRejectedCallbacks 用于存储 then 方法中注册的回调函数。
resolve 和 reject 函数用于改变 Promise 的状态。
then 方法：

如果当前状态为 fulfilled，立即异步执行 onFulfilled 回调。
如果当前状态为 rejected，立即异步执行 onRejected 回调。
如果当前状态为 pending，将回调函数存储在相应的数组中。
resolvePromise 函数：

处理 Promise 链中的返回值 x，支持 Promise 链的嵌套和递归解析。
处理不同类型的 x，包括 Promise 对象和普通值。
这个实现是一个简化版本的 Promise，它涵盖了基本功能，如状态管理、链式调用和异步执行。更完整的 Promise 实现还需要处理更多的边界情况和规范要求。