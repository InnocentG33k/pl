if ($(window).width() <= 768) {
$(function() {
  $("#nav-btn").click(function(){
    $("#nav-list").slideToggle(200);
  });
  $(".nav-link").click(function(){
    $("#nav-list").toggle();
  });
});
}
$(window).resize(function() {
  if ($(this).width() >= 769) {
    $("#nav-list").show();
    $("#nav-list").css("display","flex");
  }
  if($(window).width() <= 768) {
    $("#nav-list").hide();
  }
});
