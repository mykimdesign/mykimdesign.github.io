---
layout: post
title:  "PeakPerformance: Global Control"
date:   2017-04-18
categories:
  - Markup
tags:
  - A-Cubed
  - guide
  - html
  - css
  - dashboard list
  - sidebar
---

...

### 1. Select Task

a. 종류

  * Start, Stop, Force Stop(Kill), Restart (Stop & Start), Restart (Force Stop & Start)
b. Radio button checked (Bootstrap 기능)

   * <input type="radio" name="inlineRadioOptions" id="inlineRadio1" class="a3-status-start" value="option1" checked>
<br>
<a href="{{ site.url }}/images/works/20170418/image-1.png"><img src="{{ site.url }}/images/works/20170418/image-1.png" alt="global control"></a>
<br>
<br>

### 2. Select Members
a. 종류
  * Container, Distributor
<br>
<a href="{{ site.url }}/images/works/20170418/image-2.png"><img src="{{ site.url }}/images/works/20170418/image-2.png" alt="global control"></a>
<br>
<br>

### 3. Button
a. button hidden
  * <button type="button" class="btn btn-default fw-btn-start hidden"><i class="fa fa-play" aria-hidden="true"></i></button>
  <br>
<a href="{{ site.url }}/images/works/20170418/image-3.png"><img src="{{ site.url }}/images/works/20170418/image-3.png" alt="global control"></a>
<br>
<br>

### 4. Table
a. Scroll
  * 테이블은 x,y 스크롤이 가능함.
  * 스크롤에 따라 Header title(Server)과 Left title(FW)이 유동적으로 움직여야 함.
<br>
<a href="{{ site.url }}/images/works/20170418/image-4.png"><img src="{{ site.url }}/images/works/20170418/image-4.png" alt="global control"></a>
<br>
<br>

### 5. Member
a. 종류
  * 왼쪽부터 healthy(녹색), Stopped(회색), fatal(빨간색), initializing(올리브색), warning(노란색), abnormal(주황색)
b. 상태
  * basic일 때
    * <span class="label label-healthy">Photo1</span>
<br>
<a href="{{ site.url }}/images/works/20170418/image-5.png"><img src="{{ site.url }}/images/works/20170418/image-5.png" alt="global control"></a>
<br>
  * selected일 때
    * <span class="label label-healthy selected">Photo1</span>
<br>
<a href="{{ site.url }}/images/works/20170418/image-6.png"><img src="{{ site.url }}/images/works/20170418/image-6.png" alt="global control"></a>
<br>
  * disabled일 때
    * <span class="label label-healthy disabled">Photo1</span>
<br>
<a href="{{ site.url }}/images/works/20170418/image-7.png"><img src="{{ site.url }}/images/works/20170418/image-7.png" alt="global control"></a>
<br>
<a href="{{ site.url }}/images/works/20170418/image-8.png"><img src="{{ site.url }}/images/works/20170418/image-8.png" alt="global control"></a>