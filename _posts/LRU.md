---
title: "写一个 LRU 缓存函数"
excerpt: "关于缓存，有个常见的例子是，当用户访问不同站点时，浏览器需要缓存在对应站点的一些信息，这样当下次访问同一个站点的时候，就可以使访问速度变快（因为一部分数据可以直接从缓存读取）。 但是想想内存空间是有限的，所以必须有一些规则来管理缓存的使用，而LRU（Least Recently Used） Cache就是其中之一，直接翻译就是“最不经常使用的数据，重要性是最低的，应该优先删除”。"
coverImage: "${basePath}/assets/blog/14.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: "Hebe Huang"
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/14.jpg"
---
## 方法一
```
class LinkNode {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.prev = null
    this.next = null
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map()
  this.list = new LinkNode(0, 0)
  this.list.next = this.list.prev = this.list
  this.length = 0
  this.capacity = capacity
};

LRUCache.prototype.remove = function(node) {
  node.prev.next = node.next
  node.next.prev = node.prev
};

LRUCache.prototype.unshift = function(node) {
  node.next = this.list.next
  node.next.prev = node
  this.list.next = node
  node.prev = this.list
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key)
    this.remove(node)
    this.unshift(node)
    return node.val
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key)
    node.val = value
    this.remove(node)
    this.unshift(node)
  } else {
    if (this.length + 1 > this.capacity) {
      const delNode = this.list.prev
      this.remove(delNode)
      this.cache.delete(delNode.key)
    } else {
      this.length++
    }
    const node = new LinkNode(key, value)
    this.unshift(node)
    this.cache.set(key, node)
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

## 方法二

关于缓存，有个常见的例子是，当用户访问不同站点时，浏览器需要缓存在对应站点的一些信息，这样当下次访问同一个站点的时候，就可以使访问速度变快（因为一部分数据可以直接从缓存读取）。 但是想想内存空间是有限的，所以必须有一些规则来管理缓存的使用，而LRU（Least Recently Used） Cache就是其中之一，直接翻译就是“最不经常使用的数据，重要性是最低的，应该优先删除”。

## 需求分析
假设我们要实现一个简化版的这个功能，先整理下需求：

需要提供put方法，用于写入不同的缓存数据，假设每条数据形式是{'域名','info'},例如{'https://segmentfault.com': '一些关键信息'}（如果是同一站点重复写入，就覆盖）;
当缓存达到上限时， 调用put写入缓存之前, 要删除最近最少使用的数据；
提供get方法，用于读取缓存数据，同时需要把被读取的数据，移动到最近使用数据 ；
考虑到读取性能，希望get操作的复杂度是O(1)（简单理解就是，读取缓存时不能去遍历所有数据）
数据选型
首先题目里很明显的提到了，需要能够标记数据的插入或使用顺序， 所以肯定不能简单使用object实现，需要借助数组，或者es6的Map和Set实现(Map和Set数据遍历是有序的，遍历顺序即插入顺序)；

其次需要实现O(1)复杂度，那就也无法用单纯使用数组来实现，所以可以考虑的只有Map和Set，那么最后再考虑下数据重复性的问题，会发现这道题不太需要考虑这个场景，所以我们可以先使用Map来实现。

由于Map的特性是：新插入的数据排在后面，旧数据放在前面， 所以我们只要专注于维持这个逻辑就好了:

如果遇到要删除数据，则优先从前面删除, 因为最前面的必定是最不常用数据；
如果读取某条数据，则应该把数据放到末尾，保证该数据变为最近使用数据；
算法实现
接下来就可以一步步是实现代码了，首先是最基本的 构造函数:

``` 

// 第一步代码
class LRUCache {
    constructor(n){
        this.size = n; // 初始化最大缓存数据条数n
        this.data = new Map(); // 初始化缓存空间map
    }
}
```

接下来是put方法，put方法要处理3个逻辑：

1、如果待写入的域名，已存在于内存之中，直接更新数据并移动到末尾； 2、如果当前未达到缓存数量上限，直接写入新数据； 3、如果当前已经达到缓存数量上限， 要先删除最不经常使用的数据，再写入数据；

其他都可以直接操作，移动到末尾这个行为，可以拆成"先删除该数据，再从末尾重新插入一条该数据"，这样就简单多了。所以我们继续更新代码：


``` 
// 第一步代码
class LRUCache {
    constructor(n){
        this.size = n; // 初始化最大缓存数据条数n
        this.data = new Map(); // 初始化缓存空间map
    }
    // 第二步代码
    put(domain, info){
        if(this.data.has(domain)){
            this.data.delete(domain); // 移除数据
            this.data.set(domain, info)// 在末尾重新插入数据
            return;
        }
        if(this.data.size >= this.size) {
            // 删除最不常用数据
            const firstKey= this.data.keys().next().value; // 不必当心data为空，因为this.size 一般不会取0，满足this.data.size >= this.size时，this.data自然也不为空。
            this.data.delete(firstKey);
        }
        this.data.set(domain, info) // 写入数据
    }
}
```

接着就只剩下get方法了，get方法同样也要处理2种逻辑：

1、根据给定的key，查找是否有对应的信息，若不存在则返回false； 2、若第一步结
这一步要稍微注意的是，我们是先移除数据后添加数据，严格遵循最大数量不超过n。