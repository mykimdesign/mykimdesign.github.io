---
layout: post
title:  "A-Cubed: Dashboard List"
date:   2015-09-24
excerpt: "A-Cubed Sidebar의 Dashboard List 가이드 제공"
tags:
  - A-Cubed
  - guide
  - html
  - css
  - sidebar
published: true
---

### 1. Default the View of Dashboard List Sidebar.

<a href="{{ site.url }}/images/works/20150924/image-1.png"><img src="{{ site.url }}/images/works/20150924/image-1.png" alt="dashboard list"></a>

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

<a href="{{ site.url }}/images/works/20150924/image-2.png"><img src="{{ site.url }}/images/works/20150924/image-2.png" alt="dashboard list"></a>
<br>
<br>

### 2. Resize the View of Dashboard List Sidebar.

<!--Dashboard List Sidebar 상단의 버튼을 클릭하면 Sidebar 전체 보기가 가능하다.-->

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

<a href="{{ site.url }}/images/works/20150924/image-3.png"><img src="{{ site.url }}/images/works/20150924/image-3.png" alt="dashboard list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-4.png"><img src="{{ site.url }}/images/works/20150924/image-4.png" alt="dashboard list"></a>
<br>

Dashboard List Sidebar 상단의 버튼을 클릭하면 원래의 화면 크기로 돌아온다.

<a href="{{ site.url }}/images/works/20150924/image-5.png"><img src="{{ site.url }}/images/works/20150924/image-5.png" alt="dashboard list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-6.png"><img src="{{ site.url }}/images/works/20150924/image-6.png" alt="dashboard list"></a>
<br>
<br>

### 3. Move the Dashboard Card.

Dashboard List의 Dashboard Card는 드래그하여 다른 위치로 이동 가능하다.

<a href="{{ site.url }}/images/works/20150924/image-7.png"><img src="{{ site.url }}/images/works/20150924/image-7.png" alt="dashboard list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-8.png"><img src="{{ site.url }}/images/works/20150924/image-8.png" alt="dashboard list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-9.png"><img src="{{ site.url }}/images/works/20150924/image-9.png" alt="dashboard list"></a>
<center>Default Size</center><br>

<a href="{{ site.url }}/images/works/20150924/image-10.png"><img src="{{ site.url }}/images/works/20150924/image-10.png" alt="dashboard list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-11.png"><img src="{{ site.url }}/images/works/20150924/image-11.png" alt="dashboard list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-12.png"><img src="{{ site.url }}/images/works/20150924/image-12.png" alt="dashboard list"></a>
<center>Full Size</center>
<br>
<br>

### 4. Move the Widgets in Dashboard Card list from side to side.

Widget List(파란영역)에 mouse hover시, 좌우 화살표가 나타나며 Widget 확인이 가능하다.

**Watch out!** Widget List는 4개 이상일 경우 좌우로 이동 가능
{: .notice}

<a href="{{ site.url }}/images/works/20150924/image-13.png"><img src="{{ site.url }}/images/works/20150924/image-13.png" alt="dashboard list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-14.png"><img src="{{ site.url }}/images/works/20150924/image-14.png" alt="dashboard list"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-15.png"><img src="{{ site.url }}/images/works/20150924/image-15.png" alt="dashboard list"></a>
<br>
<br>

### 5. Managing Shared.

Dashboard Card안에서 공유된 공유자의 인원수 확인이 가능하며 공유자 추가 또는 제거가 가능하다.

<a href="{{ site.url }}/images/works/20150924/image-16.png"><img src="{{ site.url }}/images/works/20150924/image-16.png" alt="add shared"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-17.png"><img src="{{ site.url }}/images/works/20150924/image-17.png" alt="add shared"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-18.png"><img src="{{ site.url }}/images/works/20150924/image-18.png" alt="add shared"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-19.png"><img src="{{ site.url }}/images/works/20150924/image-19.png" alt="add shared"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-20.png"><img src="{{ site.url }}/images/works/20150924/image-20.png" alt="add shared"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-21.png"><img src="{{ site.url }}/images/works/20150924/image-21.png" alt="add shared"></a>
<br>
<br>

### 6. Go to the Dashboard from the Dashboard List selected.

<!--Dashboard List에서 Dashboard Card를 클릭하면 선택된 Dashboard 페이지로 이동한다.-->

<a href="{{ site.url }}/images/works/20150924/image-22.png"><img src="{{ site.url }}/images/works/20150924/image-22.png" alt="dashboard"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-23.png"><img src="{{ site.url }}/images/works/20150924/image-23.png" alt="dashboard"></a>
<br>
<br>

### 7. Remove the Dashboard Card.

<!--Dashboard List의 Dashboard Card는 삭제가 가능하다.-->

**Watch out!** Dashboard Card는 별도의 경고창 없이 자유롭게 삭제 가능
{: .notice}

<a href="{{ site.url }}/images/works/20150924/image-24.png"><img src="{{ site.url }}/images/works/20150924/image-24.png" alt="remove dashboard"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-25.png"><img src="{{ site.url }}/images/works/20150924/image-25.png" alt="remove dashboard"></a>
<br>
<br>

### 8. Managing Trash dashboard.

휴지통 아이콘(파란영역)을 클릭하면 Delete Dashboard Modal이 오픈된다.

<a href="{{ site.url }}/images/works/20150924/image-26.png"><img src="{{ site.url }}/images/works/20150924/image-26.png" alt="delete dashboard modal"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-27.png"><img src="{{ site.url }}/images/works/20150924/image-27.png" alt="delete dashboard modal"></a>
<br>

상단의 'Select All' 버튼을 클릭하면 Delete Dashboard Modal에 있는 모든 Dashboard Card가 선택된다.

<a href="{{ site.url }}/images/works/20150924/image-28.png"><img src="{{ site.url }}/images/works/20150924/image-28.png" alt="delete dashboard modal"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-29.png"><img src="{{ site.url }}/images/works/20150924/image-29.png" alt="delete dashboard modal"></a>
<br>

상단의 'Unselect All' 버튼을 클릭하면 Delete Dashboard Modal에 있는 모든 Dashboard Card가 선택 해지된다.

<a href="{{ site.url }}/images/works/20150924/image-30.png"><img src="{{ site.url }}/images/works/20150924/image-30.png" alt="delete dashboard modal"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-31.png"><img src="{{ site.url }}/images/works/20150924/image-31.png" alt="delete dashboard modal"></a>
<br>

지우거나 복원시키고자 하는 Dashboard Card를 직접 선택할수 있다.

<a href="{{ site.url }}/images/works/20150924/image-32.png"><img src="{{ site.url }}/images/works/20150924/image-32.png" alt="delete dashboard modal"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-33.png"><img src="{{ site.url }}/images/works/20150924/image-33.png" alt="delete dashboard modal"></a>
<br>

Delete Dashboard Modal에서 Dashboard Card를 선택하고 'Restoration' 버튼을 클릭하면 해당 Dashboard Card가 복원된다.

<a href="{{ site.url }}/images/works/20150924/image-34.png"><img src="{{ site.url }}/images/works/20150924/image-34.png" alt="delete dashboard modal"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-35.png"><img src="{{ site.url }}/images/works/20150924/image-35.png" alt="delete dashboard modal"></a>
<br>

지우고자 하는 Dashboard Card를 선택하고 'Empty' 버튼을 클릭하면 경고창이 오픈된다.

<a href="{{ site.url }}/images/works/20150924/image-36.png"><img src="{{ site.url }}/images/works/20150924/image-36.png" alt="delete dashboard modal"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-37.png"><img src="{{ site.url }}/images/works/20150924/image-37.png" alt="delete dashboard modal"></a>
<br>

alert를 확인후, 최종 'Empty' 버튼을 클릭하면 toast message가 나타났다 사라지면서 선택된 Dashboard Card가 삭제된다.

<a href="{{ site.url }}/images/works/20150924/image-38.png"><img src="{{ site.url }}/images/works/20150924/image-38.png" alt="delete dashboard modal"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-39.png"><img src="{{ site.url }}/images/works/20150924/image-39.png" alt="delete dashboard modal"></a>
<br>

오른쪽 상단의 닫기버튼(파란영역)을 클릭하면 Delete Dashboard Modal이 닫힌다.

<a href="{{ site.url }}/images/works/20150924/image-40.png"><img src="{{ site.url }}/images/works/20150924/image-40.png" alt="delete dashboard modal"></a>
<br>
<a href="{{ site.url }}/images/works/20150924/image-41.png"><img src="{{ site.url }}/images/works/20150924/image-41.png" alt="delete dashboard modal"></a>