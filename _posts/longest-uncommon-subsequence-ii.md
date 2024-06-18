---
title: "最长特殊序列II"
excerpt: "给定字符串列表 strs ，返回其中 最长的特殊序列 的长度。如果最长特殊序列不存在，返回 -1 。

特殊序列 定义如下：该序列为某字符串 独有的子序列（即不能是其他字符串的子序列）。

 s 的 子序列可以通过删去字符串 s 中的某些字符实现。

例如，"abc" 是 "aebdc" 的子序列，因为您可以删除"aebdc"中的下划线字符来得到 "abc" 。"aebdc"的子序列还包括"aebdc"、 "aeb" 和 "" (空字符串)。"
coverImage: "${basePath}/assets/blog/promise-all.jpeg"
date: '2024-06-17T01:13:26.453Z'
author:
  name: "Hebe Huang"
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/promise-all.jpeg"
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