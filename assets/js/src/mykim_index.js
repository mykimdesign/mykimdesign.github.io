
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
  
  if(blockRight.scrollTop() >= 300) {
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
  if(window.scrollY >= 1920) {
    $(".ex-content2").addClass("show-content");
  }
  if(window.scrollY >= 2200) {
    $(".ex-content3").addClass("show-content");
  }
  if(window.scrollY >= 2400) {
    $(".ex-content4").addClass("show-content");
  }
});

// when wide width
$('.block-right').on('scroll', function() {
  var blockRight = $('.block-right');
  
  if(blockRight.scrollTop() >= 900) {
    $(".timeline").addClass("move-timeline");
    $(".ex-content1").addClass("show-content");
  }
  if(blockRight.scrollTop() >= 1300) {
    $(".ex-content2").addClass("show-content");
  }
  if(blockRight.scrollTop() >= 1600) {
    $(".ex-content3").addClass("show-content");
  }
  if(blockRight.scrollTop() >= 1800) {
    $(".ex-content4").addClass("show-content");
  }
});


// portfolio
$(".image-popup").one("click", function() {
   $('.mfp-img').css('max-height', '');
});

//$(document).resize(function() {
//   $('.mfp-img').css('max-height', '');
//});

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