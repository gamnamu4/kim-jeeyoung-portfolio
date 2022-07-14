$(function(){
  /* Scroll Change Download */
  $(window).scroll(function(){
    if($(window).scrollTop() > 500) {
      $('.download').addClass('active')
    }
    else {
      $('.download').removeClass('active')
    }
  })