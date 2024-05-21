---
title: "单页应用如何提高加载速度"
excerpt: "通过代码分割、缓存资源、Gzip压缩、CDN、服务端渲染等，能显著提高加载速度。"
coverImage: "${basePath}/assets/blog/5.jpeg"
date: '2024-05-17T16:35:51.667Z'
author:
  name: "Hebe Huang"
  picture: "${basePath}/assets/blog/authors/hebe.avif"
ogImage:
  url: "${basePath}/assets/blog/5.jpeg"
---
# 使用代码分割
将代码拆分成小块并按需加载（懒加载），以避免不必要的网络请求和减少加载时间。
## 动态导入
在 React 应用中，可以使用 `React.lazy` 和 `Suspense` 实现动态导入和代码分割。
```javascript
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./component.js'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;

```
## SplitChunksPlugin
`SplitChunksPlugin` 是 Webpack 内置的插件，用于将代码分割成共享块或公共块。可以在 Webpack 配置中通过 `optimization.splitChunks` 配置来使用它。
```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    another: './src/another-module.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
```
-   `optimization` 配置优化选项，包括代码分割（Code Splitting）。

    -   `splitChunks` 选项配置如何进行代码分割。

        -   `chunks: 'all'` 表示对所有类型的代码（同步和异步）进行分割。

        -   `minSize: 20000` 表示生成的块最小为 20KB。

        -   `minRemainingSize: 0` 表示剩余的块大小不限制。

        -   `minChunks: 1` 表示至少被引用一次才进行分割。

        -   `maxAsyncRequests: 30` 表示按需加载时并行请求的最大数量为 30。

        -   `maxInitialRequests: 30` 表示初始加载时并行请求的最大数量为 30。

        -   `enforceSizeThreshold: 50000` 强制执行大小阈值为 50KB。

        -   `cacheGroups` 定义缓存组，决定如何对模块进行分组：

            -   `defaultVendors` 缓存组处理 `node_modules` 目录中的第三方库。

                -   `test: /[\/]node_modules[\/]/` 表示匹配 `node_modules` 目录下的文件。
                -   `priority: -10` 表示优先级，负数表示较低优先级。

            -   `default` 缓存组处理应用中的自定义模块。

                -   `minChunks: 2` 表示至少被引用两次才进行分割。
                -   `priority: -20` 表示优先级，负数表示较低优先级。
                -   `reuseExistingChunk: true` 表示如果当前块包含了重复模块，则重用该块。

# 缓存资源
利用浏览器缓存来存储重复使用的文件，例如 CSS 和 JS 文件、图片等。
## 设置缓存头
使用 HTTP 头中的 `Cache-Control`、`Expires` 和 `ETag` 等字段来控制浏览器缓存行为。
##### Nginx
```nginx
location ~* \.(css|js|jpg|png)$ {
  expires 1y;
  add_header Cache-Control "public, max-age=31536000";
}
```
## 版本控制和文件指纹
```html
<head>
  <link rel="stylesheet" href="styles.[contenthash].css" />
  <script src="bundle.[contenthash].js"></script>
</head>
```
## Service Worker
使用 Service Worker 缓存静态资源，实现离线访问和快速加载。

#### 注册 Service Worker

在主 JavaScript 文件中注册 Service Worker：
```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}
```
#### Service Worker 文件

在 `service-worker.js` 文件中实现缓存逻辑：

```javascript
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/bundle.js',
  '/image.jpg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

```

# 预加载关键资源
在首次渲染之前，先提前加载关键资源，例如首页所需的 JS、CSS 或数据，以保证关键内容的快速呈现
## Webpack 的 `HtmlWebpackPlugin` 插件
在使用 Webpack 时，可以使用 `HtmlWebpackPlugin` 插件来自动生成预加载标签。
#### 安装：
```bash
npm install html-webpack-plugin
```
#### 配置：
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      preload: ['**/*.css', '**/*.js']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
```

## 选择合适的图片格式

-   **照片**：使用 JPEG 或 WebP。
-   **透明背景的图像**：使用 PNG 或 WebP。
-   **图标、徽标、简单图形**：使用 SVG。
-   **需要兼顾大小和质量的图像**：优先考虑 WebP，如果兼容性不是问题。
## 压缩图片
```
# 压缩 JPEG
jpegoptim --max=80 image.jpg

# 压缩 PNG
pngquant --quality=65-80 image.png

# 将图片转换为 WebP 并压缩
cwebp -q 80 image.jpg -o image.webp
```

## 使用 iconfont 替代小图标
对于小图标，可以使用字体图标（iconfont）来代替图片。这种方式可以减少 HTTP 请求，并且图标可以自由缩放，不会失真。

#### 使用 Font Awesome

1.  **引入 Font Awesome**
```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
```
2.  **使用图表**
```html
<i class="fas fa-home"></i>
<i class="fas fa-user"></i>
```
# 启用 Gzip 压缩
使用服务器端的 Gzip 压缩算法对文件进行压缩，以减少传输时间和带宽消耗。
## Node.js (Express) 中启用 Gzip 压缩
在 Node.js 中使用 Express 框架，可以通过 `compression` 中间件启用 Gzip 压缩。

#### 安装 `compression` 中间件：
`npm install compression`
#### 使用 `compression` 中间件：
```javascript
const express = require('express');
const compression = require('compression');
const app = express();

// 启用 Gzip 压缩
app.use(compression());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
## CDN启用 Gzip 压缩
### 验证 Gzip 压缩
如果 Gzip 压缩成功启用，你应该在响应头中看到类似以下内容：
`Content-Encoding: gzip`

# 优化 API 请求
尽可能地减少 API 调用的数量，并使用缓存和延迟加载等技术来优化 API 请求的效率。
### 延迟加载

#### 按需加载

对于不需要立即加载的数据，可以延迟加载。例如，使用 Intersection Observer 在元素进入视口时加载数据。

##### 示例（使用 Intersection Observer）：
```javascript
function loadData() {
  fetch('/api/data')
    .then(response => response.json())
    .then(data => {
      // 更新 DOM
      document.getElementById('data').textContent = JSON.stringify(data);
    });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadData();
      observer.disconnect();
    }
  });
});

observer.observe(document.getElementById('data'));
```

# 使用服务器端渲染
使用服务器端渲染（SSR）来生成 HTML，以减少客户端渲染所需的时间和资源。但需要注意，SSR 也可能增加了服务器的负担并使网站更复杂。