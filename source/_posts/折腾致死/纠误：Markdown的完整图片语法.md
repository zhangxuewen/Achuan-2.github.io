---
title: 番外：Markdown的完整图片语法
author: Achuan-2
cover: https://b3logfile.com/siyuan/1610205759005/assets/image-20211014112242-0n12y8h.png
sticky: false
katex: false
toc: true
swiper_index: 1
categories:
  - 折腾致死
tags: Markdown
abbrlink: '4491'
date: 2021-10-14 09:40:27
description:
---

## 前情

Hexo 博客总算改了图片注释的 js，现在复制思源笔记的内容到 Hexo，原来在本地笔记显示的图片标题，也可以正确在博客中显示了，舒服了。

![image.png](https://b3logfile.com/siyuan/1610205759005/assets/image-20211014085846-z64jirp.png "Butterfly的main.js修改代码")

![image.png](https://b3logfile.com/siyuan/1610205759005/assets/image-20211014090502-p9y5ku0.png "Hexo博客的图片标题样式预览")

## 正文

话说回来，有接触 Markdown 的人，肯定知道 Markdown 怎么插入图片，但是你八成记的是错误且不完整的语法。

如果去网上搜 Markdown 的教程，你可能只会记住 Markdown 插入图片的语法是 `![](图片地址)`，方括号里可以填描述文字。如果你有使用 Typora、VSCode 当 Markdown 编辑器，用不了多久就会发现，这个图片语法中方括号内的文字除了在源码模式告诉你这个图片是什么内容外，在渲染的时候就完完全全隐藏了。而你真正想要的，可能是这个图片注释渲染的时候也能在图片正下方。如果你去网上搜 Markdown 如何在图片下居中显示文字，你可能会使用 `<center>text</center>` 的语法来达成目的，然后在心里暗骂，为什么 Markdown 就不能简单点的加图片的说明！

其实 Markdown 图片语法里的 alt 属性文本，真的就**只是用于源码模式还有图片未成功加载时告诉你这个图片的是干什么用的**，**本来就不是用于渲染的**。如果你有接触 HTML （或者你没接触也不要紧，你只要知道 Markdown 就是 HTML 的简化版，Markdown 是通过渲染为 HTML 来展示样式的），这个 alt 属性文本就和 `<img>` 标签的 alt 属性作用一模一样，就是加载不成功才显示。而 `<img> ` 标签其实还有一个属性——title。这个 title 才是图片的标题，是能正常显示在渲染结果中的，但默认的样式是你鼠标悬浮于图片时才显示这段文字。

那 Markdown 有没有 title 属性呢？有的，比如菜鸟教程的 [Markdown 教程](https://www.runoob.com/markdown/md-image.html)里就明确告诉你 Markdown 的 title 语法就是放在圆括号里面，用英文引号包裹。

![](https://b3logfile.com/siyuan/1610205759005/assets/image-20211014091405-kp0x62m.png "菜鸟教程Markdown教程的截图")

不信？在 Typora 粘贴一张图片，并加上 title 试试

![image.png](https://b3logfile.com/siyuan/1610205759005/assets/image-20211014091801-qnftilm.png "Typora的图片标题展示")

在 Github 也试试

![image.png](https://b3logfile.com/siyuan/1610205759005/assets/image-20211014091912-8agaaok.png "Github的图片标题展示")

> ps：如果有使用 typora 的同学希望 title 或 alt 是在图片正下方显示，鉴于 typora 主题不能插入 js，只能考虑 css 实现，css 里伪元素的 content 的 attr 方法是可以获得元素属性的，然而 img 却不支持伪元素，除非哪天作者开悟，把 img 用 span 包裹，并加上 alt 和 title 属性。目前只能把 src 放在图片下方。
>
> 在主题 css 加上这段文字后
>
> ```bash
>
> span.md-image::after {
>     content: attr(data-src);
>     display: block;
>     color: #4183C4;
>     text-align: center;
> }
>
> ```
>
> ![image.png](https://b3logfile.com/siyuan/1610205759005/assets/image-20211015093226-hlfowcv.png)
>

## 总结

Markdown 的完整图片语法是 `![anchor text](img_src "title")`

* anchor text 用于源码模式和图片未成功加载提示图片用途
* img_src 是图片地址，可以是本地的也可以是网络图床
* title 是图片标题，默认是鼠标悬浮显示

> 鉴于很多人不记得 md 图片语法里还有 title，而且嫌弃 alt 和 title 文本要分开写，而这俩基本填的内容一般一样。
>
> 目前很多博客网站其实默认是使用 anchor text 当作图片正下方的文本来渲染了，但是我绝对不屈服，我要捍卫 md 的尊严 ！！！所以我的博客是只渲染 title 作为图片的说明的。也符合我目前使用的笔记软件——『思源笔记』的图片注释方式
>

说到这里就得表扬下思源笔记了，图片注释非常方便，右击图片就可以直接输入图片标题，默认居中显示

![image.png](https://b3logfile.com/siyuan/1610205759005/assets/image-20211014092757-avq9me3.png "思源笔记的图片选项")

语法用的就是 title，导出 md 也能完整保留语法，这样我粘贴到 Hexo 博客去，就能完整保留样式，不需要动了。

比较下其他软件：

* Typora 前面已经展示过了只能鼠标悬浮展示图片标题，加图片说明需要 HTML 语法，而且与图片分离。可能是 Typora 更多是 md 编辑器，更希望遵循通用的规范，希望 md 渲染结果与网页一致吧。
* wolai 虽然支持图片说明，但图片说明是默认居左的，这点和 notion 一样……（不会吧，不会吧，这也要抄？）貌似不支持导出
* Ob 没深入使用过，只知道默认不安装插件下是没法加图片说明的

更不用提思源的本地图床和网络图床共存的图床解决方案、清理未引用图片资源功能。思源未必是最佳笔记软件最佳写作软件，但无疑是我心目的最佳网络文章发布软件༼ つ ◕_◕ ༽つ

