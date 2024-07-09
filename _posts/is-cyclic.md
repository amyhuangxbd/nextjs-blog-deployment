---
title: "判断对象是否存在循环引用"
excerpt: "循环引用对象本来没有什么问题，但是序列化的时候就会发生问题，比如调用JSON.stringify()对该类对象进行序列化，就会报错: Converting circular structure to JSON"
coverImage: "${basePath}/assets/blog/hello-world/cover.jpg"
date: "2024-07-09T05:14:46.889Z"
author:
  name: Hebe Huang
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/hello-world/cover.jpg"
---

循环引用对象本来没有什么问题，但是序列化的时候就会发生问题，比如调用JSON.stringify()对该类对象进行序列化，就会报错: Converting circular structure to JSON.

下面方法可以用来判断一个对象中是否已存在循环引用：

## Typescript

```typescript
function isCyclic(obj: any): boolean {
    const seenObjects = new WeakSet();

    function detectCycle(value: any): boolean {
        if (value && typeof value === 'object') {
            if (seenObjects.has(value)) {
                return true;
            }

            seenObjects.add(value);
            for(const key in value) {
                if (Object.prototype.hasOwnProperty.call(value, key)) {
                    if (detectCycle(value[key])) {
                        return true;
                    }
                }
            }
            seenObjects.delete(value);
        }
        return false;
    }
    return detectCycle(obj)
}

```


### 说明：

1. **WeakSet**：使用`WeakSet`来存储已访问的对象，因为`WeakSet`会自动处理垃圾回收，不会影响对象的生命周期。
2. **递归检测**：定义一个递归函数`detectCycle`来遍历对象的属性，如果发现某个对象已经存在于`WeakSet`中，则说明存在循环引用。
3. **删除已访问对象**：在递归调用后从`WeakSet`中删除对象，这样可以避免多次检查同一个对象时误报循环引用。