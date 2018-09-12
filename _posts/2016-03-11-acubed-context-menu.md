---
layout: post
title:  "Markup: Context Menu"
date:   2016-03-11
categories:
  - Markup
tags:
  - markup
  - guide
  - icons
  - design
  - html
  - css
published: true
---

A-Cubed Widget에서 Application으로 이동할 때 Context Menu를 통해서 drill down을 합니다. drill down뿐만 아니라 Context Menu를 이용하여 다양한 기능들을 수행할 수 있습니다.
      
### Context Menu Icons

**Watch out!** 총 6가지의 아이콘이 존재하며 기본 상태는 검정, 마우스 오버했을때 파란색 아이콘으로 변경됨.
{: .notice}

1. Leave Comments
  * 해당 Widget 또는 Application에 코멘트 남기기
  * Widget & Application 사용 가능
  
2. Further Analysis
  * 해당 Widget 또는 Application과 연관 있는 화면으로 drill down 하기
  * Widget & Application 사용 가능
  
3. Sync with other widgets
  * 해당 Widget과 연관이 있는 다른 Widget들을 동기화
  * Widget 사용 가능
  
4. Share Workspace
  * 다른 사용자와 Workspace를 공유
  * Workspace 사용 가능
  
5. Scheduling
  * Map 내에서 선택한 Workspace의 일정을 관리
  * Map 사용 가능
  
6. Delete
  * Map 내에서 선택한 Workspace를 삭제
  * Map 사용 가능

<a href="{{ site.url }}/images/works/20160311/image-1.jpg"><img src="{{ site.url }}/images/works/20160311/image-1.jpg" alt="icons"></a>
<br>

### Context Menu

1. Widget Context Menu
  * Application Title
  * Information Lists
  * Icons : Leave Comments, Further Analysis, Sync with other widgets
  
2. Application Context Menu
  * Data Title
  * Information Lists
  * Icons : Leave Comments, Further Analysis
  
3. Map Context Menu
  * Icons : Move, Scheduling, Delete

{% capture images %}
	{{ site.url }}/images/works/20160311/image-2.jpg
	{{ site.url }}/images/works/20160311/image-3.jpg
	{{ site.url }}/images/works/20160311/image-4.jpg
{% endcapture %}
{% include gallery images=images caption="기능별 Context Menu" cols=3 %}