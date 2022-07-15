$(function(){
  // Scroll change download
  $(window).scroll(function(){
    if($(window).scrollTop() > 500 ) {
      $('.download').addClass('active')
    }
    else {
      $('.download').removeClass('active')
    }
  })

  // Sitemap accordion
  $('.link-item-title').click(function(){
    // $(this).next().slideToggle()
    $(this).next().slideDown()
    $(this).parent().siblings().children('.link-item-content').slideUp()
  })
})