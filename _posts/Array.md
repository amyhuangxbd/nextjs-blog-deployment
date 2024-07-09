---
title: "数组"
excerpt: "手写代码"
coverImage: "${basePath}/assets/blog/7.jpeg"
date: '2024-07-09T05:36:36.354Z'
author:
  name: "Hebe Huang"
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/7.jpeg"
---

### 实现数组的push方法
```javascript
let arr = []
Array.prototype.push = function() {
    for(let i = 0; i < arguments.length;i++) {
        this[this.length] = arguments[i]
    }
    return this.length;
}
```

### 将数字每千分位用逗号隔开
#### 数字有小数版本：
```javascript
let format = (n) => {
    let num = n.toString(); // 转成字符串
    let decimals = ''
    // 判断是否有小数
    num.indexOf('.') > -1 ? decimals = num.splice('.')[1] : decimals
    let len = num.length;
    if (len <= 3) {
      return num
    } else {
      let temp = ''
      let reminder = len % 3;
      decimals ? temp = '.' + decimals : temp;
      if (reminder > 0) {
        return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp;
      } else { // 是3的整数倍
        return num.slice(0, len).match(/\d{3}/g).join(',') + temp
      }
    }
}

format(12323.33) // 12,323.33
```

## 实现非负大整数相加
`JavaScript`对数值有范围的限制，限制如下：
```javascript
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_VALUE // 5e-324
Number.MIN_SAFE_INTEGER // -9007199254740991
```
如果想要对一个超大的整数(`> Number.MAX_SAFE_INTEGER`)进行加法运算，但是又想输出一般形式，那么使用 + 是无法达到的，一旦数字超过 `Number.MAX_SAFE_INTEGER` 数字会被立即转换为科学计数法，并且数字精度相比以前将会有误差。
实现一个算法进行大数的相加：