---
title: " 账户合并"
excerpt: "给定一个列表 accounts，每个元素 accounts[i] 是一个字符串列表，其中第一个元素 accounts[i][0] 是 名称 (name)，其余元素是 emails 表示该账户的邮箱地址。"
coverImage: "${basePath}/assets/blog/16.jpeg"
date: "2024-07-15T15:05:08.293Z"
author:
  name: Hebe Huang
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/16.jpeg"
---

给定一个列表 accounts，每个元素 accounts[i] 是一个字符串列表，其中第一个元素 accounts[i][0] 是 名称 (name)，其余元素是 emails 表示该账户的邮箱地址。

现在，我们想合并这些账户。如果两个账户都有一些共同的邮箱地址，则两个账户必定属于同一个人。请注意，即使两个账户具有相同的名称，它们也可能属于不同的人，因为人们可能具有相同的名称。一个人最初可以拥有任意数量的账户，但其所有账户都具有相同的名称。

合并账户后，按以下格式返回账户：每个账户的第一个元素是名称，其余元素是 按字符 ASCII 顺序排列 的邮箱地址。账户本身可以以 任意顺序 返回。


> Problem: [721. 账户合并](https://leetcode.cn/problems/accounts-merge/description/)

[TOC]

# 思路

> 我们需要使用图算法。
每个邮箱可以被视为图中的一个节点，如果两个邮箱属于同一个账户，它们之间就有一条边。
我们需要找到所有相连的节点（即连通分量），并将它们合并在一起。

# 解题过程

> 1、构建图
```javascript
    // 创建图
    for(let i = 0; i < n; i++) {
        const account = accounts[i];
        const name = account[0]
        for (let j = 1; j < account.length; j++) {
            const email = account[j]
            if (!graph[email]) {
                graph[email] = [];
            }
            emailToName[email] = name;
            if (j === 1) {
                continue;
            }
            graph[account[j-1]].push(email)
            graph[email].push(account[j-1])
        }
    }
```
2、深度优先搜索
- 使用 visited 集合来跟踪已访问的邮箱。
- 使用 dfs 函数来收集所有与当前邮箱相连的邮箱。
```javascript
    const visited = new Set()
    const result = []

    function dfs(email, emails){
        visited.add(email)
        emails.push(email)
        for(let account of graph[email]) {
            if (!visited.has(account)) {
                dfs(account, emails)
            }
        }
    }
```


# 复杂度

- 时间复杂度: $O(*)$
- 空间复杂度: $O(*)$



# Code
```JavaScript []
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const emailToName = {};
    const graph = {};

    const n = accounts.length;
    
    // 创建图
    for(let i = 0; i < n; i++) {
        const account = accounts[i];
        const name = account[0]
        for (let j = 1; j < account.length; j++) {
            const email = account[j]
            if (!graph[email]) {
                graph[email] = [];
            }
            emailToName[email] = name;
            if (j === 1) {
                continue;
            }
            graph[account[j-1]].push(email)
            graph[email].push(account[j-1])
        }
    }

    const visited = new Set()
    const result = []

    function dfs(email, emails){
        visited.add(email)
        emails.push(email)
        for(let account of graph[email]) {
            if (!visited.has(account)) {
                dfs(account, emails)
            }
        }
    }
    
    for(let email in graph) {
        if (!visited.has(email)) {
            let emails = [];
            dfs(email, emails);
            emails.sort()
            result.push([emailToName[email], ...emails])
        }
    }
    return result;
};
```
  

