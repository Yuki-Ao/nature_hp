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
  });
  
  var resizeTimer = false;
  $(window).on('resize',function(){
    if (resizeTimer !== false) {
      clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(function() {
    }, 100);
  });
  
  /* footer video */
  function getFooterRatio(footerW, footerH, baseW, baseH) {
		if ((footerH / footerW) < (baseH / baseW))  return (footerW / baseW);
		else return (footerH / baseH);
	}
});
