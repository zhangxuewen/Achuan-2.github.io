---
title: The Python Challenge Daily Record
# top: true
cover: https://cdn.jsdelivr.net/gh/Achuan-2/Picbed@pic/assets/16343563911301634356391105.png
toc: true
author: Achuan-2
tags: python基础练习
categories: Python
swiper_index: 1
abbrlink: c134
date: 2020-11-14 11:18:09
description: "Python Challenge是首个谜语编程网站。挑战者需要连续挑战33个需要编程才能解开的谜题以锻炼自己的编程能力。"
photofigcaption: true
---



[Python Challenge](http://www.pythonchallenge.com/)是首个谜语编程网站。挑战者需要连续挑战33个需要编程才能解开的谜题以锻炼自己的编程能力。



该网站建立于2005年，至今已经有三百多万位访客浏览并尝试解决该网站的谜题。
> Python Challenge is a game in which each level can be solved by a bit of (Python) programming.
>
> The Python Challenge was written by Nadav Samet.
>
> All levels can be solved by straightforward and very short scripts.(well, except of level 32.)
>
> Python Challenge welcomes programmers of all languages. You will be able to solve most riddles in any programming language, but some of them will require Python.
>
> Sometimes you'll need extra modules. All can be downloaded for free from the internet.
>
> It is just for fun - nothing waits for you at the end.
>
> Keep the scripts you write - they might become useful.


希望每天都能坚持刷题哈！🚩(然而并没有...)

## level_0_2020.10.28

Link: http://www.pythonchallenge.com/pc/def/0.html
![热身关](https://i.loli.net/2020/11/14/HC8xwDEoN4hPyvn.png)
**🖊Learned**
代码的强大
回顾一下乘方运算(这可能是python语法里最熟的之一了)

**🔑Solution**
就按照图片给的乘方算吧!


**💻Code**
```python
#! level 0
print(2**38)
# 274877906944
```

## level_1_map_2020.10.27

Link : http://www.pythonchallenge.com/pc/def/274877906944.html
![level_1](https://i.loli.net/2020/11/14/Y2EqrAsKB9lHtQi.png)
**🖊Learned**
其实还可以用map方法，但是需要用if判断，不然空格括号也被翻译了。
`ord(char)`:返回char的ASCII序列值
`chr(num)`:返回ASCII码对应的字符

**🔑Solution**
根据所给图片提示,发现K和M,O和Q,E和G都差两个字母,所以应该就是做一个映射表,把给的字符翻译出来

**💻Code**
```python

import string
orginal_str = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle \
gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."

trans = str.maketrans(string.ascii_lowercase,
                      string.ascii_lowercase[2:] + string.ascii_lowercase[:2])
# string.ascii_lowercase = abcdefghijklmnopqrstuvwxyz
# string.ascii_lowercase[2:] + string.ascii_lowercase[:2] cdefghijklmnopqrstuvwxyzab
print(string.ascii_lowercase[2:] + string.ascii_lowercase[:2])
changed_str = orginal_str.translate(trans)
print(changed_str)
# output i hope you didnt translate it by hand. thats what computers are for. doing it in by hand is inefficient and that's why this text is so long.
# using string.maketrans() is recommended. now apply on the url.

print('map'.translate(trans))
# ocr
```

## level_2_ocr_2020.10.28

Link: http://www.pythonchallenge.com/pc/def/ocr.html
![level_2](https://i.loli.net/2020/11/14/RL6ucAMmJ3k4vNn.png)
**🖊Learned**
**request和urllib的区别：**
我们在使用python爬虫时，需要模拟发起网络请求，主要用到的库有requests库和python内置的urllib库，一般建议使用requests，它是对urllib的再次封装，它们使用的主要区别：
requests可以直接构建常用的get和post请求并发起，urllib一般要先构建get或者post请求，然后再发起请求。

**正则：**
- `requests.get(url).text` 获得html内容
- `re.search` 找到匹配的字符串，只匹配一次
- 获得需要处理的内容，\s可以匹配空格、Tab空白符）
- `match.group(n)`返回子字符串,注意到group(0)永远是原始字符串，group(1)、group(2)……表示第1、2、……个子串。
- `.`匹配除了换行的任意字符,`\s`匹配任何Unicode空白字符（包括 [ \t\n\r\f\v] ,?对它前面的正则式匹配0到1次重复

**🔑Solution**
查看页面源代码,发现后面有一堆乱七八糟的字符,我们的任务就是把里面参杂的字母给挑出来


**💻Code**
```python
#  level2
import requests
import re
from collections import Counter
html = requests.get(
    "http://www.pythonchallenge.com/pc/def/ocr.html").text  # 获取HTML文档

text = re.search(r"<!--\n(%(.|\s)+)?\n-->", html).group(1)
file = open('output/level_2_data.txt', 'w')
file.write(text)
final_text = re.findall("[a-z]", text)  # findall 返回字符串列表
print(final_text)

# 或者直接对所有字符计数
# final_text = re.search("<!--\n%(.|\s)+", text).group()
# q = Counter(final_text)  # 对里面的所有字符计数
# print(q)
# t = [i for i in q if q[i] == 1]  # 找出只出现一次的字符
# print("".join(t))
# 输出了equality

""" 另一种方法，使用了urllib
import urllib.request as ur
import re



url = "http://www.pythonchallenge.com/pc/def/ocr.html"


def main():
    global url

    response = ur.urlopen(url)
    body = response.read()
    print(body)
    text = re.search("<!--\n%(.|\s)+", body.decode())
    dic = {}
    # print(text.group(0))
    for x in text.group(0):
        if x not in dic:
            dic[x] = 1
        else:
            dic[x] += 1

    for k,v in dic.items():
        print(k,v)
    for i in dic:
        if (dic[i] == 1 and 'a' <= i <= 'z'):
            print(i, end='')


if __name__ == '__main__':
    main()
"""

```

## level 3_equality_2020.10.29
Link : http://www.pythonchallenge.com/pc/def/equality.html
![level_3](https://i.loli.net/2020/11/14/dXmwRVtqJkvEosO.png)

**🖊Learned**
- findall用括号自动返回子串，当给出的正则表达式中带有多个括号时，列表的元素为多个字符串组成的tuple
- `re.findall(r'[^A-Z][A-Z]{3}([a-z])[A-Z]{3}[^A-Z]', text)`匹配时需要注意既然约定了3个大写字母,那外围就是小写字母了!
  
**🔑Solution**
根据图片底下的文字提示,需要找到源代码中被三个大写字母包围的小写字母,然后把它们拼接在一起,为linklist
打开 http://www.pythonchallenge.com/pc/def/linkedlist.html 提示linkedlist.php
再打开 http://www.pythonchallenge.com/pc/def/linkedlist.php

**💻Code**
```python

import requests
import re
html = requests.get("http://www.pythonchallenge.com/pc/def/equality.html").text
text = re.search(r'<!--\n((.|\s)+)?\n-->', html).group(1)

file = open('level_3_data.txt', 'w')
file.write(text)
results = re.findall(r'[^A-Z][A-Z]{3}([a-z])[A-Z]{3}[^A-Z]', text)
print(''.join(results))  #linkedlist
# ? 如果不括号起来，得到的结果会是
# !['qIQNlQSLi', 'eOEKiVEYj', 'aZADnMCZq', 'bZUTkLYNg', 'uCNDeHSBj', 'kOIXdKBFh', 'dXJVlGZVm', 'gZAGiLQZx', 'vCJAsACFl', 'qKWGtIDCj']
# 所以说findall用括号自动返回子串，当给出的正则表达式中带有多个括号时，列表的元素为多个字符串组成的tuple
```

## level_4_linkedlist_2020.10.30

Link :http://www.pythonchallenge.com/pc/def/linkedlist.php
![level_4头图](https://i.loli.net/2020/11/14/1a8I2zg9c3CShUB.png)
**🖊Learned**
要注意函数的局部变量和全局变量呀
request 尝试多次连接页面
```python
    i = 0
    while i < 3:
        try:
            html = requests.get(url, timeout=5).text
            return html
        except requests.exceptions.RequestException:
            i += 1
```

**🔑Solution**
点击[linkedlist.php?nothing=12345](http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=12345)这个链接,进入的页面显示and the next nothing is 44827,反复操作,发现这一关就是疯狂跳转网页

**💻Code**
```python
import re
import requests


def next_page(link):
    global steps # 使得函数内的step和全局变量为一个变量
    html = gethtml(f"http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing={link}")
    try:
        hint = re.search(r'.*\s(\d+)', html).group(1)
    except AttributeError:
        print(html)
        print("小心前面有诡计！")
        return 'stop'
    else:
        steps +=1
        print(steps, hint)
        return hint


def gethtml(url):
    '''
    因为发现request经常会卡住无响应，所以封装了这个函数，用于重试
    '''
    i = 0
    while i < 3:
        try:
            html = requests.get(url, timeout=5).text
            return html
        except requests.exceptions.RequestException:
            i += 1


def run(link):
    while True:
        link = next_page(link)
        if link == 'stop':
            break


steps = 1
link = 12345
run(link)
# Yes. Divide by two and keep going.
print('怕啥，那我就输入8022继续跑')
run(8022)  # 16044//2=8022
# 最终输出结果peak.html，打开http://www.pythonchallenge.com/pc/def/peak.html

```

## level_5_peak_2020.10.31

Link: http://www.pythonchallenge.com/pc/def/peak.html

![level_5](https://i.loli.net/2020/10/31/gGHW3n5NeKUZBY9.png)

**🖊Learned**
爬虫
- `requests.get(url).text` 是获得纯文本内容
- `requests.get(url).content`是二进制内容
- `urllib.urlopen(url)` 返回的是文件对象，用read()查看

pickle
`pickle`是python语言的一个标准模块，能对数据进行序列化和反序列化，序列化过程将文本信息转变为二进制数据流。反序列化便可以得到原始的数据。这样便于存储数据和发送数据
- `pickle.dump() `序列化
- `pickle.load()` 反序列化方法

**🔑Solution**
点击[banner.p](http://www.pythonchallenge.com/pc/def/banner.p)，发现页面只有这样的长~条
```
(lp0
(lp1
(S' '
p2
I95
tp3
aa(lp4
(g2
I14
tp5
a(S'#'
p6
I5
tp7
a(g2
I70
tp8
a(g6
I5
tp9
a(g2
I1
tp10
aa(lp11
(g2
I15
tp12
```
之前源代码提示"peak hell sounds familiar ",peak hell 的谐音是pickle，就用pickle处理数据，发现是一个二维数组，每行都以[(' '/'#', 数字)],这种形式存放内容单位, 而列表的每行数字相加都为95，猜测前面是打印的内容，后面跟着是打印的数量，最后竟然在终端输出为一个大大的“channel”!


```python
import re
import requests
import pickle

# 获取二进制的数据
content= requests.get("http://www.pythonchallenge.com/pc/def/banner.p").content
# print(content)
data = pickle.loads(content)
# 发现是一个二维数组，每行都以[(' '/'#', 数字)],这种形式存放内容单位
for line in data:
    print(line)

# 列表的每行相加都为95，猜测前面是打印的内容，后面跟着是打印的数量
for line in data:
    output = ''
    for c in line:
        output +=c[0]*c[1]
    print(output)

##得到channel的输出
## http://www.pythonchallenge.com/pc/def/channel.html
```

**Output**
```

              #####                                                                      #####
               ####                                                                       ####
               ####                                                                       ####
               ####                                                                       ####
               ####                                                                       ####
               ####                                                                       ####
               ####                                                                       ####
               ####                                                                       ####
      ###      ####   ###         ###       #####   ###    #####   ###          ###       ####
   ###   ##    #### #######     ##  ###      #### #######   #### #######     ###  ###     ####
  ###     ###  #####    ####   ###   ####    #####    ####  #####    ####   ###     ###   ####
 ###           ####     ####   ###    ###    ####     ####  ####     ####  ###      ####  ####
 ###           ####     ####          ###    ####     ####  ####     ####  ###       ###  ####
####           ####     ####     ##   ###    ####     ####  ####     #### ####       ###  ####
####           ####     ####   ##########    ####     ####  ####     #### ##############  ####
####           ####     ####  ###    ####    ####     ####  ####     #### ####            ####
####           ####     #### ####     ###    ####     ####  ####     #### ####            ####
 ###           ####     #### ####     ###    ####     ####  ####     ####  ###            ####
  ###      ##  ####     ####  ###    ####    ####     ####  ####     ####   ###      ##   ####
   ###    ##   ####     ####   ###########   ####     ####  ####     ####    ###    ##    ####
      ###     ######    #####    ##    #### ######    ###########    #####      ###      ######
```



## level_6_channel_2020.11.1

Link: http://www.pythonchallenge.com/pc/def/channel.html

![](https://i.loli.net/2020/11/14/Iu7NkRG8coOTPZs.jpg)
**🖊Learned**
python中如何打开压缩包
`channel_zip = zipfile.ZipFile(zip_file, "r")`创建压缩包对象
`channel_zip.open('readme.txt', 'r')` 打开压缩包里的某个文件

**🔑Solution**
查看源代码

```html
<html> <!-- <-- zip -->
<head>
  <title>now there are pairs</title>
  <link rel="stylesheet" type="text/css" href="../style.css">
</head>
<body>
<center>
<top_img src="channel.jpg">
<br/>
<!-- The following has nothing to do with the riddle itself. I just
thought it would be the right point to offer you to donate to the
Python Challenge project. Any amount will be greatly appreciated.

-thesamet
-->

```

<html> <!-- <-- zip -->

如果把注释去掉就是html <-- zip，暗示把html改为zip

提示是zip，于是改url，发现可下载zip！（城会玩！）

![](https://i.loli.net/2020/11/14/8RCsjhBYHVJLSTt.png)

查看压缩包，发现里面有一个readme.txt, 剩下的文件是一大坨以数字命名的txt,阅读readme, 发现这一关和linklist类似,谜底和peak关又类似, 最后答案为hockey

**💻Code**

```python
import requests
import io
import re
import zipfile  # #导入对zip文件处理的模块 zipfile

##获取二进制数据
zip_get = requests.get(
    "http://www.pythonchallenge.com/pc/def/channel.zip").content

# StringIO和BytesIO是在内存中操作str和bytes的方法，使得和读写文件具有一致的接口
zip_file = io.BytesIO(zip_get)  #将函数返回的压缩包的二进制数据在内存中读
channel_zip = zipfile.ZipFile(zip_file, "r")  #以只读方式打开压缩包

print(channel_zip.namelist())  #打印压缩包内的文件名列表
#阅读 readme.txt

with channel_zip.open('readme.txt', 'r') as f:
    print(f.read().decode('utf-8')) #文件里的内容是byte字节，所以用utf-8读取

 """得到如下提示
 welcome to my zipped list.

# hint1: start from 90052
# hint2: answer is inside the zip
"""

file_name_next = "90052"  # 阅读readme.txt的提示
comment = ''  # 阅读 46145.txt，说要collect the comments

while True:
    file_comment = channel_zip.getinfo(file_name_next + ".txt").comment.decode(
        "utf-8")  # 以utf-8方式读取压缩包内的各个文件
    #comment是个什么东东？？
    comment += file_comment
    with channel_zip.open(file_name_next + ".txt", "r") as f:  # 阅读文件内容
        file_content = f.read().decode('utf-8')
        print(file_content)
    try:  # 尝试查找下一个线索，用正则查找数字
        file_name_next = re.search(r"\d+", file_content).group(0)
    except:  #没有则中断
        break

print(comment)

zip_file.close()
```

**Output**

```
****************************************************************
****************************************************************
**                                                            **
**   OO    OO    XX      YYYY    GG    GG  EEEEEE NN      NN  **
**   OO    OO  XXXXXX   YYYYYY   GG   GG   EEEEEE  NN    NN   **
**   OO    OO XXX  XXX YYY   YY  GG GG     EE       NN  NN    **
**   OOOOOOOO XX    XX YY        GGG       EEEEE     NNNN     **
**   OOOOOOOO XX    XX YY        GGG       EEEEE      NN      **
**   OO    OO XXX  XXX YYY   YY  GG GG     EE         NN      **
**   OO    OO  XXXXXX   YYYYYY   GG   GG   EEEEEE     NN      **
**   OO    OO    XX      YYYY    GG    GG  EEEEEE     NN      **
**                                                            **
****************************************************************
 **************************************************************

```

所谓的comment其实可以通过banzip查看,"空白"的注释应该是空格或者换行符

![使用banzip查看压缩包内容](https://i.loli.net/2020/11/15/Bb4tqPk7efEyZho.png)





## level_7_oxygen_2020.11.2

Link: http://www.pythonchallenge.com/pc/def/hockey.html

**🖊Learned**
这是第一次遇到PIL,后面PIL就是老盆友咯!
top_img.getpixel((x,y)) 获得像素值
top_img.size 获得w和h

**🔑Solution**
it's in the air. look at the letters. letter指的是hockey，说在空气中，空气那就是氮气、氧气、二氧化碳等东西，猜测是氧气oxygen。

于是打开http://www.pythonchallenge.com/pc/def/oxygen.html，发现第七关谜题，只有一张图，中间有个灰带html代码如下
![](https://i.loli.net/2020/11/14/xiZeBmbaCh3L4oJ.png)



```html
<html>
<head>
    <title>smarty</title>
    <link rel="stylesheet" type="text/css" href="../style.css">
</head>
<body>
    <top_img src="oxygen.png" />
</body>
</html>


```

获取图片，对其进行处理

```python
import requests
import io
from PIL import Image  # Python Imaging Library导入Image

url = 'http://www.pythonchallenge.com/pc/def/oxygen.png'
image = requests.get(url).content

top_img_io = io.BytesIO(image)  #二进制数据放入内存
top_img = Image.open(top_img_io)  #打开图片，创建图片对象
# top_img.show() # 显示图像，启动一个窗口
# print(top_img.size)  #629,95
# 灰色带大概在图片中间部位
width, height = top_img.size
y = height // 2  ##灰色带的大致区域设为y
print(top_img.mode)  # 查看图片像素模式，RGBA，带alpha通道
# 获取中间条带的信息
for x in range(width):
    pixel = top_img.getpixel((x, y))

    print(pixel) #打印各个点的像素信息

```

筛选出灰色带

```python

for x in range(width):
    pixel = top_img.getpixel((x, y))
    if pixel[1] == pixel[0] and pixel[0] == pixel[2]:

        print(pixel[0], end=' ')
print()
print()
```
输出结果：开头的115重复5次，中间的重复7次，最后重复8次
```
115 115 115 115 115 109 109 109 109 109 109 109 97 97 97 97 97 97 97 114 114 114 114 114 114 114 116 116 116 116 116 116 116 32 32 32 32 32 32 32 103 103 103 103 103 103 103 117 117 117 117 117 117 117 121 121 121 121 121 121 121 44 44 44 44 44 44 44 32 32 32 32 32 32 32 121 121 121 121 121 121 121 111 111 111 111 111 111 111 117 117 117 117 117 117 117 ... 52 52 52 52 52 52 52 44 44 44 44 44 44 44 32 32 32 332 32 32 32 49 49 49 49 49 49 49 48 48 48 48 48 48 48 53 53 53 53 53 53 53 44 44 44 4 4 44 44 44 32 32 32 32 32 32 32 49 49 49 49 49 49 49 49 49 49 49 49 49 49 54 54 54 544 54 54 54 44 44 44 44 44 44 44 32 32 32 32 32 32 32 49 49 49 49 49 49 49 50 50 50 50 5
50 50 50 49 49 49 49 49 49 49 93 93 93 93 93 93 93 93
```

把每个灰度值提取出来
```python
#
#尝试 给字符串去重, 但是发现会自动排序🤣丢失信息
""" grey_list = []
for x in range(width):
    pixel = top_img.getpixel((x, y))
    if pixel[1] == pixel[0] and pixel[0] == pixel[2]:
        grey_list.append(pixel[0])
grey_set = set(grey_list) #用set去重
print(grey_set) """

# 每七个取一个数字

for x in range(width):
    pixel = top_img.getpixel((x, y))
    if pixel[1] == pixel[0] and pixel[0] == pixel[2]:
        if x % 7 == 0:
            print(pixel[0], end=' ')
print()
```

得到数字串
```
115 109 97 114 116 32 103 117 121 44 32 121 111 117 32 109 97 100 101 32 105 116 46 32 116

104 101 32 110 101 120 116 32 108 101 118 101 108 32 105 115 32 91 49 48 53 44 32 49 49 48

44 32 49 49 54 44 32 49 48 49 44 32 49 48 51 44 32 49 49 52 44 32 49 48 53 44 32 49 49 54                         44

32 49 50 49 93
```
猜测把字符串用ASCII码翻译
```python
for x in range(width):
    pixel = top_img.getpixel((x, y))
    if pixel[1] == pixel[0] and pixel[0] == pixel[2]:
        if x % 7 == 0:
            print(chr(pixel[0]), end='')
print()
# ! 得到 smart guy, you made it. the next level is [105, 110, 116, 101, 103, 114, 105, 116, 121]
```

最后的处理, 得到integrity
```python
hint = [105, 110, 116, 101, 103, 114, 105, 116, 121]
for num in hint:
    print(chr(num), end='')  #integrity
```


**💻Code**
完整代码
```python
import requests
import io
from PIL import Image  # Python Imaging Library导入Image

url = 'http://www.pythonchallenge.com/pc/def/oxygen.png'
image = requests.get(url).content

top_img_io = io.BytesIO(image)  # 二进制数据放入内存
top_img = Image.open(top_img_io)  # 打开图片，创建图片对象
# top_img.show() # 显示图像，启动一个窗口
# print(top_img.size)  #629,95
# 灰色带大概在图片中间部位
width, height = top_img.size
y = height // 2  # 灰色带的大致区域设为y
print(top_img.mode)  # 查看图片像素模式，RGBA，带alpha通道
for x in range(width):
    pixel = top_img.getpixel((x, y))

    print(pixel)  # 打印各个点的像素信息

# 得到各个点的RGBA值后，先对灰色像素带处理

# 每七个取一个数字

# ?猜测把字符串用ASCII码翻译
for x in range(width):
    pixel = top_img.getpixel((x, y))
    if pixel[1] == pixel[0] and pixel[0] == pixel[2]:
        if x % 7 == 0:
            print(chr(pixel[0]), end='')
print()
# ! 得到 smart guy, you made it. the next level is [105, 110, 116, 101, 103, 114, 105, 116, 121]


hint = [105, 110, 116, 101, 103, 114, 105, 116, 121]
for num in hint:
    print(chr(num), end='')  # integrity

```


## level 8_integrity_2020.11.3

Link : http://www.pythonchallenge.com/pc/def/integrity.html

**🖊Learned**

> bz2 模块是 bzip2 库的接口，用于压缩数据以进行存储或传输。提供了三种 API：
>
> ​	“一次性” 压缩 / 解压缩功能，用于操作大堆数据,[`compress()`](https://docs.python.org/zh-cn/3/library/bz2.html#bz2.compress) 和 [`decompress()`](https://docs.python.org/zh-cn/3/library/bz2.html#bz2.decompress) 函数。
> ​			用于处理数据流的迭代压缩 / 解压缩对象,[`BZ2Compressor`](https://docs.python.org/zh-cn/3/library/bz2.html#bz2.BZ2Compressor) 和 [`BZ2Decompressor`](https://docs.python.org/zh-cn/3/library/bz2.html#bz2.BZ2Decompressor) 类。
> ​			类似文件的类，支持与未压缩文件一样的读写,[`open()`](https://docs.python.org/zh-cn/3/library/bz2.html#bz2.open) 函数和 [`BZ2File`](https://docs.python.org/zh-cn/3/library/bz2.html#bz2.BZ2File) 类。
> ————————————————

然后总结一下bz2的用法，首先输入的解压数据得是二进制，`bz2.BZ2Decompressor()`是创建一个Decompressor，还是得用decompress来解压数据，不过这是逐步处理而不是一次性将数据全放入内存！

记住b'BZ..'二进制数据BZ开头就是用bz2压缩的,之后也会经常遇到

**🔑Solution**

查看源代码
```html

<html>
<head>
  <title>working hard?</title>
  <link rel="stylesheet" type="text/css" href="../style.css">
</head>
<body>
	<top_img src="integrity.jpg" width="640" height="480" border="0" usemap="#notinsect"/>
	<map name="notinsect">
	<area shape="poly"
		coords="179,284,214,311,255,320,281,226,319,224,363,309,339,222,371,225,411,229,404,242,415,252,428,233,428,214,394,207,383,205,390,195,423,192,439,193,442,209,440,215,450,221,457,226,469,202,475,187,494,188,494,169,498,147,491,121,477,136,481,96,471,94,458,98,444,91,420,87,405,92,391,88,376,82,350,79,330,82,314,85,305,90,299,96,290,103,276,110,262,114,225,123,212,125,185,133,138,144,118,160,97,168,87,176,110,180,145,176,153,176,150,182,137,190,126,194,121,198,126,203,151,205,160,195,168,217,169,234,170,260,174,282"
		href="../return/good.html" />
	</map>
	<br><br>
	<font color="#303030" size="+2">Where is the missing link?</font>
</body>
</html>

<!--
un: 'BZh91AY&SYA\xaf\x82\r\x00\x00\x01\x01\x80\x02\xc0\x02\x00 \x00!\x9ah3M\x07<]\xc9\x14\xe1BA\x06\xbe\x084'
pw: 'BZh91AY&SY\x94$|\x0e\x00\x00\x00\x81\x00\x03$ \x00!\x9ah3M\x13<]\xc9\x14\xe1BBP\x91\xf08'
-->
```

Where is the missing link? 链接缺失，area有属性的coords好像有问题，输入进去

难道有鬼？？？

```python
may_hint = "179,284,214,311,255,320,281,226,319,224,363,309,339,222,371,225,411,229,404,242,415,252,428,233,428,214,394,207,383,205,390,195,423,192,439,193,442,209,440,215,450,221,457,226,469,202,475,187,494,188,494,169,498,147,491,121,477,136,481,96,471,94,458,98,444,91,420,87,405,92,391,88,376,82,350,79,330,82,314,85,305,90,299,96,290,103,276,110,262,114,225,123,212,125,185,133,138,144,118,160,97,168,87,176,110,180,145,176,153,176,150,182,137,190,126,194,121,198,126,203,151,205,160,195,168,217,169,234,170,260,174,282"

mh_list = may_hint.split(',')
print(mh_list)
for num in mh_list:
    print(chr(int(num)), end='')

"""
output result：it seems terrible!!!
³ĜÖķÿŀęâĿàūĵœÞųáƛåƔòƟüƬéƬÖƊÏſÍƆÃƧÀƷÁƺÑƸ×ǂÝǉâǕÊǛ»Ǯ¼Ǯ©ǲǫyǝǡ`Ǘ^ǊbƼ[ƤWƕ\ƇXŸRŞOŊRĺUıZī`ĢgĔnĆrá{Ô}¹
°°¶¾~ÂyÆ~ËÍ Ã¨Ù©êªĄ®Ě³
"""
```

好吧是我想多了，还有其他信息

点击超链接，看到让人输出用户名和密码

![](https://i.loli.net/2020/11/14/mX5UOF8JTP6h3wW.png)

看到最后一段的注释好像就是对应的用户名un和密码pw，问题是这玩意怎么解！！！

```html
<!--
un: 'BZh91AY&SYA\xaf\x82\r\x00\x00\x01\x01\x80\x02\xc0\x02\x00 \x00!\x9ah3M\x07<]\xc9\x14\xe1BA\x06\xbe\x084'
pw: 'BZh91AY&SY\x94$|\x0e\x00\x00\x00\x81\x00\x03$ \x00!\x9ah3M\x13<]\xc9\x14\xe1BBP\x91\xf08'
-->

```

注意到开头BZ，查阅之后得知是bzip2压缩, 把un和pw字符串进行解压就可以得到答案了


**💻Code**

```python
import bz2
un = b'BZh91AY&SYA\xaf\x82\r\x00\x00\x01\x01\x80\x02\xc0\x02\x00 \x00!\x9ah3M\x07<]\xc9\x14\xe1BA\x06\xbe\x084'
pw = b'BZh91AY&SY\x94$|\x0e\x00\x00\x00\x81\x00\x03$ \x00!\x9ah3M\x13<]\xc9\x14\xe1BBP\x91\xf08'

# 1. 逐步处理
print(bz2.BZ2Decompressor().decompress(un))
print(bz2.BZ2Decompressor().decompress(pw))

# 2. 一次性处理
print (bz2.decompress(un))
print (bz2.decompress(pw))

# output:
# b'huge'
# b'file'

```

然后就输入用户名huge，密码file进入第九关啦！

[点击进入下一关](http://www.pythonchallenge.com/pc/return/good.html)



## level_9_good_2020.11.4

Link :http://www.pythonchallenge.com/pc/return/good.html

**🖊Learned**

今天要学习的内容：

- [Python zip() 函数](https://www.runoob.com/python/python-func-zip.html)，经常用于列表两个两个处理
- [Python Pillow 库 ImageDraw 绘制图像模块](https://zhuanlan.zhihu.com/p/59849190)
- [python Image](https://www.jianshu.com/p/171ce1d0656e)

PIL.Image.new(mode, size, color=0)

- mode 颜色模式，9种，分别为1(非黑即白)，L(灰色），P（8bit,调色板模式)，RGB，RGBA，CMYK，YCbCr，I，F。
- size 大小（500，500）
- color 默认黑色

Web客户端授权验证
```python
# 用户名
user = "huge"
# 密码
passwd = "file"
# Web服务器 IP
url = "http://www.pythonchallenge.com/pc/return/good.html"

# 1. 构建一个密码管理对象，用来保存需要处理的用户名和密码
passwdmgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()

# 2. 添加账户信息，第一个参数realm是与远程服务器相关的域信息，一般没人管它都是写None，后面三个参数分别是 Web服务器、用户名、密码
passwdmgr.add_password(None, url, user, passwd)

# 3. 构建一个HTTP基础用户名/密码验证的HTTPBasicAuthHandler处理器对象，参数是创建的密码管理对象
httpauth_handler = urllib.request.HTTPBasicAuthHandler(passwdmgr)

# 4. 通过 build_opener()方法使用这些代理Handler对象，创建自定义opener对象，参数包括构建的 proxy_handler
opener = urllib.request.build_opener(httpauth_handler)

# 5. 可以选择通过install_opener()方法定义opener为全局opener
urllib.request.install_opener(opener)

# 6. 构建 Request对象
request = urllib.request.Request(url)

# 7. 定义opener为全局opener后，可直接使用urlopen()发送请求
response = urllib.request.urlopen(request)

# 8. 打印响应内容
html = response.read().decode()
```
好像有点长~哇

**🔑Solution**

```python
from PIL import Image
from PIL import ImageDraw


#改天用正则表达式改下
first = [
    146, 399, 163, 403, 170, 393, 169, 391, 166, 386, 170, 381, 170, 371, 170,
...
]

second = [
    156, 141, 165, 135, 169, 131, 176, 130, 187, 134, 191, 140, 191, 146, 186,
...
]
#创建图片对象，背景为白色，模式为非黑即白
top_img = Image.new('1', (500, 500), 1)
draw = ImageDraw.Draw(top_img)


```
打印first
```python
draw.line(list(zip(first[0::2], first[1::2])))

top_img.show()
```

<top_img src="https://i.loli.net/2020/11/14/niUgVLqSEk8sT3x.png" width="50%" />

打印second
```python
draw.line(list(zip(second[0::2], second[1::2])))
top_img.show()
```

<top_img src="https://i.loli.net/2020/11/14/XCBEkIuJLOo3pjH.png"  width="50%;" />

合并

```python
# draw.line(list(zip(first[0::2], first[1::2])))
# draw.line(list(zip(second[0::2], second[1::2])))
draw.line(first)
draw.line(second)
top_img.show()

```

<top_img src="https://i.loli.net/2020/11/14/nlBoNPd1jp3GEvc.png"  width="50%" />

换一种画图



```python
top_img = Image.new('RGB', (500, 500))
draw = ImageDraw.Draw(top_img)
draw.polygon(list(zip(first[0::2], first[1::2])), fill="white")
draw.polygon(list(zip(second[0::2], second[1::2])), fill="white")
top_img.show()
```

<top_img src="https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201226131057-2020-12-26.png"  width="50%" />



所以答案就是bull啦

**💻Code**
```python
from PIL import Image
from PIL import ImageDraw
import urllib.request
import re
# 用户名
user = "huge"
# 密码
passwd = "file"
# Web服务器 IP
url = "http://www.pythonchallenge.com/pc/return/good.html"

# 1. 构建一个密码管理对象，用来保存需要处理的用户名和密码
passwdmgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()

# 2. 添加账户信息，第一个参数realm是与远程服务器相关的域信息，一般没人管它都是写None，后面三个参数分别是 Web服务器、用户名、密码
passwdmgr.add_password(None, url, user, passwd)

# 3. 构建一个HTTP基础用户名/密码验证的HTTPBasicAuthHandler处理器对象，参数是创建的密码管理对象
httpauth_handler = urllib.request.HTTPBasicAuthHandler(passwdmgr)

# 4. 通过 build_opener()方法使用这些代理Handler对象，创建自定义opener对象，参数包括构建的 proxy_handler
opener = urllib.request.build_opener(httpauth_handler)

# 5. 可以选择通过install_opener()方法定义opener为全局opener
urllib.request.install_opener(opener)

# 6. 构建 Request对象
request = urllib.request.Request(url)

# 7. 定义opener为全局opener后，可直接使用urlopen()发送请求
response = urllib.request.urlopen(request)

# 8. 打印响应内容
html = response.read().decode()
first_str = re.search(r"first:\n((.|\s)+)\n\nsecond:", html).group(1)
first_num = re.findall(r'\d+', first_str)
first_num = [int(x) for x in first_num]
print(first_num)
second_str = re.search(r'second:\n((.|\s)+)', html).group(1)
second_num = re.findall(r'\d+', second_str)
second_num = [int(x) for x in second_num]
print(second_num)

top_img = Image.new('1', (500, 500), 1)
draw = ImageDraw.Draw(top_img)
draw.line(first_num)
draw.line(second_num)
top_img.show()

# top_img = Image.new('RGB', (500, 500))
# draw = ImageDraw.Draw(top_img)
# draw.polygon(list(zip(first_num[0::2], first_num[1::2])), fill="white")
# draw.polygon(list(zip(second_num[0::2], second_num[1::2])), fill="brown")
# top_img.show()

```
[点击进入下一关](http://www.pythonchallenge.com/pc/return/bull.html)





## level_10_bull_2020.11.5

Link: http://www.pythonchallenge.com/pc/return/bull.html
![](https://i.loli.net/2020/11/14/g5mdp2QahHuecCU.png)

**🖊Learned**
这一关考察数学归纳还有编程功底, 计算每个字符出现的重复次数的方法需要学习一下, 虽然可以直接通过python的库实现
**🔑Solution**
点击图片，看到

```
a = [1, 11, 21, 1211, 111221,...]
```

所以这题的意思就是找规律

1，1个1→11

2个1→21

1个2一个1→1211

1个1，1个2，2个1→111221

**💻Code**
```python
# len(a[30]) = ?
a = ['1']
b = ''
for num in range(30):  # 运行30次
    position = 0
    repeats = 0
    while position < len(a[num]):
        while repeats < len(a[num]) and a[num][repeats] == a[num][position]:
            repeats += 1
        b += str(repeats - position) + a[num][position]
        position = repeats
    a.append(b)
    b = ''
print(len(a[30]))
```

得到5080

所以点击进入下一关： http://www.pythonchallenge.com/pc/return/5808.html



## level_11_5808&pillow_2020.11.6


翻译了一整天的药学作业的两篇论文，copy了两万多字，差点吐血🤮

好了，今晚还是继续挑战python吧
### 🖊Learned的知识-pillow

感觉好几关都和图像处理有关欸！就稍微补一点pillow库的知识吧

[PIL 简明教程 - 基本用法](https://liam.page/2015/04/22/pil-tutorial-basic-usage/)

[廖雪峰 - Pillow](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/0014320027235877860c87af5544f25a8deeb55141d60c5000#0)

[python PIL 图像处理](https://www.jianshu.com/p/e8d058767dfa#%E5%9B%BE%E5%83%8F%E9%80%9A%E9%81%93\%E5%87%A0%E4%BD%95%E5%8F%98%E6%8D%A2\%E8%A3%81%E5%89%AA)

PIL：Python Imaging Library，已经是Python平台事实上的图像处理标准库了。PIL功能非常强大，但API却非常简单易用。但由于PIL仅支持到Python 2.7，加上年久失修，于是一群志愿者在PIL的基础上创建了兼容的版本，名字叫[Pillow](https://github.com/python-pillow/Pillow)，支持最新Python 3.x，又加入了许多新特性，因此，我们可以直接安装使用Pillow。

```python
 pip install pillow
```
#### 图像打开，保存

```python
from PIL import Image

# 打开一个jpg图像文件，注意是当前路径:
im = Image.open('test.jpg')
# 获得图像尺寸:
w, h = im.size # 注意，比如尺寸是640，480，实际为0-639，0-479
print('Original image size: %sx%s' % (w, h))
print('Resize image to: %sx%s' % (w//2, h//2))
# 把缩放后的图像用jpeg格式保存:
im.save('thumbnail.jpg', 'jpeg')
```

#### 图片切片

```python
#box变量是一个四元组(左，上，右，下)。
box = (int(left), int(top),int(right),int(bottom))

region = im.crop(box)

```

#### 图片缩放

```python
# 缩放到50%:
im.thumbnail((w//2, h//2)) #  thumbnail会保持宽高比
# 如果要重设大小和比例可以用resize，Image.ANTIALIAS是高质量滤镜
top_img = top_img.resize((480, 270), Image.ANTIALIAS)
```

#### 使用matplotlib.pyplot

```python
from PIL import Image
import matplotlib.pyplot as plt
top_img = Image.open('assets/cave.jpg')  #打开图像
plt.figure("beauty")
plt.subplot(1, 2, 1), plt.title('origin')
plt.imshow(top_img), plt.axis('off')
#box变量是一个四元组(左，上，右，下)。
box = (80, 100, 260, 300)
roi = top_img.crop(box)
plt.subplot(1, 2, 2)
plt.title('roi')
plt.imshow(roi)
plt.axis('off')
plt.show()
```

![](https://i.loli.net/2020/11/14/7ISiFbVpC29mDTO.png)



#### 新建图像

```python
odd_top_img = Image.new("RGB", (width // 2, height // 2), (255, 255, 255))
```

#### 高斯模糊

```python
im2 = im.filter(ImageFilter.BLUR)
im2.save('blur.jpg', 'jpeg')
```

#### 生成字母验证码图片

```python
from PIL import Image, ImageDraw, ImageFont, ImageFilter

import random

# 随机字母:
def rndChar():
    return chr(random.randint(65, 90))

# 随机颜色1:
def rndColor():
    return (random.randint(64, 255), random.randint(64, 255), random.randint(64, 255))

# 随机颜色2:
def rndColor2():
    return (random.randint(32, 127), random.randint(32, 127), random.randint(32, 127))

# 240 x 60:
width = 60 * 4
height = 60
image = Image.new('RGB', (width, height), (255, 255, 255))
# 创建Font对象:
setfont = ImageFont.truetype(('C:/windows/fonts/Arial.ttf', 36)
# 创建Draw对象:
draw = ImageDraw.Draw(image)
# 填充每个像素:
for x in range(width):
    for y in range(height):
        draw.point((x, y), fill=rndColor())
# 输出文字:
for t in range(4):
    draw.text((60 * t + 10, 10), rndChar(), font=setfont, fill=rndColor2())
# 模糊:
image = image.filter(ImageFilter.BLUR)
image.show()
image.save('code.jpg', 'jpeg')
```

![](https://i.loli.net/2020/11/14/2yhrMLeH8QngKUC.jpg)

**🔑Solution**

查看网页源代码，odd even 提示很明显了，就是处理图片偶数和奇数像素点

```html
<html>
<head>
  <title>odd even</title>
  <link rel="stylesheet" type="text/css" href="../style.css">
</head>
<body>
	<br><br>
    <center></center>
	<top_img src="cave.jpg" width="640" height="480" border="0"/>
	<br>
	<br>
	<font color="gold" size="+1"></font>
</body>
</html>
```

把图保存到本地，如果把这张图放大，就会发现像素块是间隔排列的

![](https://i.loli.net/2020/11/14/5qYKj2CQuB4MswU.png)


**💻Code**
于是就快乐的码代码啦！

```python
# 本来想直接用requests但是这个网站http://www.pythonchallenge.com/pc/return/cave.jpg需要输入账号和密码才能访问
# import requests
# import io
from PIL import Image
# 就暂时不知道如何处理，就把图片先直接保存到本地了
top_img = Image.open(r"assets/cave.jpg")
# 打印图片格式，大小，颜色模式
print(top_img.format, top_img.size, top_img.mode)
width, height = top_img.size
# ? 为什么宽度和高度要除以2呢？
odd_top_img = Image.new("RGB", (width // 2, height // 2), (255, 255, 255))
even_top_img = Image.new("RGB", (width // 2, height // 2), (255, 255, 255))
origin_top_img_1 = Image.new("RGB", (width // 2, height // 2))
origin_top_img_2 = Image.new("RGB", (width // 2, height // 2))
# print(top_img.getpixel((640, 480)))
# 对xy都为奇数，xy都为偶数和其他都打印
for x in range(width):
    for y in range(height):
        color = top_img.getpixel((x, y))
        if (x % 2 == 0) and (y % 2 == 0):
            # 然后再放入新像素里
            even_top_img.putpixel((x // 2, y // 2), value=color)
        elif (x % 2 == 1) and (y % 2 == 1):
            odd_top_img.putpixel((x // 2, y // 2), value=color)
        elif (x % 2 == 0) and (y % 2 == 1):
            origin_top_img_1.putpixel((x // 2, y // 2), value=color)
        else:
            origin_top_img_2.putpixel((x// 2, y // 2), value=color)

# 显示图片
odd_top_img.show()
even_top_img.show()
origin_top_img_1.show()
origin_top_img_2.show()
# 保存图片
odd_top_img.save('output\level_11_odd.png', 'png')
even_top_img.save('output\level_11_even.png', 'png')
origin_top_img_1.save('output\level_11_origin_1.png', 'png')
origin_top_img_2.save('output\level_11_origin_2.png', 'png')
```

得到的结果会发现odd和even是同一张图，而origin_1和origin_2也是同一张图，相当于是给的图片里放了4张图，两种图

![藏文字的图](https://i.loli.net/2020/11/15/hOt3bEveocDF9Sj.png)

![原图](https://i.loli.net/2020/11/14/2CImv51jyeGuRfM.png)

原理大概就是这样，用OneNote画的

![](https://i.loli.net/2020/11/14/KqNaCX1TykZWD7I.png)

所以根据这个原理，其实尝试自己也可以搞一张图，但是效果并不好

注意藏文字的图文字一定要暗（如果背景黑的话），主要自己是直接用python画的，没有渐变，所以有点生硬，只好把颜色调的很暗才不那么明显。

```python
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont

top_img = Image.open(r"assets/wallhaven-vg8mo8.jpg")
# print(w, h)

###** 自己也在图片上写一个文字**###
draw_top_img = Image.new('RGB', (480, 270))
draw = ImageDraw.Draw(draw_top_img)
#选择文字字体和大小
setFont = ImageFont.truetype('C:/windows/fonts/msyh.ttc', 100)
#设置文字颜色
fillColor = "#030800"
#写入文字
draw.text((18, 15), u'傻逼', font=setFont, fill=fillColor)
draw_top_img.show()
w, h = top_img.size
output_top_img = Image.new("RGB", (960, 540))
# 缩放大小
# top_img.thumbnail((320, 240)) 因为thumbnail会保持宽高比，实际大小为240*240
top_img = top_img.resize((480, 270), Image.ANTIALIAS)
top_img.show()
for x in range(960):
    for y in range(540):
        if (x % 2 == 0) and (y % 2 == 0):
            # 获取当前图片的像素
            color = draw_top_img.getpixel((x // 2, y // 2))
            # 然后再放入新像素里
        elif (x % 2 == 1) and (y % 2 == 1):
            color = draw_top_img.getpixel((x // 2, y // 2))
        else:
            color = top_img.getpixel((x // 2, y // 2))
        output_top_img.putpixel((x, y), value=color)
output_top_img.show()
output_top_img.save("output/try.png")
draw_top_img.save("output/draw.png")
```

![藏文字的图](https://i.loli.net/2020/11/14/toJBKS8TMUdWv6s.png)

![合成的图片](https://i.loli.net/2020/11/14/248rDqWKUiw3TJp.png)

所以点击进入下一关： http://www.pythonchallenge.com/pc/return/evil.html






## level_12_evil_2020.11.7

Link: http://www.pythonchallenge.com/pc/return/evil.html

![level_12_evil](https://i.loli.net/2020/11/14/bkphDU3lxgujKGN.png)

**🖊Learned**
data[i::5]每个五个取一个,得到的就是按顺序发的牌嘛!

**🔑Solution**

一开始看见这图片的像素有问题，试着用level11的方法处理的一下，果不其然——

这图是由4张一样图合并出来的，然而并没有什么用🤮

发现封面图片被命名为evil1，因为图片描述的是发牌，于是自然想到evil2，evil3，evil4
http://www.pythonchallenge.com/pc/return/evil2.jpg


![evil2，not jpg-_.gfx](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201227090034-2020-12-27.png)
![evil3，no more evils...](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201227090127-2020-12-27.png)

用edge打开http://www.pythonchallenge.com/pc/return/evil4.jpg
得到的只是一个小方格
![evil4](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201227090510-2020-12-27.png)
但是到了IE竟然就显示"Bert is evil! go back!" 这句话暂时不知道有什么用，留着！
![](https://i.loli.net/2020/11/14/PSUwEAVN2fmOZrH.png)

目前所以关键线索在evil2身上，点击http://www.pythonchallenge.com/pc/return/evil2.gfx
自动下载evil2.gfx文件，打开之后发现是二进制文件
根据封面图的牌被分成了五份，于是猜想也要将gfx文件分五份

**💻Code**
```python

import io
from PIL import Image

with open("assets/evil2.gfx", "rb") as gfx:
    data = gfx.read()
    # print(data) 二进制数据
for i in range(5):
    piece = data[i::5] # 为什么要每隔5个取一个呢？——dealing card 😶
    im = Image.open(io.BytesIO(piece))  # 为的是看图片 
    # im.show() #发现预览第四张图有问题？OSError: image file is truncated 说图像文件被截断
    with open("output/level_12_%d.%s" % (i, im.format.lower()), "wb") as w:
        w.write(piece) # 写入文件
```

最后得到四张图

<top_img src="https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/college-2020-12-27.jpg" height=500px>

所以答案就是disproportional啦
[点击进入下一关](http://www.pythonchallenge.com/pc/return/disproportional.html)



## level_13_XML-RPC_2020.11.8

Link: http://www.pythonchallenge.com/pc/return/disproportional.html

暂时决定虽然要坚持每天闯一关，但是就少废话了，花更多的时间记录python相关知识，学学pandas、matplotlib可能更理智点，没必要把解题过程详细码出来（反正基本都是参考别人的）

**🖊Learned**
**XML-RPC:**
XML-RPC（XML Remote Procedure Call，即XML远程方法调用），RPC是Remote Procedure Call的缩写，即远程方法调用，是一种在本地的机器上调用远端机器上的一个过程（方法）的技术，这个过程也被大家称为“分布式计算”，是为了提高各个分立机器的“互操作性”而发明出来的技术。

这种远程过程调用使用http作为传输协议，xml作为传送信息的编码格式。

**🔑Solution**
网页源代码，phone that <remote /> evil，提示拨打给远程的evil

```html
<html>
<head>
  <title>call him</title>
  <link rel="stylesheet" type="text/css" href="../style.css">
</head>
<body>
<center>
<top_img src="disprop.jpg" width="640" height="480" border="0" usemap="#evil" />
	<map name="evil">
		<area shape="circle" coords="326,177,45" href="../phonebook.php" />
	</map>
<font color="gold"/>
<br><b>
	phone that <remote /> evil
</br>
</html>

```

打开phonebook.php，得到一个xml但是报错了

```xml
<methodResponse>
<fault>
<value>
<struct>
<member>
<name>faultCode</name>
<value>
<int>105</int>
</value>
</member>
<member>
<name>faultString</name>
<value>
<string>XML error: Invalid document end at line 1, column 1</string>
</value>
</member>
</struct>
</value>
</fault>
</methodResponse>
```

**💻Code**
```python
import xmlrpc.client

url = "http://www.pythonchallenge.com/pc/phonebook.php"
conn = xmlrpc.client.ServerProxy(url)
print(conn.system.listMethods())
# ['phone', 'system.listMethods', 'system.methodHelp', 'system.methodSignature', 'system.multicall', 'system.getCapabilities']
# 看到方法中有phone
print(conn.system.methodHelp("phone"))# Returns the phone of a person
print(conn.system.methodSignature("phone"))  # [['string', 'string']]
print(conn.phone("Bert"))  # 还记得evil4.jpg的"Bert is evil! go back!"吗？
# 最终结果555-ITALY

```

点击进入下一关：  http://www.pythonchallenge.com/pc/return/italy.html


## level_14_italy_2020.11.9

![](https://pic4.zhtop_img.com/80/v2-f5f7c5f6878289bfd2e95d5ab99826bd.png)

**🖊Learned**
这一关主要靠算法
`directions = [(1,0),(0,1),(-1,0),(0,-1)]`这种方式真的巧妙
像这种绕圈的时候要把长度*2(l=100,d=200),这样通过step = d//2, d -= 1, 就可以得到螺线式走走法

**🔑Solution**
通过这图里的圈圈面包,猜测要把下面的wire.png也绕成一团

**💻Code**
```python
from PIL import Image
im = Image.open('assets/wire.png')
print(im.size)  # (10000, 1),是一个长条
hint_im = Image.new('RGB', (100, 100))
directions = [(1,0),(0,1),(-1,0),(0,-1)]
x, y, p = -1,0,0 # x从-1开始,这样第一个点为(0,0)
d = 200  # 步长设为200，是为了出现(100，99，99，98),(98,97,97,96)...的螺线性走法
while d > 0:
    # 跑一圈
    for v in directions:
        steps =d//2
        # 跑一条直线
        for s in range(steps):
            x,y =x+v[0],y+v[-1]
            hint_im.putpixel((x, y), im.getpixel((p, 0)))
            p += 1
        d -= 1
hint_im.show()
hint_im.save('output/level_14_hint.top_img')
```
得到猫图
![cat](https://pic4.zhtop_img.com/80/v2-33a36f418680e298e730f27701b0b200.png)

另外如果把d改为100的话，会得到一张蛮有意思的图
```python
from PIL import Image
im = Image.open('assets/wire.png')
print(im.size)  # (10000, 1)
hint_im = Image.new('RGB', (100, 100))
delta = [(1, 0), (0, 1), (-1, 0), (0, -1)]
x, y, p = -1, 0, 0
d = 100  # 如果直接设置为100，步长就成了100，99，98，97...
while d > 0:
    # 跑一圈
    for v in delta:
        steps = d
        # 跑一条直线
        for s in range(steps):
            x, y = x+v[0], y+v[-1]
            hint_im.putpixel((x, y), im.getpixel((p, 0)))
            p += 1
        d -= 1
hint_im.show()
```
![](https://pic4.zhtop_img.com/80/v2-0e9fa3f9c977e3ed693b4f080e58bf65.png)
于是点击：http://www.pythonchallenge.com/pc/return/cat.html
得到hint: and its name is uzi. you'll hear from him later.
再点击：http://www.pythonchallenge.com/pc/return/uzi.html
进入level 15

## level_15_datetime _2020.11.10

![](https://pic4.zhtop_img.com/80/v2-0f8c17a3b2936d56ed46e504409fb451.png)

**🖊Learned**
datetime 
`d = datetime.date(year, 1, 26)`创建一个日期对象
`d.isoweeklevel()` 返回今天是星期几,Monlevel==1,Sunlevel==7

calendar判断闰年
```python
# 判断闰年
print(calendar.isleap(1006))  # 结果为 False
print(calendar.isleap(1016))  # 结果为 True
```
**🔑Solution**

>Combinated with all hints,so we are looking for a person, who's related to that particular date, and he is not the youngest...
>The key is to find what year it was.

于是这一关就是要找到正确的日期,再通过日期来推测那个人是谁
日历上显示的是1__6年1月26日为星期一,再看图片下方显示二月有29天,所以这一年就还闰年,所以就可以通过遍历找到符合条件的年份

```python
import datetime
import calendar

# 判断闰年
print(calendar.isleap(1006))  # 结果为 False
print(calendar.isleap(1016))  # 结果为 True
# 所以从1016年开始每20年检查一次
for year in range(1016, 1996, 20):
    d = datetime.date(year, 1, 26)
    if d.isoweeklevel() == 1:  # return level of the week, where Monlevel==1,Sunlevel==7
        print(d.year)

#####output###
"""
1176
1356
1576
1756
1976
"""

# hint: <!-- he ain't the youngest, he is the second -->
# so we choose 1756
# hint: <!-- todo: buy flowers for tomorrow -->
# so we look at 1756-1-27

```

search the Internet,it turns out that level is the birthlevel of Morzart
![](https://pic4.zhtop_img.com/80/v2-ad0333fa1bed4567f48c101b475c72c8.png)

so click this [link](http://www.pythonchallenge.com/pc/return/mozart.html), to level 16


PS: I just found writing in Engslish is much more convinent for markdown


## level_16_ImageChops & numpy.roll_2020.11.11

Link : http://www.pythonchallenge.com/pc/return/mozart.html

今天双十一啦，可惜我啥也没买，继续刷题吧！
![](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201229213540-2020-12-29.png)

**🖊Learned**
今日所学
ImageChops 模块包含许多算术图像操作，称为通道操作（“chops”）。这些可以用于各种用途，包括特殊效果、图像合成、算法绘制等
- Image.histogram()返回图像的直方图。直方图作为像素计数列表返回，它的x轴是像素值，y轴是对应的像素在图像里的数量。
- PIL.ImageChops.offset(image, xoffset, yoffset=None),返回数据被给定距离偏移的图像的副本。数据环绕边缘。如果 yoffset 如果省略，则假定等于 X偏移.
- Image.paste(im,box)将一张图粘贴到另一张图像上。变量box或者是一个给定左上角的2元组，或者是定义了左，上，右和下像素坐标的4元组，或者为空（与（0，0）一样）。如果给定4元组，被粘贴的图像的尺寸必须与区域尺寸一样。

NumPy 是一个主要用于数组计算的数学库
- np.array(image),image类 转 numpy，一行一行的用数字代表各个像素
- tolist()将数组或者矩阵转换成列表
- list.index(),从列表中找出某个值第一个匹配项的索引位置。
- numpy.roll(a, shift, axis=None)沿着给定轴滚动数组元素。超出最后位置的元素将会滚动到第一个位置。
```python
a1 = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print(np.roll(a1, -2))  # [ 2  3  4  5  6  7  8  9 10  0  1]
```



**🔑Solution**
方法一：使用ImageChops.offset()对图像进行偏移
```python
from PIL import Image, ImageChops
import numpy as np
# NumPy 是一个主要用于数组计算的数学库
# ImageChops 模块包含许多算术图像操作，称为通道操作（“chops”）。这些可以用于各种用途，包括特殊效果、图像合成、算法绘制等

image = Image.open("assets/mozart.gif")
# 生成图像像素直方图，找到频数正好为image.height的整倍的，因为从图中可以看到pink每行都出现了
# 我们的任务就是把每行像素都移动，让pink组成一整块
frequency =[x for x in image.histogram() if x % image.height == 0 and x != 0]
print(frequency) # [2400]
print(image.histogram().index(2400)) # 返回频次为2400的x轴坐标195，即pink颜色

# 查看是不是这个颜色
tmp = image.copy()
tmp.frombytes(bytes([195] * (tmp.height * tmp.width)))
tmp.show()

# 对图片每行偏移
for y in range(image.size[1]):
    #(left, upper, right, lower)-tuple.
    box = 0, y, image.size[0], y + 1
    row = image.crop(box)
    bytes_data = row.tobytes()
    i = bytes_data.index(195)
    row = ImageChops.offset(row, -i) # offset 偏移量
    image.paste(row, box)

image.save("output/level_16_mozart.gif_1.gif")

```
![](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201229213738-2020-12-29.png)
方法二：使用numpy.roll对图片进行偏移
不知道为什么得到的是灰色的？？？

```python

image = Image.open("assets/mozart.gif")
print(image.mode)  # 模式“P”为8位彩色图像，它的每个像素用8个bit表示，其对应的彩色值是按照调色板查询出来的。
# roll th image
shifted = [bytes(np.roll(row, -row.tolist().index(195)).tolist()) for row in np.array(image)]
# print(shifted)
# 根据二进制数据创建图像
Image.frombytes("P", image.size, b"".join(shifted)).save("output/level_16_mozart.gif_2") # romance

```
![](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201229213813-2020-12-29.png)


click to next level: http://www.pythonchallenge.com/pc/return/romance.html



## level_17_cookie & urllib.parse_2020.11.12

这一关基本是爬虫+复习关了，好难，直接copy代码了🤢
参考资料：
- [Python Challenge[17]-Recgat简书](https://www.jianshu.com/p/ea3ae84022e5)
- [Python Challenge (Level 17)曾梦想仗剑走天涯](http://kwangka.github.io/2015/01/31/pc17/)
- [hackingnote](https://www.hackingnote.com/en/python-challenge-solutions/level-17)

![](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201229214859-2020-12-29.png)
**🖊Learned**
cookie和获取cookie
[Cookie 是什么](https://zhuanlan.zhihu.com/p/22396872)
[如何查看cookies](https://blog.csdn.net/MuWinter/article/details/75313476)

Cookie 是浏览器访问服务器后，服务器传给浏览器的一段数据。浏览器需要保存这段数据，不得轻易删除。
第一个作用是识别用户身份。
第二个作用是记录历史。
**如何获取cookie**

- 使用httplib2库，cookie信息包含在httplib2.Http().request()返回的Response实例中。
```python
import httplib2,re
h = httplib2.Http('.Cache')
url, num = 'http://www.pythonchallenge.com/pc/def/linkedlist.php?busynothing=', '12345'
pattern = re.compile('info=(.*)')
info = ''
while num.isdigit():
  resp,content=h.request(url+num)
  info += pattern.search(resp['set-cookie'].split(';')[0]).groups()[0]
  num = content.decode('utf-8').split(' ')[-1]
print(info)
```
- 使用urllib库获取cookie信息
```python
import urllib.request
h = urllib.request.urlopen(url)
cookie = h.getheader('Set-Cookie')
```

**设置cookie**
Request：模拟浏览器发送GET请求（GET-从指定的资源请求数据。），就需要使用Request对象，通过往Request对象添加HTTP头，我们就可以把请求伪装成浏览器
```python
from urllib.request import Request, urlopen
from urllib.parse import quote_plus
req = Request(url, headers = { "Cookie": "info=" + quote_plus(msg)})
print(urlopen(req).read().decode())
```

**urllib.parse**

parse是解析的意思，urllib.parse提供了一些辅助方法，用于对url进行编码、解码。url中是不能出现一些特殊的符号的，有些符号有特殊的用途。我们知道以get方式提交数据的时候，会在url中添加key=value这样的字符串，所以在value中是不允许有’=’，因此要对其进行编码；与此同时服务器接收到这些参数的时候，要进行解码，还原成原始的数据。
quote_plus：这个方法是将一些特殊的字符串转换为固定的一些符号字母数字组合
```python
from urllib import parse
d = parse.quote('a&b/c')  #未编码斜线
print(d)
# a%26b/c
d1 = parse.quote_plus('a&b/c')  #编码了斜线
print(d1)
# a%26b%2Fc
```
unquote/unquote_plus
```python
from urllib import parse
>>> parse.unquote('1+2')  #不解码加号
'1+2'
>>> parse.unquote_plus('1+2')  #把加号解码为空格
'1 2'
```
urlencode，将一些传入的元素使用&串联起来，效果如下：
```python
>>>params = {
            "appid": 1,
            "mch_id": 1,
            "body": 1,
            "out_trade_no": 1,
            "total_fee": 1,
            "spbill_create_ip": 1,
            "notify_url": 1,
            "trade_type": 1,
            "nonce_str": 1
        }
>>>parse.urlencode(params)
'appid=1&mch_id=1&body=1&out_trade_no=1&total_fee=1&spbill_create_ip=1&notify_url=1&trade_type=1&nonce_str=1'
```
经urllib.parse.unquote_to_bytes(string)方法转换返回的对象可以正常解压，该方法功能是将%xx转义替换为其等效的single-octet字符（unquote_plus()和unquote()是单个字符），以字节对象返回。不像unquote_plus()能将+转为空格，unquote_to_bytes()需要手动替换。


**🔑Solution**
refer to level 4 http://www.pythonchallenge.com/pc/def/linkedlist.php

```python
from urllib.request import urlopen
from urllib.parse import unquote_plus,unquote_to_bytes
import re, bz2

def geth(url):
    i=0
    while i<3:
        try:
            h =urlopen(url,timeout=3)
            return h
        except Exception as e:
            i +=1

num = '12345'
info = ''
while(True):
    h = geth('http://www.pythonchallenge.com/pc/def/linkedlist.php?busynothing='+num)
    raw = h.read().decode("utf-8")
    print(raw)
    cookie =h.getheader("Set-Cookie")
    # print(cookie)
    info += re.search('info=(.*?);',cookie).group(1)
    match = re.search('the next busynothing is (\d+)',raw)
    if match ==None:
        break
    else:
        num =match.group(1)
# print(info)
"""
BZh91AY%26SY%94%3A%E2I%00%00%21%19%80P%81
%11%00%AFg%9E%A0+%00hE%3DM%B5%23%D0%D4%D1
%E2%8D%06%A9%FA%26S%D4%D3%21%A1%EAi7h%9B%
9A%2B%BF%60%22%C5WX%E1%ADL%80%E8V%3C%C6%A
8%DBH%2632%18%A8x%01%08%21%8DS%0B%C8%AF%9
6KO%CA2%B0%F1%BD%1Du%A0%86%05%92s%B0%92%C
4Bc%F1w%24S%85%09%09C%AE%24%90
"""
res = unquote_to_bytes(info.replace("+","%20")) # 暂时不知道为什么要把加变成空格，不过info确实有一个+啦
print(res)
print(bz2.decompress(res).decode('utf-8'))
# is it the 26th already? call his father and inform him that "the flowers are on their way". he'll understand.
# 提示找Mozart父亲Leopold"

```

提示到第13关，继续打电话
```python
# refer to level 13
from xmlrpc.client import ServerProxy

conn = ServerProxy("http://www.pythonchallenge.com/pc/phonebook.php")
print(conn.phone("Leopold"))
# output 555-VIOLIN
# http://www.pythonchallenge.com/pc/return/violin.html
# no! i mean yes! but ../stuff/violin.php.

```

点开[violin.php](http://www.pythonchallenge.com/pc/stuff/violin.php)，根据前面的提示，告诉他爹"the flowers are on their way"

```python
from urllib.request import Request,urlopen
from urllib.parse import quote_plus

#is it the 26th already?
# call his father and inform him that "the flowers are on their way". he'll understand.
url = "http://www.pythonchallenge.com/pc/stuff/violin.php"
msg = "the flowers are on their way"
req = Request(url, headers={"Cookie": "info=" + quote_plus(msg)})
print(urlopen(req).read().decode())
```

**output**

```html
<html>
<head>
  <title>it's me. what do you want?</title>
  <link rel="stylesheet" type="text/css" href="../style.css">
</head>
<body>
        <br><br>
        <center><font color="gold">
        <top_img src="leopold.jpg" border="0"/>
<br><br>
oh well, don't you dare to forget the balloons.</font>
</body>
</html>
```

## level_18_ballons_2020.11.13

Link: http://www.pythonchallenge.com/pc/return/balloons.html

![](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201229215541-2020-12-29.png)

**🖊Learned**
1.区分两个数据的异同difflib.Differ().compare(a, b)
`difflib.Differ().compare(a, b)` will generate
lines start with +: appear in a not in b
lines start with -: appear in b not in a
others: appear in both

2.bytes()&int(str,16)
16进制形式的字符如何转成字节码，用bytes()
首先要先用int(str,16)将字符列表转化为10进制的数字列表，才能用bytes()

3.list [:53]
忘了，列表切片是左开右闭了……😳
```python
bytes([74, 158, 198, 5, 10, 185, 141, 219, 243, 80, 141, 74, 100, 112, 154, 121, 49, 149])
# → b'J\x9e\xc6\x05\n\xb9\x8d\xdb\xf3P\x8dJdp\x9ay1\x95'
```

**🔑Solution**
go to http://www.pythonchallenge.com/pc/return/bright.html , then show 
> ness
so go to http://www.pythonchallenge.com/pc/return/brightness.html
> maybe consider deltas.gz 

下载delta.gz,打开delta.txt，明显看到两栏很相似的信息，前面提示这一关要tell the difference，对于这两栏的信息，我们要用到difflib来比较它们，然后将得到的信息decode，输出为三张图片

![](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201229215755-2020-12-29.png)


**💻Code**

```python

import gzip
import difflib

data = gzip.open("assets/deltas.gz")
d1, d2 = [], []
for line in data:
    d1.append(line[:53].decode()+'\n')  # 选择53是列表左开右闭，记得每一行需要手动加\n
    d2.append(line[56:].decode())  # 因为后面自带\n

compare = difflib.Differ().compare(d1, d2)

f = open("output/level_18_f.png", "wb")
f1 = open("output/level_18_f1.png", "wb")
f2 = open("output/level_18_f2.png", "wb")
for line in compare:
    # print(line)
    # print([int(hex, 16) for hex in line[2:].strip().split(" ") if hex])
    bs = bytes([int(hex, 16) for hex in line[2:].strip().split(" ") if hex])
    print(bs)
    # appear in d1 not in d2
    if line[0] == '+':
        f1.write(bs)
    # appear in d2 not in d1
    elif line[0] == '-':
        f2.write(bs)
    # appear in both
    else:
        f.write(bs)

f.close()
f1.close()
f2.close()

```

![f](https://pic4.zhtop_img.com/80/v2-52ca5bb9b74c6c1a7d80ee1d58d94be0.png)


![f1](https://pic4.zhtop_img.com/80/v2-4df5f46e8ff0e6af8a5f8b355c32574f.png)


![f2](https://pic4.zhtop_img.com/80/v2-b2d6a66e7468e84f9e2fc1c7ce145539.png)

so next level: http://www.pythonchallenge.com/pc/hex/bin.html

## level_19_bin_2020.11.14

Link: http://www.pythonchallenge.com/pc/hex/bin.html
username: butter
password: fly

**🖊Learned**
[音频属性相关：声道、采样率、采样位数、样本格式、比特率](https://www.cnblogs.com/yongdaimi/p/10722355.html)

>WAV有三个重要的参数：声道数、取样频率和量化位数。
>声道数：可以是单声道或者是双声道
>采样频率：一秒内对声音信号的采集次数，常用的有8kHz, 16kHz, 32kHz, 48kHz, 11.025kHz, 22.05kHz, 44.1kHz
>量化位数：用多少bit表达一次采样所采集的数据，通常有8bit、16bit、24bit和32bit等几种
>Wave_read.getnchannels()
>返回声道数量（1 为单声道，2 为立体声）
>
>Wave_read.getsampwidth()
>返回采样字节长度。
>
>Wave_read.getframerate()
>返回采样频率。
>
>Wave_read.getnframes()
>返回音频总帧数。
>Wave_read.readframes(n)
>读取并返回以 bytes 对象表示的最多 n 帧音频。

**💻Code**
```python
import base64
import wave

# 将view-source:http://www.pythonchallenge.com/pc/hex/bin.html的base64编码复制为文本处理
message = open("assets/level_19.txt", "rb").read()
open('output/level_19_indian.wav', 'wb').write(base64.decodebytes(message))
```

得到的wav打开之后听到sorry……
打开http://www.pythonchallenge.com/pc/hex/sorry.html
得到- "what are you apologizing for?"
回头看网页显示的地图，陆地的颜色明显和海洋的颜色颠倒了，提示将音频的帧颠倒
```python

w = wave.open('output/level_19_indian.wav', "rb")
h = wave.open('output/level_19_result.wav', "wb")
print(w.getnchannels())
print(w.getsampwidth())
print(w.getframerate())
h.setnchannels(w.getnchannels())
h.setsampwidth(w.getsampwidth()//2)
h.setframerate(w.getframerate()*2)
frames = w.readframes(w.getnframes())
# big_endiana 字节序，低地址端 存放 高位字节。
wave.big_endiana = 1
h.writeframes(frames)
# for i in range(w.getnframes()):
#     h.writeframes(w.readframes(1)[::-1])

h.close()
```
听出You are a idiot
打开 http://www.pythonchallenge.com/pc/hex/idiot.html
"Now you should apologize..."
http://www.pythonchallenge.com/pc/hex/idiot2.html


## level_20_idiot2_2020.11.15

开始用Jupyter跑python代码了，感觉飞起呀！！！！

又是看不懂的一关，直接copy网上的代码吧……


```python
import urllib.request, base64,re

request = urllib.request.Request('http://www.pythonchallenge.com/pc/hex/unreal.jpg')
cred = base64.b64encode(b"butter:fly")
request.add_header("Authorization", "Basic %s" % cred.decode())
print(request.headers)
# {'Authorization': 'Basic YnV0dGVyOmZseQ=='}

response = urllib.request.urlopen(request)
print(response.headers)
```

    {'Authorization': 'Basic YnV0dGVyOmZseQ=='}
    Content-Type: image/jpeg
    Content-Range: bytes 0-30202/2123456789
    Connection: close
    Transfer-Encoding: chunked
    Date: Sun, 15 Nov 2020 05:52:24 GMT
    Server: lighttpd/1.4.35


```python
pattern = re.compile('bytes (\d+)-(\d+)/(\d+)')
content_range = response.headers['content-range']
(start, end, length) = pattern.search(content_range).groups()
request.headers['Range'] = 'bytes=%i-' % (int(end) + 1)
response = urllib.request.urlopen(request)
print(response.headers)

print(response.read().decode())
```

    Content-Type: application/octet-stream
    Content-Transfer-Encoding: binary
    Content-Range: bytes 30237-30283/2123456789
    Connection: close
    Transfer-Encoding: chunked
    Date: Sun, 15 Nov 2020 05:52:40 GMT
    Server: lighttpd/1.4.35


    we can go on in this way for really long time.

So now the content between 30203 and 30236 is served, which is "Why don't you respect my privacy?"; continue for a few iterations:


```python
pattern = re.compile('bytes (\d+)-(\d+)/(\d+)')
content_range = response.headers['content-range']
(start, end, length) = pattern.search(content_range).groups()

while True:
    try:
        request.headers['Range'] = 'bytes=%i-' % (int(end) + 1)
        response = urllib.request.urlopen(request)
        print(response.read().decode())
        print(response.headers)
        (start, end, length) = pattern.search(response.headers['content-range']).groups()
    except:
        break
```


    stop this!
    
    Content-Type: application/octet-stream
    Content-Transfer-Encoding: binary
    Content-Range: bytes 30284-30294/2123456789
    Connection: close
    Transfer-Encoding: chunked
    Date: Sun, 15 Nov 2020 05:53:12 GMT
    Server: lighttpd/1.4.35


    invader! invader!
    
    Content-Type: application/octet-stream
    Content-Transfer-Encoding: binary
    Content-Range: bytes 30295-30312/2123456789
    Connection: close
    Transfer-Encoding: chunked
    Date: Sun, 15 Nov 2020 05:53:13 GMT
    Server: lighttpd/1.4.35
    
    ok, invader. you are inside now. 
    
    Content-Type: application/octet-stream
    Content-Transfer-Encoding: binary
    Content-Range: bytes 30313-30346/2123456789
    Connection: close
    Transfer-Encoding: chunked
    Date: Sun, 15 Nov 2020 05:53:13 GMT
    Server: lighttpd/1.4.35



The last request ends at 30346.

> Why don't you respect my privacy?
>we can go on in this way for really long time.
>stop this!
>invader! invader!
>ok, invader. you are inside now.


```python
request.headers['Range'] = 'bytes=%i-' % (int(length) + 1)
response = urllib.request.urlopen(request)
print(response.headers)
print(response.read().decode())
```

    Content-Type: application/octet-stream
    Content-Transfer-Encoding: binary
    Content-Range: bytes 2123456744-2123456788/2123456789
    Connection: close
    Transfer-Encoding: chunked
    Date: Sun, 15 Nov 2020 05:54:13 GMT
    Server: lighttpd/1.4.35



    esrever ni emankcin wen ruoy si drowssap eht


​    

The content is reversed: "the password is your new nickname in reverse". The "nickname" is "invader", so password is "redavni". Now "reverse" the search:


```python
request.headers['Range'] = 'bytes=2123456743-'
response = urllib.request.urlopen(request)
print(response.headers)
print(response.read().decode())
```

    Content-Type: application/octet-stream
    Content-Transfer-Encoding: binary
    Content-Range: bytes 2123456712-2123456743/2123456789
    Connection: close
    Transfer-Encoding: chunked
    Date: Sun, 15 Nov 2020 05:54:52 GMT
    Server: lighttpd/1.4.35


    and it is hiding at 1152983631.

```python
request.headers['Range'] = 'bytes=1152983631-'
response = urllib.request.urlopen(request)

with open("output/level_21.zip", "wb") as f:
    f.write(response.read())
```

Yes! This is really level 21 in here. 
And yes, After you solve it, you'll be in level 22!

Now for the level:

* We used to play this game when we were kids
* When I had no idea what to do, I looked backwards.


## level_21_2020.11.17

>啊啊啊啊，昨天忙着做分子生物学作业和整hexo的域名，后来24：00电脑准时没电关机啦，只好厚脸皮今天补啦！

>Yes! This is really level 21 in here. And yes, After you solve >it, you’ll be in level 22!
>Now for the level:
>We used to play this game when we were kids
>When I had no idea what to do, I looked backwards.


这一关主要过程是对package.pack文件不断进行解压。根据上一次解压得到的结果，判断下一次解压用zlib还是bz2，以及判断得到的数据是正向的还是要reverse.
考察多种编码格式的运用，观察“package.pack”中的数据，发现是以b"x\x9c"开头的，这是zlib算法压缩的数据，使用zlib模块解码。重复几次，发现有以b"BZ"开头的，这是bz2压缩的数据，使用bz2模块解码。又重复几次，发现有以b"\x80\x8d"开头的，看看第2条提示，发现字节流是以b"\x9cx"结尾的，反转整个字节流。最终得到一句话“look at your logs”。

```python
import zlib
import bz2

result = ""
with open("output/package.pack", "rb") as f:
    data = f.read()

    while True:
        #x\x9c是zlib压缩的开头
        if data.startswith(b'x\x9c'):
            data = zlib.decompress(data)
            result += ' '
        # BZHbzip2 压缩编码
        elif data.startswith(b'BZh'):
            data = bz2.decompress(data)
            result += '#'
        # When I had no idea what to do, I looked backwards.
        elif data.endswith(b'\x9cx'):
            data = data[::-1]
            result += '\n'
        else:
            break
    print(data)
# b'sgol ruoy ta kool'
### reverse
#look at your logs
##
#?? 没有 logs 啊，记录变化？这里有变化的就是压缩方法,就把这三种方法编号一下
    print(result)
```

```
      ###          ###      ########    ########    ##########  ########  
    #######      #######    #########   #########   #########   ######### 
   ##     ##    ##     ##   ##      ##  ##      ##  ##          ##      ##
  ##           ##       ##  ##      ##  ##      ##  ##          ##      ##
  ##           ##       ##  #########   #########   ########    ######### 
  ##           ##       ##  ########    ########    ########    ########  
  ##           ##       ##  ##          ##          ##          ##   ##   
   ##     ##    ##     ##   ##          ##          ##          ##    ##  
    #######      #######    ##          ##          #########   ##     ## 
      ###          ###      ##          ##          ##########  ##      ##
```


## level_22_2020.11.17

http://www.pythonchallenge.com/pc/hex/copper.html


![](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201229220700-2020-12-29.png)
**🔑Solution**

查看源代码提示下载文件“white.gif”http://www.pythonchallenge.com/pc/hex/white.gif

发现每一帧都是黑的，但每一帧都有一个像素点不是纯黑的 RGB != (0,0,0)，且该像素都在中心点(100,100)附近，再由游戏摇杆得到启发。举例来说，详见下表


帧  | 非黑点位置 | 实际位置
------- | ------- | -------
1 | (100,100) | (100,100) 归零
2 | ( 98,102) | ( 98,102)
3 | ( 98,100) | ( 96,102)
4 | (100,102) | ( 96,104)
5 | (100,100) | (100,100) 归零


把两次归零操作之间，每一帧的实际位置都画出来，就能得到一幅图案。最终发现一共有5幅图案，按顺序绘制出来，发现是一个单词“bonus”。

- gif. n_frame返回所有关键帧
- gif.seek()在给定的文件序列中查找指定的帧。如果查找超越了序列的末尾，则产生一个EOFError异常。当文件序列被打开时，PIL库自动指定到第0帧上。
- gif.tell()返回当前帧

**💻Code**

```python
from PIL import Image, ImageDraw

gif = Image.open("assets/white.gif")
new = Image.new('RGB', (500, 500)) # 默认背景为黑
draw = ImageDraw.Draw(new)
cx, cy = 0, 100 # 画点的起始位置
for frame in range(gif.n_frames):
    gif.seek(frame)
    left, upper, right, lower = gif.getbbox()
    # 得到与100,100的相对位置
    dx = left - 100
    dy = upper - 100
    # 一个图案画完了,移远一点,继续画
    if dx == dy == 0:
        cx += 50
        cy = 100
    cx += dx
    cy += dy
    draw.point([cx, cy])
new.show()
```
## level_23_2020.12.15

> 额，之前为了考试周，于是拖了好久，然后就一直捡不起来了哇！剧刷腻了，b站搞笑视频也觉得不好玩了，就又回来写python了
> 希望之后可以一直坚持下去哇！！！！

解题Solution：源代码里的'va gur snpr bs jung?'明显也是解码，title为”what is this module?“，结合后面的”it can't find it. this is an undocumented module”，猜测为this模块（就是大名鼎鼎的The Zen of Python啦）！
方法1：可以尝试用ocr那题（level_1）的代码试试，依次检验26个偏移量能否得到一个有含义的句子

```python
def ocr():
    text = 'va gur snpr bs jung?'
    for offset in range(26):
        trans = str.maketrans(string.ascii_lowercase,string.ascii_lowercase[offset:] + string.ascii_lowercase[:offset])
        new_text = text.translate(trans)
        print(new_text)

if __name__ == "__main__":
    ocr()
```
发现偏移量为13时，字符可解码为in the face of what?
```
0 → va gur snpr bs jung?
1 → wb hvs toqs ct kvoh?
2 → xc iwt uprt du lwpi?
3 → yd jxu vqsu ev mxqj?
4 → ze kyv wrtv fw nyrk?
5 → af lzw xsuw gx ozsl?
6 → bg max ytvx hy patm?
7 → ch nby zuwy iz qbun?
8 → di ocz avxz ja rcvo?
9 → ej pda bwya kb sdwp?
10 → fk qeb cxzb lc texq?
11 → gl rfc dyac md ufyr?
12 → hm sgd ezbd ne vgzs?
`13 → in the face of what?`
14 → jo uif gbdf pg xibu?
15 → kp vjg hceg qh yjcv?
16 → lq wkh idfh ri zkdw?
17 → mr xli jegi sj alex?
18 → ns ymj kfhj tk bmfy?
19 → ot znk lgik ul cngz?
20 → pu aol mhjl vm doha?
21 → qv bpm nikm wn epib?
22 → rw cqn ojln xo fqjc?
23 → sx dro pkmo yp grkd?
24 → ty esp qlnp zq hsle?
25 → uz ftq rmoq ar itmf?
```
import this,里面有一句“In the face of ambiguity”，所以答案就是ambiguity，http://www.pythonchallenge.com/pc/hex/ambiguity.html
```
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
Gur Mra bs Clguba, ol Gvz Crgref
```

Solution2：
如果尝试输入`print(this.s)`,你会发现得到的是The Zen of python的加密版本，输入`print(this.d)`,得到的解密本字典,所以推理得到给的那个字符串也是这样加密的
方法2:
简单粗暴
```python
text = 'va gur snpr bs jung?'
print("".join([this.d.get(c,c) for c in text])) #in the face of what?
```
> 老实说,隔了这么久,不知道再继续玩python challenge还有没有必要哈,但是我好像确实没什么其他想到能做的事了(咸鱼一只),所以就脚踏实地吧,总要坚持一件事,我也相信前方或许会有意想不到的收获.不知道为什么,进入大三之后,整个人变得浮躁不堪,静不下心去踏实学东西,我觉得这样很糟!

## level_24_maze_2020.12.16

![maze](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/maze-2020-12-18.png)]
发现Vscode真的适合把图片放大到像素级
![图片放大](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201218190652-2020-12-18.png)
**🔑Solution**
  这一关真的好有趣呀，就是得先找到迷宫的entrance和exit，然后就需要使用数据结构的知识来走迷宫啦，我用的是栈深度搜索，队列就是广度搜索了吧，收集走迷宫的路径每个像素位置以及点的R通道值，然后转化为二进制数据，发现开头是PK，提示为压缩包，所以就将数据生成为压缩包，解压即得到下一关提示。
**🖊Learned**
- 二进制开头b'PK'为压缩包
- `ImageDraw.Draw`模块
- 栈和队列复习

```python
from PIL import Image
from PIL import ImageDraw
maze = Image.open("assets/maze.png")
directions =[(0,1),(0,-1),(1,0),(-1,0)] # 方向
white = (255,255,255,255)
w,h = maze.size

next_map = {}
# 通过for i in range(w): print(maze.getpixel((i, 0)))可知入口的黑色像素位置
entrance = (w - 2, 0)
# 通过 for i in range(w): print(maze.getpixel((i, h - 1)))可知出口位置
exit = (1, h - 1) 
# stack代表的用栈来存储可能的路口
stack = [exit]
while stack:
    pos = stack.pop() # 当前位置
    if pos == entrance:
        break
    for d in directions:
        tmp = (pos[0] + d[0], pos[1] + d[1]) #tmp代表的是可能的下一个位置
        if not tmp in next_map and 0 <= tmp[0] < w and 0 <= tmp[1] < h and maze.getpixel(tmp) != white:
            next_map[tmp] = pos  # next_map放的是下一个位置←该位置的字典，但该程序会记录错误的路线而不会删除，虽然不影响回溯
            stack.append(tmp) # 会把所有可能的路口都入栈

path = []
top_img = Image.new('RGBA', (641, 641), (255,255,255,255))
draw = ImageDraw.Draw(top_img)
while pos != exit: # pos 将从起点开始回溯
    path.append(maze.getpixel(pos)[0]) # 只输出第一个RGB值
    draw.point(pos,maze.getpixel(pos))
    pos = next_map[pos]

top_img.show()
top_img.save('output/level_24_path.png')
# print(path)
# print(path[1::2])
# print(bytes(path[1::2]))
# open('output/level_24_maze.zip','wb').write(bytes(path))
open('output/level_24_maze.zip','wb').write(bytes(path[1::2])) # path[1::2]的原因只是因为R通道即红点都是至少都是间隔分布的

```

![level_24_path](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/level_24_path-2020-12-18.png)
![放大图片](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201218190741-2020-12-18.png)

## level_25_wave拼图_2020.12.17

Link: http://www.pythonchallenge.com/pc/hex/lake.html
![关卡图](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201218184825-2020-12-18.png)

**Solution：**
看到图片名是“lake1.jpg”，根据提示尝试获取“lake1.wav”，文件存在，猜测应该还有“lake2.wav”，“lake3.wav”，……于是构造一个网络爬虫
以音频方式打开文件，发现都是杂音，根据图片中拼图的提示，将每个音频转化一共图片，25个正好对应了关卡图中5*5拼图，然后把25个图片拼在一起，就得到结果啦
**Learned：**
- python创建文件不会自动创建文件夹吗
  - 是的，如果路径不存在，必须手动先创建，可以使用os.makedirs(path) https://blog.csdn.net/Homewm/article/details/80766894
- HTTPPasswordMgrWithDefaultRealm()类将创建一个密码管理对象，用来保存 HTTP 请求相关的用户名和密码，主要应用两个场景：
  - 验证代理授权的用户名和密码 (ProxyBasicAuthHandler())
  - 验证Web客户端的的用户名和密码 (HTTPBasicAuthHandler())
  - https://blog.csdn.net/weicao1990/article/details/80066655
- `Image.frombytes`从二进制中创建，im.paste()粘贴图片上去
**💻Code**
```python
from urllib import request, error
import wave
from PIL import Image
import os

print(f"\033[31mLevel 25\033[0m")  # 原来可以打印红色字欸


def mkdir(path):
    # 创建文件夹函数
    folder = os.path.exists(path)
    if not folder:
        os.makedirs(path)
        print(f"---new folder {path}---")


# 爬虫部分
# 1. 构建一个密码管理对象，用来保存需要处理的用户名和密码
password_mgr = request.HTTPPasswordMgrWithDefaultRealm()
# 2. 添加账户信息，第一个参数realm是与远程服务器相关的域信息，一般没人管它都是写None，后面三个参数分别是 代理服务器、用户名、密码
password_mgr.add_password(
    None, "http://www.pythonchallenge.com/", "butter", "fly")
# 3. 构建一个HTTP基础用户名/密码验证的HTTPBasicAuthHandler处理器对象，参数是创建的密码管理对象
handler = request.HTTPBasicAuthHandler(password_mgr) # passowrd_mgr→handler，HTTPBasicAuthHandler基本的HTTP验证处理

# 4. 通过 build_opener()方法使用这些代理Handler对象，创建自定义opener对象，
opener = request.build_opener(handler) # handler→opener
mkdir("output/level_25")
for i in range(1, 26):
    print(f"Processing {i:2d}...", end='\t')
    url = f"http://www.pythonchallenge.com/pc/hex/lake{i}.wav"
    try:
        response = opener.open(url)
    except error.HTTPError:
        print("HTTP ERROR 404")
    else:
        with open(f"output/level_25/lake{i}.wav", "wb") as file: # 'wb'写入二进制文件
            data = response.read()
            file.write(data)
            print("Successfully Saved.")
    # 一共25个wav文件

#创建图片 →把25个wav转成5*5的拼图块→合并图片
im = Image.new("RGB", (300, 300)) 
for i in range(1, 26):
    # wave.open()返回Wave_write对象
    with wave.open(f"output/level_25/lake{i}.wav", "rb") as file:
        # getnframes()返回音频帧数
        # readframes(n)最多读取并返回n帧音频，作为字节对象。
        # file.readframes(file.getnframes())就是先读取一共几帧，然后把所有帧都输出成二进制
        data = file.readframes(file.getnframes())
        block_im = Image.frombytes("RGB", (60, 60), data)
        x, y = (i - 1) % 5 * 60, (i - 1) // 5 * 60 # 超过5个就换下一行
        im.paste(block_im, (x, y))
im.save("output/level_25/result.jpg")
```

## level_26_md5_2020.12.18

Link: http://www.pythonchallenge.com/pc/hex/decent.html


**Solution：**
源码说已经得到邮箱了（我咋不知道），原来早在第19关网页的源代码就给了个邮箱，leopold.moz@pythonchallenge.com，然后发送，标题为Apologize，内容为Sorry的邮件，你就可以得到以下回复:

> Never mind that.
> 
> Have you found my broken zip?
> 
> md5: bbb8b499a0eef99b52c7f13f4e78c24b
> 
> Can you believe what one mistake can lead to?

意思就是说之前我们maze那关得到的压缩包不是除了图片还有一共压缩包吗？如果解压的话就会提示校验值错误，这个回复就是说压缩包的二进制数据有一个错误，要让咱一个个尝试，把它改对，用md5来校验文件是否修复好。（然而之前我用bzip不修复照样也解压出来了……有点尴尬,,ԾㅂԾ,,）
最后得到的图片显示"speed",然后再结合Hurry up, I'm missing the boat,下一关网址就是"speedboat"

**Learned：**
- 原来python终端可以打印出颜色呀，Learned了
  - Python基础之控制台输出颜色 https://blog.csdn.net/qq_33567641/article/details/82769523
- 切片是左闭右开，我又忘了
- 对二进制的操作还是似懂非懂哇，有空专门学习下！

**Code：**
```python
import hashlib

def repair(data):
    for pos in range(len(data)):
        if pos == 4:
            break
        print(f"Trying repairing the position {pos} ...")
        print(data[:pos])
        for j in range(256): # try 0-255
            newData = data[:pos] + bytes([j]) + data[pos+1:] # 替换pos那个位置的值
            if hashlib.md5(newData).hexdigest() == md5code:
                open('output/level_26_repaired.zip','wb').write(newData)
                print(f"\033[1;31m Zip have been repaired！\033[0m")
                return


md5code = "bbb8b499a0eef99b52c7f13f4e78c24b"
data = open('assets/mybroken.zip','rb').read()
repair(data)

```

## level_27_between the tables_2020.12.19

Link: http://www.pythonchallenge.com/pc/hex/speedboat.html

**🔑Solution**
点击图片就能直接进入下一关，然而不知账号密码。
这一关涉及到图像色板、映射、常见但依旧不了解的二进制数据处理还有keyword模块
也没啥Solution了，毕竟是copy别人的代码嘛！

**🖊Learned**
- im.getpalette()以列表形式返回图像调色板，putpalette给对象加上调色板，相当于上色,然而暂时不懂调色板是什么东东
- im.tobytes()，把图片转化为二进制
- `maketrans(A,B)`和`newData = data.translate()`明明很早接触了，然而还是不熟悉
- filter和lambda的用法`diff = list(filter(lambda p: p[0] != p[1], zipped))`
- index的复数形式是indices（滑稽）

**💻Code**

建立二进制索引和色板, 映射到图片字节流数据
什么，你问我为什么要这样做？不知道……，毕竟这一关的标题就是between the tables，毕竟别人是这样解题的。
```python
import keyword
from PIL import Image
import bz2

im = Image.open('assets/zigzag.gif')
# im.getpalette()以列表形式返回图像调色板，getpalette（）获取图片对应的调色板；putpalette给对象加上调色板，相当于上色
# [37, 229, 162, 136, 59, 212, 9, 41, 24, 156, 148, 112, 254, 91,..]
palette = im.getpalette()[::3]
# print(palette)
len(palette) #256

# 建立二进制索引和色板, 映射到图片字节流数据
table = bytes.maketrans(bytes([i for i in range(256)]),bytes(palette))
raw = im.tobytes()
trans = raw.translate(table)
```

比较raw和trans数据，发现除去raw的第一个和tran的最后一个，大致数据差不多
```python
 print(raw)
 print（trans)
```
所以下一步就是把不一样的数据过滤出来
```python
zipped = list(zip(raw[1:],trans[:-1]))
diff = list(filter(lambda p: p[0]!=p[1], zipped)) # 这里用来匿名函数+filter过滤
indices = [i for i, p in enumerate(zipped) if p[0] != p[1]] # indices是index的复数形式
```
处理diff数据，转化为text
```python
s=[t[0] for t in diff] # t[1]即trans的数据则没有提示
print(bytes(s)) # 熟悉的bz开头
text = bz2.decompress(bytes(s)) #解码成文本
print(text) #发现是有一堆python关键字
```
新建一个白底的图像，利用之前数据不一样的索引，把该位置都改为黑色
```python
im2 = Image.new('RGB', im.size)
colors = [(255, 255, 255)]*len(raw)
for i in indices:
    colors[i] = (0, 0, 0)
im2.putdata(colors)
```
竟然能得到一张图，提示not keyword，就是说我们要把text里不是keyword的词给提取出来
![not keyword的提示](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201219151302-2020-12-19.png)

```python
import keyword
print(set([w for w in text.split() if not keyword.iskeyword(w.decode())]))
```
最终得到
```python
{b'print', b'../ring/bell.html', b'repeat', b'exec', b'switch'}
```
值得注意的是，“print”和“exec”在Python2中式关键字，在Python3中变成了函数，所以没有被去掉。
经过尝试，bell.html网页的用户名为repeat，密码为switch。
Over！ 

## level_28_many pairs ring-ring_2020.12.20

**🔑Solution**
本关考察对图片和字节流的处理能力。提示让我们大声说“RING-RING-RING”，是指“RING”谐音“GREEN”，就是指RGB的绿色通道。我们需要将绿色通道的数据两两配对，每组作差取绝对值，例如 green = [55, 97, 73, 115, 120, 78, ……]，操作后的结果是 diff = [42, 42, 42, ……]。查看列表diff的值，发现几乎都是“42”，去掉数值“42”，剩下的数值转成字符构成一条语句：
whodunnit().split()[0] ?
whodunnit直译是侦探小说,但明显不是这个意思,结合本关的谐音,可以知道是who done it的谐音,再结合`.split()[0] `可以知道是问python之父是谁
当然是那个死胖子,Guido啦,哈哈哈哈
![Guido van Rossum](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201220133143-2020-12-20.png)

**🖊Learned**
- `list(im.split()[1].getdata())` 获得green像素值列表
- `abs(a-b)for a, b in zip(green[0::2], green[1::2])` 列表的前一个减后一个
- filter+lambda 过滤列表
**💻Code**
```python
from PIL import Image
im = Image.open('assets/bell.png')

# ring-ring的谐音是green,所以提取green值
green = list(im.split()[1].getdata())

# 发现green前一个和后一个几乎都是差42,有猫腻
diff = [abs(a-b)for a, b in zip(green[0::2], green[1::2])]
# print(diff)

# 把42过滤掉
filtered = list(filter(lambda x: x != 42, diff))

# 过滤后的数据转化为二进制并解码
print(bytes(filtered).decode())  # whodunnit().split()[0] ?

```

## level_29_silence_2020.12.21

**🔑Solution**
一开始看源代码我是懵逼的，看了答案才知道html原来后面的行有玄机！一旦把每行的长度整理成数字列表之后，然后转化为二进制，发现又是BZ开头，用bz2解压，得到下一关的hint
![你以为空无一物](https://pic4.zhtop_img.com/80/v2-f44b0a3b683e58e8e9dffaba4d2da6bf.png)
![程序员的浪漫](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201221181345-2020-12-21.png)
**🖊Learned**
- 这一关真的好秒呀，论程序员的浪漫，可以用这关来装逼，隐藏想说的话！
- 网页Authorization这个始终记不住……
- splitlines()直接切割行，把内容转化为列表
- 列表转bytes，直接bytes(list),bytes转列表 list（bytes）

**💻Code**
解题
```python
from urllib.request import Request, urlopen
import bz2
import base64


req = Request('http://www.pythonchallenge.com/pc/ring/guido.html')
req.add_header('Authorization',
               'Basic %s' % base64.b64encode(b'repeat:switch').decode())
# 读取html13行之后的数据
raw = urlopen(req).read().splitlines()[12:]
# 数13行之后每行的长度，并转化为二进制
data = bytes([len(i) for i in raw])
# 解压二进制
print(bz2.decompress(data))
```
我们也从作者的角度来反推这个谜题是怎么做出来的
加密我们想说的话
```python
import bz2

message = b"" # 这得二进制
compressed = bz2.compress(message)
num_list = list(compressed)
with open("level_29_silence.txt", 'w') as file:
    for num in num_list:
        file.write(' ' * num + '\n')
```
解密,
哈哈，毕竟圣诞节到了嘛，不过这个silent.txt发给女生估计会被打！
```python
with open("level_29_silence.txt", 'r') as file:
    raw = file.read().splitlines()
    # print(raw)
# 数13行之后每行的长度，并转化为二进制
data = bytes([len(i) for i in raw])
# 解压二进制
print(bz2.decompress(data)) # Merry Christmas
```

## level_30_图片翻转质数之积_2020.12.22

**🔑Solution**
根据提示，下载“yankeedoodle.csv”，里面是一堆浮点数
还以为原来的行列可能有玄机，谁知道是直接数多少个数，然后发现可以拆分为两个质数的积，7367 = 53\*139， 构造一个53\*139的图片，得到一个带公式的图片`n = str(x[i])[5] + str(x[i+1])[5] + str(x[i+2])[6]`，就按照这个公式来处理csv得到的数据，最终得到“look at grandpa”的提示，剩下的信息别想太多，确实没用

**🖊Learned**
- 图片左右翻转 `top_img.transpose(Image.FLIP_LEFT_RIGHT)`
- 图片旋转 `top_img.transpose(Image.ROTATE_90)`
- 大概懂了`top_img.putdata`的意思
- 感觉学来学去，一直都在学图像处理呀！！！哈哈哈哈哈哈
- 不知道为什么VSCode现在写markdown卡的要死……一回车就卡死

**💻Code**

```python
from PIL import Image

with open('assets/yankeedoodle.csv') as f:
    # 处理成列表
    data = [x.strip() for x in f.read().split(",")]
    # 计算列表长度
    length = len(data)
    print(length)  # 7367

factor = [x for x in range(2, length) if length % x == 0]
print(factor)  # 计算这个length的因子为53*139

top_img = Image.new("F", (53, 139))
top_img.putdata([float(x) for x in data], 256)

# 左右翻转
top_img = top_img.transpose(Image.FLIP_LEFT_RIGHT)
# 顺时针旋转90度
top_img = top_img.transpose(Image.ROTATE_90)
top_img.show()

# 根据图片给的hint
a = data[0::3]
b = data[1::3]
c = data[2::3]
res = bytes([int(x1[5] + x2[5] + x3[6]) for x1, x2, x3 in zip(a, b, c)])

print(res)
```
得到的图片
![formula](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201222110626-2020-12-22.png)
最终输出结果
```
b'So, you found the hidden message.\nThere is lots of room here for a long message, but we only need very little space to say "look at grandpa", so the rest is just garbage. \nVTZ.l\'\x7ftf*Om@I"p]
```

## level_31_Mandelbrot set_2020.12.23

**🔑Solution**
点击图片进入下一关,需要用户名和密码,用户名是“kohsamui”，密码是“thailand”，进入第二部分。
第二部分的图片名词为mandelbrot,而图片的雪花本身就是曼德博集合.

注意到网页源代码的window和option标签，我们需要构造一个复平面，宽度对应x轴，高度对应y轴，范围由window标签给出。
left=“0.34” top=“0.57” width=“0.036” height=“0.027”
w = 640px —— x轴 范围 [left, left+width] = [0.34, 0.376]
h = 480px —— y轴 范围 [top, top+height] = [0.57, 0.597]

对于每个像素点,根据比例计算其在复平面的坐标(x,y) ,记复数c=x+yi,从z0=0开始迭代,迭代公式为zi+1=zi**2+c,c=x+yi,
记Mandelbrot集为M,根据定理,若复数c ∈ M  ，则|zi| < 2, ∀ i ∈ N 
迭代次数由option标签给出，最多128次，若迭代完128次，其模仍小于2，则该点的颜色值为127，若|zi|<2 and|zi+1|>=2, 则该点颜色为i，对应图片的palette表
然后将得到的list绘制图片比较两张图的像素差异,把不同的像素点提取出来,最后转化成黑白的图片,图片为阿雷西博信息,所以答案为“arecibo ”

**🖊Learned**
- 复习图像模式,P-8bit-使用调色板映射到其他任何模式,L-8bit-黑白...对,我又忘记了(,,ԾㅂԾ,,)
- 感觉对getpalette(),putpalete()的理解加深了,返回的列表其实是[r, g, b, r, g, b…],三个一个RGB排列下去,P模式，才具有调色板属性,RGB模式getpixel((x,y))是RGB值,而P模式getpixel((x,y))是一个值,即索引,大小范围在0~255之间
  调色板就是来减少存储空间使用量的,它存储着256种不同的调色方案
  以下代码将会打印出图像top_img的调色板情况，按照256个配色方案*3个通道值的格式排列：
  ```python
  print(np.array(top_img.getpalette()).reshape(256,3))
  ```
  使用了调色盘的图像将会被单通道存储，每个像素位置的值是调色盘“表”中的索引，这在存储图像的时候空间要求从RGB的**3**个字节变成了**1**个字节。达到减小空间的目的.
  但是,因为表中有限的配色方案数量（256），能使用的颜色也是有限制的，这也是P格式图像的一个缺点。
    [python中的pil库中的p模式是干什么用的？](https://www.zhihu.com/question/334057386/answer/774192372) 
    [Python PIL 图像处理中模式为"P"的含义以及与"RGB"之间的转换](https://blog.csdn.net/weixin_40005329/article/details/103481553)
- 图像的原点是在左上角吧,X轴是从左到右增长的，而Y轴是从上到下增长,所以例如本题构造result图片时因为提前确定好高度和宽度,1679个值从上放到下
- [曼德勃罗集（Mandelbrot Set）](https://zh.wikipedia.org/wiki/%E6%9B%BC%E5%BE%B7%E5%8D%9A%E9%9B%86%E5%90%88),[Python绘制Mandelbrot](https://www.dogedoge.com/results?q=python+mandelbrot&lang=auto)
- 原来python中for也有else呀,[如何在Python中使用break跳出多层循环？](https://www.zhihu.com/question/37076998)
- 这一关阿雷西博信息要哭死我啊，正好前几天才了解了下，然而2020年12月1日阿雷西博射电望远镜塌了~/(ㄒoㄒ)/~~ [阿雷西博信息](https://zh.wikipedia.org/wiki/%E9%98%BF%E9%9B%B7%E8%A5%BF%E5%8D%9A%E4%BF%A1%E6%81%AF)

**💻Code**
```python
from PIL import Image
import os


def mkdir(path):
    # 创建文件夹函数
    folder = os.path.exists(path)
    if not folder:
        os.makedirs(path)
        print(f"---new folder {path}---")


mkdir("output/level_31")
im0 = Image.open('assets/mandelbrot.gif')
w, h = im0.size  # 640, 480
im1 = Image.new('P', (w, h))
im1.putpalette(im0.getpalette())

left, top, width, height = 0.34, 0.57, 0.036, 0.027


# 曼德勃罗集（Mandelbrot Set）
# ! 构造复平面
# left=“0.34” top=“0.57” width=“0.036” height=“0.027”
# w = 640px —— x轴 范围 [left, left+width] = [0.34, 0.376]
# h = 480px —— y轴 范围 [top, top+height] = [0.57, 0.597]
# 复平面坐标(x,y)
for x in range(w):
    for y in range(h):
        # 从左上角开始遍历
        z = complex(0, 0)  # z0 = 0
        # c = x + yi
        c = complex(left + x * width / 640, top + (h-1-y) * height / 480)
        # 进行迭代 ,迭代次数 <option iterations="128"/>
        for i in range(1, 128):
            z = z**2 + c  # zi = zi-1**2 + c
            # 若复数c ∈ M  ，则|zi| < 2, ∀ i ∈ N 
            if abs(z) > 2:
                im1.putpixel((x, y), i - 1)
                break
        # 128次迭代完, 其模仍小于2，则该点的颜色值为127
        else:  
            # ! 不只是if有，while和for都有else分支:循环体的else分支触发条件是循环正常结束。如果循环内被break跳出，就不执行else。
            im1.putpixel((x, y), 127)
im1.save("output/level_31/mandelbrot_2.gif")

# 比较两张图的差别,得到diff列表
data0 = list(im0.getdata())
data1 = list(im1.getdata())
# 如果p0<p1,则取0即黑色,如果p0>p1,则取255,即白色
diff = [255 * (p0 < p1) for p0, p1 in zip(data0, data1) if p0 != p1]
len = len(diff)
print(diff)
print(f"length: {len}")  # 1679
factors = [f for f in range(2, len) if len % f == 0]
print(factors)  # [23,73]

# 输出
im2 = Image.new("L", (23, 73))
im2.putdata(diff)
im2.resize((230, 730)).show()
im2.save("output/level_31/result.jpg")

```
![mandelbrot](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/mandelbrot_2-2020-12-23.gif)
![Arecibo message](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/result-2020-12-23.jpg)



## level_32_刻印_2020.12.24 

**🔑Solution**
啊，没有Solution，完全不知道这是啥，等以后补吧
学习
见识到复杂的代码，觉得自己毫无长进吧
**🖊Learned**
[Nonogram](https://en.wikipedia.org/wiki/Nonogram),一种类似于数独的游戏，每一行每一列的数字来填格子，行列都符合的图案就是要求的答案

**代码**
```python
import numpy as np
from PIL import Image

is_solved = False
ans_points = np.zeros(1)

# n = 9
# horizontal = [[2, 1, 2], [1, 3, 1], [5], [7], [9], [3], [2, 3, 2], [2, 3, 2],[2, 3, 2]]
# vertical = [[2, 1, 3], [1, 2, 3], [3], [8], [9], [8], [3], [1, 2, 3],[2, 1, 3]]

n = 32
horizontal = [[3, 2], [8], [10], [3, 1, 1],
                [5, 2, 1], [5, 2, 1], [4, 1, 1], [15],
                [19], [6, 14], [6, 1, 12], [6, 1, 10],
                [7, 2, 1, 8], [6, 1, 1, 2, 1, 1, 1, 1], [5, 1, 4, 1], [5, 4, 1, 4, 1, 1, 1],
                [5, 1, 1, 8], [5, 2, 1, 8], [6, 1, 2, 1, 3], [6, 3, 2, 1],
                [6, 1, 5], [1, 6, 3], [2, 7, 2], [3, 3, 10, 4],
                [9, 12, 1], [22, 1], [21, 4], [1, 17, 1],
                [2, 8, 5, 1], [2, 2, 4], [5, 2, 1, 1], [5]]
vertical = [[5], [5], [5], [3, 1],
            [3, 1], [5], [5], [6],
            [5, 6], [9, 5], [11, 5, 1], [13, 6, 1],
            [14, 6, 1], [7, 12, 1], [6, 1, 11, 1], [3, 1, 1, 1, 9, 1],
            [3, 4, 10], [8, 1, 1, 2, 8, 1], [10, 1, 1, 1, 7, 1], [10, 4, 1, 1, 7, 1],
            [3, 2, 5, 2, 1, 2, 6, 2], [3, 2, 4, 2, 1, 1, 4, 1], [2, 6, 3, 1, 1, 1, 1, 1], [12, 3, 1, 2, 1, 1, 1],
            [3, 2, 7, 3, 1, 2, 1, 2], [2, 6, 3, 1, 1, 1, 1], [12, 3, 1, 5], [6, 3, 1],
            [6, 4, 1], [5, 4], [4, 1, 1], [5]]


def print_points(points: np.array) -> None:
    # print array in console
    if points[0, 0] == -2:
        print("ERROR\n")
        return
    for i in range(n):
        for j in range(n):
            if points[i, j] >= 1:
                print('█', end='')
            elif points[i, j] == 1:
                print('■', end='')
            elif points[i, j] == 0:
                print('.', end='')
            elif points[i, j] == -1:
                print('×', end='')
        print()
    print()


def horizontal_put(points: np.array, x: int, y0: int, y1: int) -> np.array:
    # the next position of current array is already occupied
    if y1 + 1 < n and np.min(points[x, y0:y1 + 1]) >= 1:
        points[0, 0] = -3
        return points
    # some positions of current array are inaccessible
    if np.min(points[x, y0:y1]) == -1 or (y1 < n and points[x, y1] > 0):
        points[0, 0] = -2
        return points
    # set all positions of current array occupied
    points[x, y0:y1] = 1
    # set the next position of current array inaccessible
    if y1 < n:
        points[x, y1] = -1
    return points


def vertical_put(points: np.array) -> np.array:
    for y in range(n):
        x = 0
        # this column is already finished
        if points[n - 1, y] != 0:
            continue
        for i, nums in enumerate(vertical[y]):
            # find next begin position of this column
            while x < n and points[x, y] <= 0:
                x += 1
            # at the end of this column
            if x == n:
                break
            # goto the end position of current array
            if points[x, y] == 2:
                x += nums
            # not enough positions to put current array
            elif points[x, y] == 1 and x + nums - 1 >= n:
                points[0, 0] = -2
                return points
            # set positions of current array occupied
            elif points[x, y] == 1:
                points[x, y] = 2
                points[x + 1:x + nums, y] = 1
                # set the next position of current array inaccessible
                if x + nums < n:
                    points[x + nums, y] = -1
                # this is the last array and set all rest positions inaccessible
                if i + 1 == len(vertical[y]) and x + nums < n:
                    points[x + nums:, y] = -1
                break
    return points


def search(points: np.array, x: int, y: int, k: int) -> None:
    global is_solved, ans_points
    # solution is found
    if x == n:
        print_points(points)
        ans_points = points.copy()
        is_solved = True
        return

    # the last position of this row can start this array
    j_end = n - sum(horizontal[x][k:]) - (len(horizontal[x]) - k - 1)

    for j in range(y, j_end + 1):
        # the previous position of current array is occupied
        if j >= 1 and points[x, j - 1] > 0:
            break

        # create a copy
        j1 = j + horizontal[x][k]
        new_points = points.copy()

        # try to put current array into positions row[x] column[j-j1]
        new_points = horizontal_put(new_points, x, j, j1)
        # error code -2
        if new_points[0, 0] == -2:
            continue
        # error code -3
        elif new_points[0, 0] == -3:
            break

        # check and put arrays in columns
        new_points = vertical_put(new_points)
        if new_points[0, 0] == -2:
            continue

        # this is the last array of this row, but some rest positions of this row are still occupied
        if k + 1 == len(
                horizontal[x]) and j1 < n and np.max(new_points[x, j1:]) > 0:
            continue

        # recur to next
        if k + 1 == len(horizontal[x]):
            search(new_points, x + 1, 0, 0)
        else:
            search(new_points, x, j1 + 1, k + 1)

        # solution is already found
        if is_solved:
            return


search(np.zeros((n, n), dtype=np.int), 0, 0, 0)

ans_points[ans_points > 0] = 255
ans_points[ans_points <= 0] = 0
im = Image.fromarray(ans_points.astype(np.uint8), "L")
im.show()
# im.save("level_32/python.jpg")
```

**Output**
[warmup.txt](http://www.pythonchallenge.com/pc/rock/warmup.txt)
```
██×.█×.██
█×.███××█
×.█████××
.███████×
█████████
×××███×××
██×███×██
██×███×██
██×███×██

```
[up.text](http://www.pythonchallenge.com/pc/rock/up.txt)
```
...................███×██×......
..................████████×.....
.................██████████×....
.................███×××█××█×....
.................█████×██×█×....
.................█████×██×█×....
................████××.█×.█×....
.............███████████████×...
...........███████████████████×.
..........██████×██████████████×
.........██████×..×.█×██████████
........███████×..██×.█×████████
........██████×█×█×██××.█×█×█××█
........█████×.×█×.████××.×.×..█
........█████×████×█×████×█×█×█×
........█████×××█×█×.×████████××
........×█████×██××█×.×████████×
.........██████××█××██×××█×███××
.........×██████×███××██××.××█××
..........×██████×××█×××█████×××
█×.........×██████×.███×××××××××
██×.........×███████×××██×.×××××
███×.███×..██████████×████××××××
█████████×████████████××××█×××××
██████████████████████×...█×××××
×█████████████████████×████×××××
××█××█████████████████××××█×××××
×××██××████████×█████×....█×××××
××××××××██×××××██××××.████××××××
××××××××××█████××██×█×××█×××××××
×××××××××××××××××××█████××××××××

```
输入“python.html”到下一页面，直接搜索下面那段话 “Free” as in “Free speech”, not as in "free…
了解到“Free as in beer”指免费软件，“Free as in speech”指开源软件，答案就是“beer”。


## level_33_remove light_2020.12.25

今天圣诞节嘞，圣诞快乐🎄！然而并没有收到礼物/(ㄒoㄒ)/~~
**🔑Solution**
不明白为什么32关那么难,33关又正常了...小小吐槽一下
这一关就是根据网页提示得到beer2.png图片,保存到本地,打开,发现图片是138*138的正方形
之前的网页源代码提示,"如果你被光蒙蔽了双眼，用它的力量移除它的力量。然后在灰烬中，另一个真相将向你光明正大地展示。"额,这句话真有哲理(●'◡'●)
总之,是之后用im.getdata()查看图片的灰度值,找到最大的两个数c0,c1,把等于c0,c1的数都变为255(白色),把小于的数都变成0(黑色),然后再删除等于c0和c1的数,得到的列表长度依然是一个平方数,之后需要重复操作33次,得到33张图片,发现33张图片里几张被方框括起来了,按顺序拼接,于是答案就为"gremlins"
**学习**
- 最后一关的输出我用了红色和绿色来美化输出哦,还回想起了`center(10,'*')`
- numpy可能要学习一下
  -  `data_np = np.array(data_list, dtype=np.uint8).reshape(n, n)`把列表搞成n*n的矩阵
  -  `data_np[data_np >= max_2] = 255`可以直接把矩阵里大于某个数的值重新赋值
**💻Code**
```python
from PIL import Image
import math
import os
import numpy as np
import heapq


def mkdir(path):
    # 创建文件夹函数
    folder = os.path.exists(path)
    if not folder:
        os.makedirs(path)
        print(f"---new folder {path} created---")


mkdir('output/level_33')
im = Image.open('assets/beer2.png')
data_list = list(im.getdata())

for i in range(33):
    print(f'\033[31m开始处理第{i+1}张图片\033[0m')
    max_number = heapq.nlargest(2, set(data_list))
    print(f"data中最大的两个数：{max_number}")
    max_2 = max_number[1]
    length = len(data_list)
    n = int(math.sqrt(len(data_list)))
    print(f'列表总长度：{length}')
    print(f'图片大小:{n}*{n}')
    data_np = np.array(data_list, dtype=np.uint8).reshape(n, n)
    data_np[data_np >= max_2] = 255
    data_np[data_np < max_2] = 0
    data_list = [x for x in data_list if x < max_2]
    im1 = Image.new('L', (n, n))
    im = Image.fromarray(data_np, "L")
    im.save(f'output/level_33/{i+1}.png')
    print(f'\033[32m第{i+1}张图片成功保存至本地\033[0m')
    print()
```
**Output**
![生成的33张图](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201225110813-2020-12-25.png)

撒花完结!!!!
![](https://cdn.jsdelivr.net/gh/Achuan-2/PicBed/assets/20201225111138-2020-12-25.png)