$(function(){
  $('.accordion-item .title').click(function(){
    $('.accordion-item .content').stop().slideToggle()
  })
})