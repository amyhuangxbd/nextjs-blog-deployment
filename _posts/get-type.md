---
title: "手写类型判断函数"
excerpt: "类型包括基本数据类型和引用类型"
coverImage: "${basePath}/assets/blog/promise-all.jpeg"
date: '2024-06-15T03:08:34.401Z'
author:
  name: "Hebe Huang"
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/promise-all.jpeg"
---

### 类型判断函数
```javascript
function getType(value) {
    if (typeof value === 'object){
        // 判断数据是引用类型的情况
        let valueClass = Object.prototype.toString.call(value),
            type = valueClass.split(" ")[1].split('');
        type.pop()
        return type.join(').toLowerCase();
    } else {
        // 判断数据是基本数据类型的情况和函数的情况
        return typeof value;
    }
    

}
```