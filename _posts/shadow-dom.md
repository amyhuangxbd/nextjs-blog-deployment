---
title: "设置 Shadow DOM 样式的 8 种方法"
excerpt: "Shadow DOM有以下优点：
1、保护组件的内部不受页面上其他 JavaScript 和 CSS 的影响
2、为组件创建封装样式
3、在组件的内部元素上安全地使用 ids"
coverImage: "${basePath}/assets/blog/preview/cover.jpg"
date: "2024-05-11T05:35:07.322Z"
author:
  name: Hebe Huang
  picture: "${basePath}/assets/blog/authors/joe.jpeg"
ogImage:
  url: "${basePath}/assets/blog/preview/cover.jpg"
---

## 设置Shadow DOM 的样式
有两种设置 Shadow DOM 样式的通用方法：内部（从 Shadow 根元素内部）和外部（从外部，从常规或“轻”DOM）。 让我们从外部开始，然后逐步进入。同样，模式在这里并不相关，因为它仅适用于 JavaScript。

外部样式和 Shadow DOM
让我们使用 Mdash 全局样式表作为示例。 它拥有大量适用于所有 HTML 元素的样式以及实用程序类：

`<link href="https://unpkg.com/m-@3.2.0/dist/m-.css" rel="stylesheet">
`

###  1. Inherited Styles
有些样式实际上会自动穿透shadow DOM并默认继承。 

为了使样式被继承并应用于元素，它必须来自父元素。 这意味着沿着 DOM 树一直到 body 或 html 的任何 Shadow DOM 祖先都必须显式设置可继承属性（这些属性的完整列表位于此处）。 例如, 在 body 上设置默认文本颜色，并且颜色是继承的，它适用于页面上的所有元素，包括 Shadow DOM：
```css
body {
  color: var(--m-color-gray-7);
}

```
Shadow DOM 文本将继承该样式，并且也是灰色。或者在更近的祖先上设置的其他颜色。 值得澄清的是，您无需执行任何操作即可完成此操作。 即使对于 Shadow DOM，这也是默认的 CSS 行为。 如果你不想继承，那么你可以用 all:initial: 关闭它：
```css
/* In your Web Component's <style> tag */
:host {
  all: initial; /* Reverts all properties to HTML spec defaults */
}

```

### 2. :root 
在 :root 上定义的所有 CSS 自定义属性都可以在Shadow DOM 中使用。
```css

/* The Mdash stylesheet we included has custom properties */
:root {
  --m-color-red-3: #a2204f;
}

/* In your Web Component's <style> tag */
p {
  color: var(--m-color-red-3); /* Component's paragraphs are red */
}
```
与可继承样式一样，无需执行任何操作。 这是 CSS 的优点，而且可以正常工作！ 使用这些是轻松定义全局样式并有选择地应用它们的绝佳方法。

### 3. ::part伪元素
Shadow DOM 可以通过给外部样式提供一个part 属性：
```html

<template>
  <p part="intro">I can be styled from outside the shadow root.</p>
  <p>I cannot be styled externally.</p>
</template>

```
然后使用外部 CSS，您可以设置介绍段落的样式：
```css
custom-element-tag::part(intro) {
  color: red;
}
```

### 4. 通过 JavaScript 动态修改样式
如果你需要根据某些运行时条件动态修改 Shadow DOM 中的样式，可以使用 JavaScript 直接操作。

访问 Shadow DOM 内部元素：
```javascript

const shadowRoot = myComponent.shadowRoot;
const button = shadowRoot.querySelector('button');

```
动态修改样式：
```css
button.style.backgroundColor = 'green';
```
这种方法允许你直接修改元素的内联样式，但不适合大规模样式更改。
### 4. 使用 ::slotted 伪元素
如果你需要修改由宿主文档放入 Shadow DOM 中的 <slot> 元素的样式，可以使用 ::slotted 伪元素。

在 Shadow DOM 中定义：
```html
<style>
  ::slotted(button) {
    border: 2px solid green;
  }
</style>
<slot></slot>

```
在宿主文档中使用 slot：

```html
<my-component>
  <button>Slotted Button</button>
</my-component>

```

这些方法各有适用场景，CSS 变量和 ::part 提供了更多的灵活性和封装性，而 JavaScript 方法和 ::slotted 提供了直接操作的能力。选择合适的方法取决于你的具体需求和组件设计。