if ($(window).width() <= 768) {
$(function() {
  $("#nav-btn").click(function(){
    $("#nav-list").slideToggle(200);
  });
});
}
$(window).resize(function() {
  if ($(this).width() >= 769) {
    $("#nav-list").show();
    $("#nav-list").css("display","flex");
  }
});
