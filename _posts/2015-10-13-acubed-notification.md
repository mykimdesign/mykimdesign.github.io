---
layout: post
title:  "A-Cubed: Notification"
date:   2015-10-13
excerpt: "Notification의 사용법에 대한 가이드 제공"
tags:
  - A-Cubed
  - guide
  - html
  - css
  - notification
  - sidebar
published: false
---

### 1. The default view of the Sidebar.

<a href="{{ site.url }}/images/works/20151013/image-1.png"><img src="{{ site.url }}/images/works/20151013/image-1.png" alt="notification"></a>
<br>

해당 아이콘을 클릭하면 화면 오른쪽에서 Notification Sidebar가 슬라이드 되어 나타난다.

**HTML:**

```html
<div class="a3-sidebar-wrapper a3-sidebar-small">
```

**CSS:**

```css
.a3-wrapper .a3-sidebar-wrapper.a3-sidebar-small {
  right: 0;
  transition: all 0.1s ease-in-out;
}
```

<a href="{{ site.url }}/images/works/20151013/image-2.png"><img src="{{ site.url }}/images/works/20151013/image-2.png" alt="notification"></a>
<br>
<br>

### 2. Adjust the size of the Notification Sidebar.

Notification Sidebar 상단의 버튼을 클릭하면 Sidebar 전체 보기가 가능하다.

**HTML:**

```html
<div class="a3-sidebar-wrapper a3-sidebar-full">
```

**CSS:**

```css
.a3-wrapper .a3-sidebar-wrapper.a3-sidebar-full {
  right: 0;
  width: 100%;
  transition: all 0.1s ease-in-out;
}
```

<a href="{{ site.url }}/images/works/20151013/image-3.png"><img src="{{ site.url }}/images/works/20151013/image-3.png" alt="notification"></a>
<br>
<a href="{{ site.url }}/images/works/20151013/image-4.png"><img src="{{ site.url }}/images/works/20151013/image-4.png" alt="notification"></a>
<br>

Notification Sidebar 상단의 버튼을 클릭하면 원래 화면 크기로 돌아온다.

<a href="{{ site.url }}/images/works/20151013/image-5.png"><img src="{{ site.url }}/images/works/20151013/image-5.png" alt="notification"></a>
<br>
<a href="{{ site.url }}/images/works/20151013/image-6.png"><img src="{{ site.url }}/images/works/20151013/image-6.png" alt="notification"></a>
<br>
<br>

### 3. Go to select the area.

Notification 리스트를 마우스 클릭하면 해당 영역으로 넘어간다.

<a href="{{ site.url }}/images/works/20151013/image-7.png"><img src="{{ site.url }}/images/works/20151013/image-7.png" alt="notification"></a>
<br>
<a href="{{ site.url }}/images/works/20151013/image-7-1.png"><img src="{{ site.url }}/images/works/20151013/image-7-1.png" alt="notification"></a>
<br>
<br>

### 4. Confirming the Notification Sidebar.

확인이 된 리스트는 더이상 선택되지 않고 닫기 버튼이 보여진다.

<a href="{{ site.url }}/images/works/20151013/image-8.png"><img src="{{ site.url }}/images/works/20151013/image-8.png" alt="notification"></a>