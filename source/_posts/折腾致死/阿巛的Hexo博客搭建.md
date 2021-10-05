---
title: 阿巛的Hexo博客搭建
author: 风渡巛
top: false
cover: false
toc: true
abbrlink: a881
date: 2020-11-15 19:57:21
password:
description:
tags: Hexo
categories: 折腾致死
---

- 图片加载优化
- 滚动条美化
- 增加artitalk说说页面
- 博客优化
- CDN加速
- 绑定域名(github、coding双绑定)
- 证书认证
- 滚动条美化



```css
/***** 滚动条 *****/
/* 滚动条里面的小方块 */
::-webkit-scrollbar-thumb {
    background-color: #FF2A68;
    background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.4) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.4) 50%,rgba(255,255,255,.4) 75%,transparent 75%,transparent);
    border-radius: 3em;
}
/* 滚动条的轨道 */
::-webkit-scrollbar-track {
    background-color: #ffcacaff;
    border-radius: 3em;
}
/* 滚动条整体部分 */
::-webkit-scrollbar {
    width: 8px;
    height: 15px;
}
```

## 全站CDN加速
CDN的全称是Content Delivery Network，即内容分发网络。CDN是构建在网络之上的内容分发网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要有内容存储和分发技术。——百度百科
用法：
```http
https://cdn.jsdelivr.net/gh/你的用户名/你的仓库名@发布的版本号/文件路径
```

## SEO优化
SEO（Search Engine Optimization）：汉译为搜索引擎优化。是一种方式：利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。 ——百度百科
请参考这篇博文：https://blog.sky03.cn/posts/42790.html#toc-heading-18

