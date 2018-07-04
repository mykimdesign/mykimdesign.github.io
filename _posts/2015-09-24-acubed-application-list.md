---
layout: post
title:  "A-Cubed: Application List"
date:   2015-09-24
excerpt: "A-Cubed Sidebar의 Application List 가이드 제공"
tags:
  - A-Cubed
  - guide
  - html
  - css
  - application list
  - sidebar
---

### 1. Default the View of Application List Sidebar.

<a href="{{ site.url }}/images/works/20150924/image-42.png"><img src="{{ site.url }}/images/works/20150924/image-42.png" alt="application list"></a>
<br>

해당 아이콘을 클릭하면 화면 오른쪽에서 Application List Sidebar가 슬라이드 되어 나타난다.

**Watch out!** 상단 아이콘 클릭 시, Dashboard에 등록되어 있는 모든 Widget들의 연관된 Application Lists를 보여줌
{: .notice}

**HTML:**

```html
<div class="a3-sidebar-wrapper a3-sidebar-small">
```

**CSS:**

```html
.a3-wrapper .a3-sidebar-wrapper.a3-sidebar-small {
  right: 0;
  transition: all 0.1s ease-in-out;
}
```

<a href="{{ site.url }}/images/works/20150924/image-43.png"><img src="{{ site.url }}/images/works/20150924/image-43.png" alt="application list"></a>
<br>

Widget에서 drill down을 누르면 Application List가 나타난다.

**Watch out!** Widget에서 drill down을 선택하면 그 Widget과 연관된 Application List만 보여줌
{: .notice}

<a href="{{ site.url }}/images/works/20150924/image-44.png"><img src="{{ site.url }}/images/works/20150924/image-44.png" alt="application list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-45.png"><img src="{{ site.url }}/images/works/20150924/image-45.png" alt="application list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-46.png"><img src="{{ site.url }}/images/works/20150924/image-46.png" alt="application list"></a>
<br>
<br>

### 2. Resize the View of Application List Sidebar.

Application List Sidebar 상단의 버튼을 클릭하면 Sidebar 전체 보기가 가능하다.

**HTML:**

```html
<div class="a3-sidebar-wrapper a3-sidebar-full">
```

**CSS:**

```html
.a3-wrapper .a3-sidebar-wrapper.a3-sidebar-full {
  right: 0;
  width: 100%;
  transition: all 0.1s ease-in-out;
}
```

<a href="{{ site.url }}/images/works/20150924/image-47.png"><img src="{{ site.url }}/images/works/20150924/image-47.png" alt="application list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-48.png"><img src="{{ site.url }}/images/works/20150924/image-48.png" alt="application list"></a>
<br>

Application List Sidebar 상단의 버튼을 클릭하면 원래 화면 크기로 돌아온다.

<a href="{{ site.url }}/images/works/20150924/image-49.png"><img src="{{ site.url }}/images/works/20150924/image-49.png" alt="application list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-50.png"><img src="{{ site.url }}/images/works/20150924/image-50.png" alt="application list"></a>
<br>
<br>

### 3. Go to the Workspace from the Application selected.

Application List Sidebar에서 Application을 선택하면 해당 Workspace 페이지로 전환된다.

<a href="{{ site.url }}/images/works/20150924/image-51.png"><img src="{{ site.url }}/images/works/20150924/image-51.png" alt="application list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-52.png"><img src="{{ site.url }}/images/works/20150924/image-52.png" alt="application list"></a>