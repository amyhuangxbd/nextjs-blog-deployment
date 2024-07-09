---
title: "最长特殊序列II"
excerpt: "给定字符串列表 strs ，返回其中 最长的特殊序列 的长度。如果最长特殊序列不存在，返回 -1 。"
coverImage: "${basePath}/assets/blog/promise-all.svg"
date: '2024-06-17T01:13:26.453Z'
author:
  name: "Hebe Huang"
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/promise-all.svg"
---

### 最长特殊序列II

 https://leetcode.cn/problems/longest-uncommon-subsequence-ii/description/

 ```javascript
var findLUSlength = function(strs) {
    strs.sort((a, b) => b.length - a.length);
    next: for (let i = 0; i < strs.length; i++) {
        const s = strs[i];
        for (let j = 0; j < strs.length; j++) {
            if (j !== i && isSubseq(s, strs[j])) {
                continue next;
            }
        }
        return s.length;
    }
    return -1;
};

var isSubseq = function(s, t) {
    let i = 0;
    for (const c of t) {
        if (s[i] === c && ++i === s.length) { // 所有字符匹配完毕
            return true; // s 是 t 的子序列
        }
    }
    return false;
};
 ```