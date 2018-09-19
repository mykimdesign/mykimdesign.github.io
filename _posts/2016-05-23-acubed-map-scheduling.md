---
layout: post
title:  "A-Cubed: Map & Scheduling"
date:   2016-05-23
excerpt: "요구사항에 따라 개선된 Map과 Scheduling 가이드 제공"
tags:
  - A-Cubed
  - guide
  - html
  - css
published: true
---

### 1. Map

① Map 아이콘 클릭시, Map 화면이 보여진다.<br>
② 최초 Map 로드시, 우측 사이드바는 보여지지 않는다.<br>
③ Map 화면의 우측 색상 가이드는 색상 적용시 참조만 하며 실제 화면에 배치되지 않는다.<br>
④ Workspace Node 클릭 시, Tooltip이 보인다.<br>
⑤ Owner의 사진과 이름이 보여지며, Workspace는 Owner에게만 삭제 권한이 있다.<br>
⑥ Workspace는 기본 파란색으로 등록되어 있으며 삭제 권한은 Owner 에게만 있다.<br>
⑦ Application은 기본 회색으로 등록되어 있고 Owner와 공유된 사람도 삭제가 가능하다.<br>
⑧ Shared User List 버튼 클릭시 좌측에서 Shared된 User List 메뉴 ⑬이 슬라이딩 되며 열린다.<br>
⑨ Map 상에 User가 등록한 Workspace 목록들을 볼 수 있다.<br>
⑩ User가 직접 검색창을 이용하여 Workspace를 조회할 수 있다.<br>
⑪ Share된 Dashboard와 Workspace는 Logo 옆에 아이콘이 등록되여 보여진다.<br>

<a href="{{ site.url }}/images/works/20160523/image-1.jpg"><img src="{{ site.url }}/images/works/20160523/image-1.jpg" alt="map"></a>
<br>

⑫ 위 이미지 ⑧번을 선택하면 좌측에서 share 사이드바가 슬라이딩 되어 보여진다.<br>
⑬ Invitator는 나를 초대 한 dashboard & workspace list이다.<br>
⑭ Receiver는 나의 dashboard & workspace를 다른 User에게 공유한 List이다.<br>

<a href="{{ site.url }}/images/works/20160523/image-2.jpg"><img src="{{ site.url }}/images/works/20160523/image-2.jpg" alt="map"></a>
<br>
<br>

### 2-1. Scheduling 

③ Workspace 또는 Application 버튼 클릭 시, Tooltip이 보인다.<br>
④ Scheduling 아이콘 클릭 시, 우측에서 사이드바가 슬라이드 되어 보여진다. 최초에 Schedule Card는 생성되어 있지 않고 비어 있다.<br>
⑤ 추가 버튼을 클릭하면 하단에 일정을 등록할 수 있는 Schedule Card가 생성된다.
⑥ Play 버튼을 누르면 Play 되고 다시 누르면 Stop 된다.<br>
⑦ Repeat > Day 선택 시, 요일은 Disabled 되고 시간만 활성화 된다.<br>
⑧ Repeat > Week 선택 시, 요일과 시간이 선택 가능하다.<br>
⑨ Day, Week 단위로 설정 가능하다. (원하는 요일과 시간을 설정할 수 있다.)<br>
⑩ Save 버튼을 클릭하면 저장되고 Cancel 버튼을 클릭하면 취소되며 카드로 등록되지 않는다.<br>
⑪ 등록된 Schedule은 해당 시간단위로 Reporting 되고 카드 Header 좌측에 카운트 된다.<br>

<a href="{{ site.url }}/images/works/20160523/image-3.jpg"><img src="{{ site.url }}/images/works/20160523/image-3.jpg" alt="scheduling"></a>
<br>
<br>

### 2-2. Remove the schedule.

① 등록된 카드의 X 버튼을 클릭하면 삭제가 가능하다.<br>
② 취소 버튼을 누르면 삭제 되지 않고 삭제 버튼을 누르면 최종 삭제 된다.<br>

<a href="{{ site.url }}/images/works/20160523/image-4.jpg"><img src="{{ site.url }}/images/works/20160523/image-4.jpg" alt="schedule remove"></a>
<br>
<br>

### 2-3. Scheduled Report Modal.

① Report List가 3개 이상이면 more 버튼이 보이고 클릭시 ②번 Modal이 뜬다. 

<a href="{{ site.url }}/images/works/20160523/image-5.jpg"><img src="{{ site.url }}/images/works/20160523/image-5.jpg" alt="schedule report modal"></a>
<br>
<br>

### 3. Managing Shared

① Share 버튼 클릭을 클릭하면 User card (or Group card)가 등록된다.<br>
② Input Box에 text를 입력할 수 있다. (자동완성 기능 포함)<br>
③ User card (or Group card)의 X 버튼을 누르면 해당 카드가 삭제된다.<br>
④ Share Modal 닫기 버튼 or Modal 외 영역을 클릭하면 Map 화면으로 돌아간다.<br>

**Watch out!** Dashboard Card에서도 Managing Shared 가능. 'Dashabord List'를 참고.
{: .notice}

<a href="{{ site.url }}/images/works/20160523/image-6.jpg"><img src="{{ site.url }}/images/works/20160523/image-6.jpg" alt="managing shared"></a>
<br>

⑤ User와 Group 검색이 가능하며 아무것도 입력하지 않은 상태에서 우측의 화살표를 누르면 전체 User & Group Lists가 Drop-down Menu로 보여진다.<br>
⑥ 탭 버튼(All, User, Group)을 통해서 Shared된 User & Group Cards를 볼수 있다.<br>
⑦ User와 Group을 구분하는 아이콘이 카드 왼쪽 상단에 보여진다.<br>
⑧ Group Card 내 최대 5개의 User Icon을 볼수 있으며 5개 이상이 되면 '...' 표시가 보여진다.<br>
⑨,⑩ Card를 클릭하면 해당 관련 정보 Layer가 슬라이딩 되면서 보여진다.<br>

**Watch out!** 검색 기능: user - text or @user name, group - #group name
{: .notice}

<a href="{{ site.url }}/images/works/20160523/image-7.jpg"><img src="{{ site.url }}/images/works/20160523/image-7.jpg" alt="managing shared"></a>
<br>
<a href="{{ site.url }}/images/works/20160523/image-8.jpg"><img src="{{ site.url }}/images/works/20160523/image-8.jpg" alt="managing shared"></a>
<br>
<a href="{{ site.url }}/images/works/20160523/image-9.jpg"><img src="{{ site.url }}/images/works/20160523/image-9.jpg" alt="managing shared"></a>
<br>
<a href="{{ site.url }}/images/works/20160523/image-10.jpg"><img src="{{ site.url }}/images/works/20160523/image-10.jpg" alt="managing shared"></a>
<center>User 정보</center><br>

<a href="{{ site.url }}/images/works/20160523/image-11.jpg"><img src="{{ site.url }}/images/works/20160523/image-11.jpg" alt="managing shared"></a>
<center>Group 정보</center><br>