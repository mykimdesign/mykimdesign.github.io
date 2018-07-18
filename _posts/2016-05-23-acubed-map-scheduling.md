---
layout: post
title:  "A-Cubed: Map & Scheduling"
date:   2016-05-23
excerpt: "요구사항에 따라 개선된 Map 가이드 제공"
tags:
  - A-Cubed
  - guide
  - html
  - css
  - map
  - scheduling
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
  * Schedule Sidebar 최초 오픈시 Schedule Card는 보여지지 않는다. (0 Schedyled Reports와 추가 버튼만 존재)
  * Name은 필수로 입력해야 한다.
  * Schedule Card가 하나라도 열려 있고 Save 되지 않으면 +(추가) 버튼은 비활성화 되어 있다.
  * ⑥ Schedule Play는 자동 Play 되지 않고 클릭해야 한다. 다시 누르면 비활성화 된다.
  * Schedule Card는 최신순으로 등록되고 정렬된다.

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