---
title: "从react fiber源码中学习位运算"
excerpt: "在 React 17 和之后的版本中，React 引入了 "Lanes" 概念来更好地管理任务优先级和并发更新。Lanes 是 React Fiber 架构的一部分，用于解决任务调度中的优先级问题，使得高优先级的更新可以打断低优先级的更新，提升用户体验。"
coverImage: "${basePath}/assets/blog/preview/cover.jpg"
date: '2024-05-17T16:35:51.667Z'
author:
  name: Hebe Huang
  picture: "${basePath}/assets/blog/authors/joe.jpeg"
ogImage:
  url: "${basePath}/assets/blog/preview/cover.jpg"
---

    在 React 17 和之后的版本中，React 引入了 "Lanes" 概念来更好地管理任务优先级和并发更新。Lanes 是 React Fiber 架构的一部分，用于解决任务调度中的优先级问题，使得高优先级的更新可以打断低优先级的更新，提升用户体验。

    Lanes 可以看作是 React 内部用来区分不同优先级更新的一种机制。每一个 Lane 代表一个优先级级别，多个 Lanes 可以组合起来表示复杂的优先级策略。通过这种方式，React 能够在处理更新时更加灵活和高效。

在React中，存在多种使用不同优先级的情况，比如：

用户交互：比如点击、输入等高优先级事件。
动画更新：比如动画帧的更新。
数据请求：数据请求和响应的更新通常优先级较低。
空闲时间更新：在浏览器空闲时间内处理的低优先级任务。
过期任务或者同步任务使用同步优先级
Suspense使用低优先级
React需要设计一套满足如下需要的优先级机制：

可以表示优先级的不同
可能同时存在几个同优先级的更新，所以还得能表示批的概念
方便进行优先级相关计算
为了满足如上需求，React设计了lane模型。接下来我们来看lane模型如何满足以上3个条件。

在ReactFiberLane.js文件中，Lanes 是以位掩码（bitmask）的形式实现的。每一个 Lane 对应一个二进制位，通过位操作可以轻松组合和判断多个 Lane。

源码阅读：

1、定义Lane
// Lane values below should be kept in sync with getLabelForLane(), used by react-devtools-timeline.// If those values are changed that package should be rebuilt and redeployed.export const TotalLanes = 31;export const NoLanes: Lanes = /*                        */ 0b0000000000000000000000000000000;export const NoLane: Lane = /*                          */ 0b0000000000000000000000000000000;export const SyncHydrationLane: Lane = /*               */ 0b0000000000000000000000000000001;export const SyncLane: Lane = /*                        */ 0b0000000000000000000000000000010;export const SyncLaneIndex: number = 1;export const InputContinuousHydrationLane: Lane = /*    */ 0b0000000000000000000000000000100;export const InputContinuousLane: Lane = /*             */ 0b0000000000000000000000000001000;export const DefaultHydrationLane: Lane = /*            */ 0b0000000000000000000000000010000;export const DefaultLane: Lane = /*                     */ 0b0000000000000000000000000100000;export const SyncUpdateLanes: Lane = enableUnifiedSyncLane  ? SyncLane | InputContinuousLane | DefaultLane  : SyncLane;const TransitionHydrationLane: Lane = /*                */ 0b0000000000000000000000001000000;const TransitionLanes: Lanes = /*                       */ 0b0000000001111111111111110000000;const TransitionLane1: Lane = /*                        */ 0b0000000000000000000000010000000;const TransitionLane2: Lane = /*                        */ 0b0000000000000000000000100000000;const TransitionLane3: Lane = /*                        */ 0b0000000000000000000001000000000;const TransitionLane4: Lane = /*                        */ 0b0000000000000000000010000000000;const TransitionLane5: Lane = /*                        */ 0b0000000000000000000100000000000;const TransitionLane6: Lane = /*                        */ 0b0000000000000000001000000000000;const TransitionLane7: Lane = /*                        */ 0b0000000000000000010000000000000;const TransitionLane8: Lane = /*                        */ 0b0000000000000000100000000000000;const TransitionLane9: Lane = /*                        */ 0b0000000000000001000000000000000;const TransitionLane10: Lane = /*                       */ 0b0000000000000010000000000000000;const TransitionLane11: Lane = /*                       */ 0b0000000000000100000000000000000;const TransitionLane12: Lane = /*                       */ 0b0000000000001000000000000000000;const TransitionLane13: Lane = /*                       */ 0b0000000000010000000000000000000;const TransitionLane14: Lane = /*                       */ 0b0000000000100000000000000000000;const TransitionLane15: Lane = /*                       */ 0b0000000001000000000000000000000;const RetryLanes: Lanes = /*                            */ 0b0000011110000000000000000000000;const RetryLane1: Lane = /*                             */ 0b0000000010000000000000000000000;const RetryLane2: Lane = /*                             */ 0b0000000100000000000000000000000;const RetryLane3: Lane = /*                             */ 0b0000001000000000000000000000000;const RetryLane4: Lane = /*                             */ 0b0000010000000000000000000000000;export const SomeRetryLane: Lane = RetryLane1;export const SelectiveHydrationLane: Lane = /*          */ 0b0000100000000000000000000000000;const NonIdleLanes: Lanes = /*                          */ 0b0000111111111111111111111111111;export const IdleHydrationLane: Lane = /*               */ 0b0001000000000000000000000000000;export const IdleLane: Lane = /*                        */ 0b0010000000000000000000000000000;export const OffscreenLane: Lane = /*                   */ 0b0100000000000000000000000000000;export const DeferredLane: Lane = /*                    */ 0b1000000000000000000000000000000;
1、同步优先级 (SyncLane)

表示同步任务的最高优先级，通常用于用户交互事件，例如点击和输入。
export const SyncHydrationLane: Lane = /*               */ 0b0000000000000000000000000000001;
export const SyncLane: Lane = /*                        */ 0b0000000000000000000000000000010;
2、输入连续优先级 (InputContinuousLane)

用于处理用户输入的连续事件，例如拖动、滑动等。
export const InputContinuousHydrationLane: Lane = /*    */ 0b0000000000000000000000000000100;export const InputContinuousLane: Lane = /*             */ 0b0000000000000000000000000001000;
3、默认优先级 (DefaultLane)

表示默认的更新任务优先级。
export const DefaultHydrationLane: Lane = /*            */ 0b0000000000000000000000000010000;export const DefaultLane: Lane = /*                     */ 0b0000000000000000000000000100000;
4、传输优先级 (TransitionLane)

用于处理具有稍低优先级的任务，例如导航、数据加载等。
const TransitionHydrationLane: Lane = /*                */ 0b0000000000000000000000001000000;const TransitionLanes: Lanes = /*                       */ 0b0000000001111111111111110000000;const TransitionLane1: Lane = /*                        */ 0b0000000000000000000000010000000;const TransitionLane2: Lane = /*                        */ 0b0000000000000000000000100000000;const TransitionLane3: Lane = /*                        */ 0b0000000000000000000001000000000;const TransitionLane4: Lane = /*                        */ 0b0000000000000000000010000000000;const TransitionLane5: Lane = /*                        */ 0b0000000000000000000100000000000;const TransitionLane6: Lane = /*                        */ 0b0000000000000000001000000000000;const TransitionLane7: Lane = /*                        */ 0b0000000000000000010000000000000;const TransitionLane8: Lane = /*                        */ 0b0000000000000000100000000000000;const TransitionLane9: Lane = /*                        */ 0b0000000000000001000000000000000;const TransitionLane10: Lane = /*                       */ 0b0000000000000010000000000000000;const TransitionLane11: Lane = /*                       */ 0b0000000000000100000000000000000;const TransitionLane12: Lane = /*                       */ 0b0000000000001000000000000000000;const TransitionLane13: Lane = /*                       */ 0b0000000000010000000000000000000;const TransitionLane14: Lane = /*                       */ 0b0000000000100000000000000000000;const TransitionLane15: Lane = /*                       */ 0b0000000001000000000000000000000;
5、重试优先级 (TransitionLane)

用于重试任务。它们通常具有较低的优先级，适合在浏览器有空闲时间时处理。
const RetryLanes: Lanes = /*                            */ 0b0000011110000000000000000000000;const RetryLane1: Lane = /*                             */ 0b0000000010000000000000000000000;const RetryLane2: Lane = /*                             */ 0b0000000100000000000000000000000;const RetryLane3: Lane = /*                             */ 0b0000001000000000000000000000000;const RetryLane4: Lane = /*                             */ 0b0000010000000000000000000000000;
2. Lane 的分配和合并
位运算的基本操作
按位与（&）：用于检测两个 Lanes 是否有重叠的部分。
按位或（|）：用于合并两个 Lanes。
按位取反（~）：用于求反位。
按位与非（& ~）：用于排除特定的 Lane。
合并 Lanes
将两个 Lanes 合并在一起，可以使用按位或操作：

export function mergeLanes(a: Lanes | Lane, b: Lanes | Lane): Lanes {  return a | b;}

// 示例
const lane1 = 0b0001;
const lane2 = 0b0010;
const mergedLanes = mergeLanes(lane1, lane2); // 结果是 0b0011
获取最高优先级的 Lane
在一个 Lanes 集合中获取最高优先级的 Lane，可以使用按位与操作：

export function getHighestPriorityLane(lanes: Lanes): Lane {  return lanes & -lanes;}

// 示例
const lanes = 0b0110;
const highestPriorityLane = getHighestPriorityLane(lanes); // 结果是 0b0010
从 Lanes 中移除一个 Lane
从一个 Lanes 集合中移除特定的 Lane，可以使用按位与非操作：

export function removeLanes(set: Lanes, subset: Lanes | Lane): Lanes {  return set & ~subset;}

// 示例
const lanes = 0b0110;
const laneToRemove = 0b0010;
const remainingLanes = removeLanes(lanes, laneToRemove); // 结果是 0b0100
通过位运算，React 可以高效地管理和操作多个优先级的更新任务。了解这些位运算操作及其在 React 中的应用，可以帮助你更好地理解 React 的内部工作原理，尤其是在任务调度和更新管理方面。


