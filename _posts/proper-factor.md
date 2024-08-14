---
title: "特殊数字 - 真因数"
excerpt: "javascript: 给你两个 正整数 l 和 r。对于任何数字 x，x 的所有正因数（除了 x 本身）被称为 x 的 真因数。"
coverImage: "${basePath}/assets/blog/hello-world/cover.jpg"
date: '2024-07-30T03:07:22.967Z'
author:
  name: Tim Neutkens
  picture: "${basePath}/assets/blog/authors/tim.jpeg"
ogImage:
  url: "${basePath}/assets/blog/hello-world/cover.jpg"
---

javascript: 给你两个 正整数 l 和 r。对于任何数字 x，x 的所有正因数（除了 x 本身）被称为 x 的 真因数。

如果一个数字恰好仅有两个 真因数，则称该数字为 特殊数字。例如：

数字 4 是 特殊数字，因为它的真因数为 1 和 2。
数字 6 不是 特殊数字，因为它的真因数为 1、2 和 3。
返回区间 [l, r] 内 不是 特殊数字 的数字数量。

要解决这个问题，我们需要找出在区间 
`[l,r]` 内的所有非特殊数字的数量。一个特殊数字定义为只有两个真因数（除了自身以外的因数）。这意味着该数字必须是一个平方数，其平方根是质数。

步骤
找出所有特殊数字：特殊数字是一个质数的平方。
找出在区间 `[l,r]` 内的所有特殊数字。
计算非特殊数字的数量：区间总数量减去特殊数字的数量。
实现思路
找到区间内的质数的平方：我们可以预先计算出一定范围内的质数，并找出它们的平方。
检查这些平方是否在给定区间 [l,r] 内。
以下是完整的 JavaScript 实现：
```javascript
function countNonSpecialNumbers(l, r) {
    // Helper function to check if a number is prime
    function isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    }

    // Find all primes up to the square root of r
    const primes = [];
    for (let i = 2; i * i <= r; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    // Calculate special numbers (squares of primes)
    const specialNumbers = new Set();
    for (let prime of primes) {
        const square = prime * prime;
        if (square >= l && square <= r) {
            specialNumbers.add(square);
        }
    }

    // Calculate the total number of integers in the interval [l, r]
    const totalNumbers = r - l + 1;

    // Calculate the number of non-special numbers
    const nonSpecialNumbers = totalNumbers - specialNumbers.size;

    return nonSpecialNumbers;
}

// Example usage:
const l = 1;
const r = 10;
console.log(countNonSpecialNumbers(l, r)); // Output: 8

```
解释
质数判定函数：isPrime 函数用于检查一个数是否为质数。
计算质数的平方：找出所有小于等于 根号r的质数，并计算它们的平方。
检查平方是否在区间内：将这些平方数与区间 [l,r] 进行比较，如果在区间内，则将其加入特殊数字集合。
计算结果：区间内的总数字数量减去特殊数字的数量即为非特殊数字的数量。
这种方法的效率较高，因为我们只需要检查到  根号r 范围内的质数，并对其进行平方运算，符合复杂度要求。