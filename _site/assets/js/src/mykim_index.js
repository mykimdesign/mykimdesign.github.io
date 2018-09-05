// skills

$(window).on('scroll', function(){
  if ($("#skills").is(':visible')) {
    $(".graph-90").addClass("move-90");
  }
  if ($("#skills").is(':visible')) {
    $(".graph-80").addClass("move-80");
  }
  if ($("#skills").is(':visible')) {
    $(".graph-70").addClass("move-70");
  }
  if ($(".progress-bar").is(':visible')) {
    $(".percent").addClass("show-percent");
  }
});


// experience

$(window).on('scroll', function(){
  if ($("#experience").is(':visible')) {
    $(".test").addClass("move-bar");
  }
  if ($("#experience").is(':visible')) {
    $(".ex-content").addClass("show-content");
  }
});



//$(window).on('scroll', function(){
//  if ($("#experience").is(':visible')) {
//    $(".graph-90").addClass("move-90");
//  }
//});




//$(window).on('scroll', function(){
//  if (checkVisible($("#skills"))) {
//    $(".graph-90").addClass("move-90");
//  }
//  if (checkVisible($("#skills"))) {
//    $(".graph-80").addClass("move-80");
//  }
//  if (checkVisible($("#skills"))) {
//    $(".graph-70").addClass("move-70");
//  }
//});

//function checkVisible(elm) {
//  elm = elm.get(0);
//  var rect = elm.getBoundingClientRect();
//  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
//  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
//}