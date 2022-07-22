$(function(){
  // Trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('section, .menu a').click(function(){
    $('.gnb').removeClass('active')
    $('.trigger').removeClass('active')
  })

  // Smooth scrolling
  $('.menu a').click(function(e){
    $.scrollTo(this.hash || 0, 900)
  })

  // Change CSS with Scroll
  $(window).scroll(function(){
    if($(window).scrollTop() > 50 ) {
      $('header').addClass('active')
    }
    else {
      $('header').removeClass('active')
    }
  })
})


