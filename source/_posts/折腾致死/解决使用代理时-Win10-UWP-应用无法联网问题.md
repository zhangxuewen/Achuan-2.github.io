---
title: 解决使用代理时 Win10 UWP 应用无法联网问题
author: 风渡巛
top: false
cover: https://b3logfile.com/siyuan/1610205759005/assets/image-20210920101647-1tdionx.png
toc: true
tags: 
 - v2ray
 - Win10
categories: 折腾致死
abbrlink: 840d
date: 2021-09-20 10:14:57
password:
description:
---
> 平时经常需要使用网络代理，但是它开着的时候，总会导致我电脑里 UWP 应用出现无法联网的状态，EXE 应用不受影响。每次使用 UWP 应用时把代理关了就可以正常联网了。了解到是 UWP 的一些特殊原因，具体原因如下：
>
> Win10 所有 UWP 应用均运行在被称为 App Container 的虚拟沙箱环境中，App Container 可以保证应用安全性，但同时也阻止了网络流量发送到本机（即 loopback）， 使大部分网络抓包调试工具无法对 UWP 应用进行流量分析。同样的，该机制也阻止了 UWP 应用访问 localhost，即使你在系统设置中启用了代理，也无法令 UWP 应用访问本地代理服务器。% 老实说，没看懂这句话 %

不用其他软件，以**管理员权限**启动 powershell 敲下面命令即可：

 `import-module appx -usewindowspowershell`
`foreach ($n in (get-appxpackage).packagefamilyname) {checknetisolation loopbackexempt -a -n="$n"}`
如果只想对某个特定 UWP 应用设置代理，用 `$n=(get-appxpackage *应用名的独特部分，比如邮件应用是commu*).packagefamilyname | checknetisolation loopbackexempt -a -n="$n"`

**如果哪天需要恢复网络隔离，是敲什么命令恢复？**

`checknetisolation loopbackexempt -c` 全部恢复网络隔离
`$n=(get-appxpackage *应用名的独特部分，比如邮件应用是commu*).packagefamilyname | checknetisolation loopbackexempt -d -n="$n"` 针对某个应用恢复隔离
具体怎么用建议自己 powershell/cmd 里敲 `checknetisolation loopbackexempt /?` 自己学

> [路由规则疑似无法完全替代 PAC。 · Issue #1280 · 2dust/v2rayN (github.com)](https://github.com/2dust/v2rayN/issues/1280)
>
> [解决使用代理时 Win10 UWP 应用无法联网问题 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/55906778)