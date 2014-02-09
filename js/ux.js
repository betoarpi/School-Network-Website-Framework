$(function() {
// Sliding banners
  $('.models-slider ul').cycle({
    fx:'scrollHorz',
    speed:  'slow',
    timeout: 12000,
    pager:  '.slider-control',
    cleartypeNoBg: true,
    pause: true
  });

  $('.levels-slider ul').cycle({
    fx:'fade',
    speed:  '1500',
    timeout: 10000,
    pager:  '.slider-control-2',
    cleartypeNoBg: true,
    pause: true
  });

  $('.quotes-container').cycle({
    fx:'fade',
    speed:  '1500',
    timeout: 8500,
    cleartypeNoBg: true,
    pause: false
  });

// Blog Post hide and show functionality
  function showPost(){
    $(this).children('article').slideToggle();
  }

  $('.post > a.slide-trigger').on('mouseenter', showPost);
  $('.post > a.slide-trigger').on('mouseleave', showPost);

  $(".various").fancybox({
    maxWidth  : 800,
    maxHeight : 600,
    fitToView : false,
    width   : '70%',
    height    : '70%',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none'
  });

// Video button show and hide
  function showVideoBtn(){
    $(this).children('.video-button').fadeToggle();
  }

  $('#video-banner').on('mouseenter', showVideoBtn);
  $('#video-banner').on('mouseleave', showVideoBtn);

// Menu Functionality
  function showMenu(){
    $('#main-nav').toggleClass('show-nav');
  }

  $('.nav-button').on('click', showMenu);
  $('#main-nav > ul > li > a').on('click', showMenu);

  function hasClassNav(){
    if($('#main-nav').hasClass('show-nav')){
      $(document).on('click', showMenu)
    } else {
      $('.nav-button').on('click', showMenu);
    }
  }

  //$(document).on('click', hasClassNav);

// Sticky Nav
  $("#header").sticky({topSpacing:0});

// Smooth Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

// Login Box
  function showLogin(){
    $('.login-form-container').toggleClass('show-login');
    event.preventDefault();
  }

  function loginActive(){
    $('.login-wrapper').toggleClass('login-active');
    $('.login-wrapper > a > span.glyphicon').toggleClass('glyphicon-chevron-up');
    $('.login-wrapper > a > span.glyphicon').toggleClass('glyphicon-chevron-down');
  }

  $('.login').on('click', showLogin);
  $('.login').on('click', loginActive);

// Tooltip for maps
  $('a.campus-la-calma').tooltip('hide');
  $('a.campus-sta-anita').tooltip('hide');
  $('a.campus-queretaro').tooltip('hide');
  $('a.campus-puebla').tooltip('hide');
  $('a.campus-morelia').tooltip('hide');

// Post Slider Functionality
  $('.post-slider ul').cycle({
    fx:'scrollHorz',
    speed:  '500',
    timeout: 8000,
    next:    "#next",
    prev:    "#prev",
    cleartypeNoBg: true,
    pause: true
  });

  $(".fancybox").fancybox({
    maxWidth  : 800,
    maxHeight : 600,
    fitToView : false,
    width   : '70%',
    height    : '70%',
    openEffect  : 'fade',
    closeEffect : 'fade'
  });

  $('#close-js').click(function(){
    parent.history.back();
    return false;
  });
});