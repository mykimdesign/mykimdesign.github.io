---
layout: post
title:  "FW: Global Control"
date:   2017-04-18
excerpt: ""
tags:
  - FW
  - guide
  - html
  - css
published: false
---

<a href="{{ site.url }}/images/works/20170418/image-8.png"><img src="{{ site.url }}/images/works/20170418/image-8.png" alt="global control"></a>
<br>

### Select Task

1. 종류

<a href="{{ site.url }}/images/works/20170418/image-1.png"><img src="{{ site.url }}/images/works/20170418/image-1.png" alt="global control"></a>

2. Radio button checked (Bootstrap 기능)

```html
<input type="radio" name="inlineRadioOptions" id="inlineRadio1" class="a3-status-start" value="option1" checked>
```
<br>
<br>

### Button

1. 종류

<a href="{{ site.url }}/images/works/20170418/image-3.png"><img src="{{ site.url }}/images/works/20170418/image-3.png" alt="global control"></a>

2. button hidden

```html
<button type="button" class="btn btn-default fw-btn-start hidden"><i class="fa fa-play" aria-hidden="true"></i></button>
```
<br>
<br>

### Table
1. Scroll
  * 테이블은 x,y 스크롤이 가능함.
  * 스크롤에 따라 Header title(Server)과 Left title(FW)이 유동적으로 움직여야 함.

<a href="{{ site.url }}/images/works/20170418/image-4.png"><img src="{{ site.url }}/images/works/20170418/image-4.png" alt="global control"></a>
<br>
<br>

### Member
1. 종류

* 왼쪽부터 healthy(녹색), Stopped(회색), fatal(빨강), initializing(올리브), warning(노랑), abnormal(주황)

2. 상태

* basic일 때

<a href="{{ site.url }}/images/works/20170418/image-5.png"><img src="{{ site.url }}/images/works/20170418/image-5.png" alt="global control"></a>

```html
<span class="label label-healthy">Photo1</span>
```

* selected일 때

<a href="{{ site.url }}/images/works/20170418/image-6.png"><img src="{{ site.url }}/images/works/20170418/image-6.png" alt="global control"></a>

```html
<span class="label label-healthy selected">Photo1</span>
```

* disabled일 때

<a href="{{ site.url }}/images/works/20170418/image-7.png"><img src="{{ site.url }}/images/works/20170418/image-7.png" alt="global control"></a>

```html
<span class="label label-healthy disabled">Photo1</span>
```