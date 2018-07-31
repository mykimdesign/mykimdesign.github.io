---
layout: post
title:  "*** A-Cubed: Map,Automation,Collaboration"
date:   2017-01-17
categories:
  - Markup
tags:
  - A-Cubed
  - guide
  - html
  - css
published: false
---

A-Cubed App Configuration 가이드 제공

### 1. Map
① GNB의 A3 map 버튼 클릭시 Map(우측 스캐쥴 포함)이 열린다. 
    - 우측 스캐쥴 Reports Container는 고정 영역
② 최초 Map 로드시 우측 사이드바는 보여지지 않는다. 
③ Map 화면의 우측 색상 가이드는 색상 적용시 참조만 하며 실제 화면에 배치되지 않는다.
④ 워크스페이스 Node 클릭시 메뉴가 열리며,  이동, 쉐어, 휴지통 버튼이 존재한다.
⑤ 해당 Tasker 는 쉐어받은 사람도 삭제 가능 하지만, Workspace는 Owner 에게만 삭제 권한이 있다.
⑥ Workspace 삭제 권한은 owner 에게만 있다. 
⑦ Takser 는 쉐어 받은 사람도 삭제가 가능하다.
⑧ Shared user list 버튼 클릭시 좌측에서 Shared된 User List 메뉴 ⑬가 슬라이딩 되며 열린다.
⑨ 선택한 개수만큼의 workspce node가 ③ map 영역에 보여진다.
⑪ Share 받은  Dashboard와 Workspace 는 Logo옆에 쉐어 아이콘이 등록되며 보여진다.
⑮ 버튼을 클릭하면 Workspace 매니징 화면이 슬라이딩 된다. 


<a href="{{ site.url }}/images/works/20170117/image-1.jpg"><img src="{{ site.url }}/images/works/20170117/image-1.jpg" alt="dfd"></a>
<br>

⑫  위 이미지 ⑧번을 선택시 슬라이딩 되며 share 사이드바가 열린다.
⑬ Invitator는 나를 초대 한 dashboard & workspace list이다.
⑭ Receiver는 나의 dashboard & workspace 를 다른 user에게 공유한 list이다.

<a href="{{ site.url }}/images/works/20170117/image-2.jpg"><img src="{{ site.url }}/images/works/20170117/image-2.jpg" alt="dfd"></a>
<br>
<br>

### 2. Schedule
① Workspace, Takser icon 클릭시 Tooltip 메뉴가 열린다.
② Workspace Node는 쉐어
③ Takser Tooltip 메뉴안에는 이동, 공유, 휴지통 기능 버튼이 존재한다.

  * 이동 : 해당 Tasker로 이동
  * 스캐쥴 : 스캐쥴 기능
  * 휴지통 : 해당 Workspace 및 Tasker 하위 Node 삭제

④ ③번의 툴팁 스캐쥴 버튼 클릭시 ④번의 우측 사이드바가 열린다.  최초에 스캐쥴 카드는 생성되어 있지 않고 비어 있다. 
⑤  스캐쥴 Add 버튼 클릭시 세부 스캐쥴을 입력 할수 있다.

  * 스캐쥴 사이드바 최초 오픈시 Schedule 카드는 보여지지 않는다. (0 Schedyled Reports와 추가 버튼만 존재)
  * Schedule 카드가 하나라도 열려 있고 Save 되지 않으면 + (추가) 버튼은 비활성화
  * Schedule 카드 input 요소 모두 입력 후, Save 버튼 클릭시 카드 닫히고 ② Play는 되지 않는다.
  * Schedule Play는 자동 Play 되지 않고 클릭해야함.다시 누르면 비활성화.
  * Name 필드는 필수로 입력되어야 하며, 미등록시 Validation Notice가 상단 global header 중앙 영역에 뜬다.
  * 카드 정렬 및 추가는 최신순으로 등록되며 정렬된다.
⑥ 등록된 스캐쥴의 Play 아이콘 버튼을 누르면  Play되고 다시 누르면 Stop 된다.
⑦  Repeat > Day 선택시  every, 요일은 Disabled 되고 시간만 활성화 된다.
⑧ Repeat > Week 선택시 요일과 시간이 선택 가능하다.
⑨ Day, Week 단위로 설정 가능하다. (월,화,수,목,금,토,일 중 내가 원하는 요일과 시간을 설정할 수 있다.)
⑩ Save 버튼을 클릭하면 저장되고 Cancel 버튼을 클릭하면 취소되며 카드로 등록되지 않는다.
⑪ 등록된 스캐쥴은 해당 시간단위로 Reporting 되고 카드 Header 좌측에 카운트 된다.
  * 설정 버튼 클릭시 해당 Report 카드가 Open 된다. 
  
<a href="{{ site.url }}/images/works/20170117/image-3.jpg"><img src="{{ site.url }}/images/works/20170117/image-3.jpg" alt="dfd"></a>
<br>
<br>

### 3. Schedule Remove
① 등록된 카드의 X버튼을 클릭하면 삭제가 가능하다.
② 취소 버튼을 누르면 삭제 되지 않고 삭제 버튼을 누르면 최종 삭제 된다. 

<a href="{{ site.url }}/images/works/20170117/image-4.jpg"><img src="{{ site.url }}/images/works/20170117/image-4.jpg" alt="dfd"></a>
<br>
<br>

### 4. Scheduled Report Modal
① Report list 3개이상이면 more 버튼이 보이고 클릭시 ②번 Modal이 뜬다. 

<a href="{{ site.url }}/images/works/20170117/image-5.jpg"><img src="{{ site.url }}/images/works/20170117/image-5.jpg" alt="dfd"></a>
<br>
<br>

### 5. Add Shared
① Dashboard List 에서 Share아이콘 버튼 클릭시 Map 과 동일하게
② Add Shared 모달이 뜨고 같은 기능을 수행한다.

<a href="{{ site.url }}/images/works/20170117/image-6.jpg"><img src="{{ site.url }}/images/works/20170117/image-6.jpg" alt="dfd"></a>
<br>
<br>

### 6. Shared UI
① Share 버튼 클릭시 User card (or Group card)가 등록된다.
② Input Box에 text입력시 자동완성 기능
③ User card (or Group card)의 X버튼을 누르면 해당 카드내에서 삭제가 가능하다.
④ Share Modal  닫기 버튼 or Modal 외 영역 클릭시 map 화면으로 돌아간다.

<a href="{{ site.url }}/images/works/20170117/image-7.jpg"><img src="{{ site.url }}/images/works/20170117/image-7.jpg" alt="dfd"></a>
<br>

⑤ user와 group 모두 검색이 가능하며 빈 검색필드 상태에서 우측의 화살표를 누르면 전체 user & group list가 drop down 메뉴로 보여진다.

  * share 버튼을 누르면 shared list에 등록된다.
  * 검색 기능: user - text or @user name, group - #group name
  
<a href="{{ site.url }}/images/works/20170117/image-8.jpg"><img src="{{ site.url }}/images/works/20170117/image-8.jpg" alt="dfd"></a>
<br>
<a href="{{ site.url }}/images/works/20170117/image-9.jpg"><img src="{{ site.url }}/images/works/20170117/image-9.jpg" alt="dfd"></a>
<br>

⑥ 탭 버튼을 통해 all, user, group 로 구분해서 shared된 group / user 를 볼수 있다.
⑦ Shared Group / User는 각각 group / user 아이콘이 보여진다.
⑧ Group card내 최대 5개의 user icon을 볼수 있으며 5개 이상이 되면 '...' 표시가 보여진다.
⑨ User card를 클릭하면 user에 속한 사용자 관련 정보 layer가 슬라이딩 되면서 보여진다.

<a href="{{ site.url }}/images/works/20170117/image-10.jpg"><img src="{{ site.url }}/images/works/20170117/image-10.jpg" alt="dfd"></a>
<br>

<a href="{{ site.url }}/images/works/20170117/image-11.jpg"><img src="{{ site.url }}/images/works/20170117/image-11.jpg" alt="dfd"></a>
<br>
⑩ Group card를 클릭하면 group에 속한 user lists layer가 슬라이딩 되면서 보여진다.

<a href="{{ site.url }}/images/works/20170117/image-12.jpg"><img src="{{ site.url }}/images/works/20170117/image-12.jpg" alt="dfd"></a>
<br>
⑪ Layer back 버튼을 누르면 group user list layer는 슬라이드 되어 닫히고 Add share modal이 보여진다.
<a href="{{ site.url }}/images/works/20170117/image-13.jpg"><img src="{{ site.url }}/images/works/20170117/image-13.jpg" alt="dfd"></a>
<br>

⑫ 맵의 Node의 개수를 슬라이더로 조절해서 볼 수 있다.

  * 최초 Min 값으로 30부터 보여준다.
  * 최대 Max 100개 까지 설정 할 수 있다.
  * 슬라이더의 전체 길이에서 1/7 (30,40,50,60,70,80,90,100) 단위로 슬라이더 포인트가 움직인다.
  * 슬라이더의 한 구간은 10개이다.
  * Node 개수는 포인터에 마우스 오버시 툴팁으로 보여진다.
  * 최소 개수와 최대 개수는 Slider 시작점과 끝점에 Text로 표현한다.
  * 슬라이더 재 설정시에 Spinner가 보여진다.
  * 마우스 이벤트는 슬라이더 Circle 버튼에만 부여된다. (슬라이딩 영역 제외)
  * Node 개수 반영은 마우스가 release시에 보여진다.
  
<a href="{{ site.url }}/images/works/20170117/image-14.jpg"><img src="{{ site.url }}/images/works/20170117/image-14.jpg" alt="dfd"></a>
<br>