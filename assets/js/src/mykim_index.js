
// skills
// when narrow width
$(window).on('scroll', function(){
  if(window.scrollY >= 900) {
    $(".graph-90").addClass("move-90");
    $(".graph-80").addClass("move-80");
    $(".graph-70").addClass("move-70");
    $(".percent").addClass("show-percent");
  }
});

// when wide width
$('.block-right').on('scroll', function() {
  var blockRight = $('.block-right');
  
  if(blockRight.scrollTop() >= 400) {
    $(".graph-90").addClass("move-90");
    $(".graph-80").addClass("move-80");
    $(".graph-70").addClass("move-70");
    $(".percent").addClass("show-percent");
  }
});



// experience
// when narrow width
$(window).on('scroll', function(){
  if(window.scrollY >= 1500) {
    $(".timeline").addClass("move-timeline");
    $(".ex-content1").addClass("show-content");
  }
  if(window.scrollY >= 2000) {
    $(".ex-content2").addClass("show-content");
  }
  if(window.scrollY >= 2300) {
    $(".ex-content3").addClass("show-content");
  }
  if(window.scrollY >= 2400) {
    $(".ex-content4").addClass("show-content");
  }
});

// when wide width
$('.block-right').on('scroll', function() {
  var blockRight = $('.block-right');
  
  if(blockRight.scrollTop() >= 1100) {
    $(".timeline").addClass("move-timeline");
    $(".ex-content1").addClass("show-content");
  }
  if(blockRight.scrollTop() >= 1400) {
    $(".ex-content2").addClass("show-content");
  }
  if(blockRight.scrollTop() >= 1600) {
    $(".ex-content3").addClass("show-content");
  }
  if(blockRight.scrollTop() >= 1800) {
    $(".ex-content4").addClass("show-content");
  }
});





$(window).on('scroll', function() {
  var scrollValue = $(document).scrollTop();
  console.log(scrollValue);
});


//$(window).on('resize', function () {
//  if ($(window).width() <= 320) {
//    // is mobile device
//  }
//});


//function checkVisible(elm) {
//  elm = elm.get(0);
//  var rect = elm.getBoundingClientRect();
//  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
//  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
//}