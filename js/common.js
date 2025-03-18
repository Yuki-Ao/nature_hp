$(function(){
	"use strict";
  
 
  //menu
  var flag     = false;
  var $menu    = $('.gnav');
  var $menuBtn = $('.menu_btn');
  var $menuIcon = $('.menu_btn_icon');
  $menuBtn.on('click', function() {
    if (!flag) {
      var scrollTop = $(window).scrollTop();
      $menuIcon.toggleClass("close");
      $menu.fadeIn(400, "easeInOutQuad", function() {
        flag = true;
      });
    } else {
      $('html,body').scrollTop(scrollTop);
      $menuIcon.removeClass("close");
      $menu.fadeOut(400, "easeInOutQuad", function() {
        flag = false;
      });
    }
  });
  $('.gnav a').click(function(){
    $menuIcon.removeClass("close");
    $menu.fadeOut(400, "easeInOutQuad", function() {
      flag = false;
    });
  });
  
  // video size set
  $(window).on('load',function(){
      setVideo();
  });
  
  var resizeTimer = false;
  $(window).on('resize',function(){
    if (resizeTimer !== false) {
      clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(function() {
      setVideo();
    }, 100);
  });
  
  function setVideo(){
    var baseW = 1280;
    var baseH = 720;
    
    /* footer video */
    var footerW = $('.footer_video_wrapper').outerWidth();
    var footerH = $('.footer_video_wrapper').outerHeight();
    var footerRation = getFooterRatio(footerW, footerH, baseW, baseH);
    $('.footer_video_wrapper .video').css({
			'width':parseInt(baseW * footerRation)+2,
			'height':parseInt(baseH * footerRation)+2,
			'margin-top':-(parseInt(baseH * footerRation) - footerH) / 2,
			'margin-left':-(parseInt(baseW * footerRation) - footerW) / 2
		});
  }
  /* footer video */
  function getFooterRatio(footerW, footerH, baseW, baseH) {
		if ((footerH / footerW) < (baseH / baseW))  return (footerW / baseW);
		else return (footerH / baseH);
	}
});
