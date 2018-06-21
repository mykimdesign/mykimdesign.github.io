---
layout: post
title: "user & group"
date:   2016-12-13
categories:
  - Markup
tags:
  - A-Cubed
  - html
  - css
  - markup
  - button
---

1. Validation
validation check는 필수로 입력해야 하는 항목(*)만 포함되며, 위에서부터 순차적으로 적용된다.

1) Input Box

a) <div class="form-group a3-input-group has-error">
b) Input Box의 validation 체크는 a3-input-group 클래스 뒤에 has-error를 추가한다.
c) validation check는 필수로 입력해야 하는 항목(*)에만 표현된다.
<br>
<a href="{{ site.url }}/images/works/20161213/image-1.png"><img src="{{ site.url }}/images/works/20161213/image-1.png" alt="notification"></a>
<br>

2) Table

a) <div class="col-sm-5 a3-lists has-error">
b) Table의 validation 체크는 a3-lists 클래스 뒤에 has-error를 추가한다.
c) 좌측 테이블에 Role ID는 최소 한개 이상 있어야 하며, 없는 상태에서 Apply 버튼을 클릭하면 validation이 노출된다.
d) 우측 테이블에서 Role ID 선택 후, 좌측으로 보내기 버튼을 클릭하면 validation은 사라지고 Role ID가 좌측으로 이동된다.
<br>
<a href="{{ site.url }}/images/works/20161213/image-2.png"><img src="{{ site.url }}/images/works/20161213/image-2.png" alt="notification"></a>
<br>

a) <div class="a3-permission-table has-error">
b) Permission Table의 validation 체크는 a3-permission-table 클래스 뒤에 has-error를 추가한다.
c) 최소 한개 이상 체크가 되어 있어야 하며, 체크 되어 있지 않은 상태에서 Apply 버튼을 클릭하면 validation이 노출된다.
<br>
<a href="{{ site.url }}/images/works/20161213/image-3.png"><img src="{{ site.url }}/images/works/20161213/image-3.png" alt="notification"></a>
<br>