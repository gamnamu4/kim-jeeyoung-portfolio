$('.menu li').mouseenter(function(){
  $(this).children('.sub-menu').slideDown()
})
$('.menu li').mouseleave(function(){
  $(this).children('.sub-menu').slideUp()
})