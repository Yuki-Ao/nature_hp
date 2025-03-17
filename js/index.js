
$(function() {
    var h = $(window).height();
    $('#loader-bg ,#loader').height(h).css('display','block');
  });
    
  $(window).load(function () {
    //$('#loader-bg').delay(1200).fadeOut(800);
    //$('#loader').delay(900).fadeOut(300);
  });
  
  $(function(){
    /* Scroll */
    if (window.matchMedia('(max-width: 900px)').matches) {
      //SP
      $('a[href^="#"]').click(function(){
        var headerH = $('header').height();
        var speed = 800;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerH;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    } else if (window.matchMedia('(min-width:901px)').matches) {
      //PC
      $('a[href^="#"]').click(function(){
        var speed = 800;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    }
    
  });
  
  $(function () {
      "use strict";
    $('[data-fancybox="gallery"]').fancybox({
      buttons: ["close"],
      transitionEffect:false,
      animationEffect:"fade",
      clickContent: 'close',
      infobar: false
    });
    
    // video size set
    $(window).on('load',function(){
      $('#loader-bg').fadeOut(800);
      $('#loader').fadeOut(300);
    });
    
    var resizeTimer = false;
    $(window).on('resize',function(){
      if (resizeTimer !== false) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(function() {
      }, 100);
    });

    /* main */
    function getMainRatio(mainW, mainH, baseW, baseH) {
          if ((mainH / mainW) < (baseH / baseW))  return (mainW / baseW);
          else return (mainH / baseH);
      }
    /* about video */
    function getAboutRatio(videoW, videoH, baseW, baseH) {
          if ((videoH / videoW) < (baseH / baseW))  return (videoW / baseW);
          else return (videoH / baseH);
      }
    /* recruit video */
    function getRecruitRatio(videoW, videoH, baseW, baseH) {
          if ((videoH / videoW) < (baseH / baseW))  return (videoW / baseW);
          else return (videoH / baseH);
      }
    
    /*animation*/
    $('.movetext').each(function(){
      $(this).children().addBack().contents().each(function() {
        if (this.nodeType == 3) {
          $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
        }
      });
      $(this).on('inview',function(){
        $(this).css({'opacity':1});
          for (var i = 0; i <= $(this).children('span').length; i++) {
          $(this).children('span').eq(i).delay(20*i).animate({'opacity':1},1000);
        }
      });
    });
    $('.cover').on('inview',function(){
      $(this).addClass('show');
    });
    $('.cover_fast').on('inview',function(){
      $(this).addClass('show');
    });
    $('.entry_list').on('inview',function(){
      $('.entry_list li').each(function(i){
        $(this).delay((100 * i) + 500).queue(function(){$(this).addClass('show')});
      });
    });
    $('.about_photo').on('inview',function(){
      $('.about_photo li').each(function(i){
        $(this).delay((100 * i) + 800).queue(function(){$(this).addClass('show')});
      });
    });
    $('.staff_list').on('inview',function(){
      $('.staff_list li').each(function(i){
        $(this).delay((100 * i) + 500).queue(function(){$(this).addClass('show')});
      });
    });
    $('.style_list').on('inview',function(){
      $('.style_list').each(function(i){
        $(this).delay((100 * i) + 250).queue(function(){$(this).addClass('show')});
      });
    });
    $('.fade').on('inview',function(){
      $(this).delay(800).queue(function(){$(this).addClass('show')});
    });
    
    
    //SOUND
    var player = document.getElementById("bgm")
      var sound = false;
      var btnOff = $(document.getElementById('btn_sound_off'));
      var btnOn = $(document.getElementById('btn_sound_on'));
      btnOff.css("display", "none");
      btnOn.css("display", "block");
      
      $('#btn_sound_off').on('click',function() {
          player.pause();
          sound = true;
          setSoundBtn();
          return false;
      });
      $('#btn_sound_on').on('click',function() {
          player.play();
          sound = false;
          setSoundBtn();
          return false;
      });
      
      function setSoundBtn(){
          if(sound==true){
              btnOff.css("display", "none");
              btnOn.css("display", "block");
          }
          if(sound==false){
              btnOff.css("display", "block");
              btnOn.css("display", "none");
          }
      }
  });
  
  /*style*/
  const defaultDispCnt = 12;
  const addDispCnt = 12;
  
  $(function ($) {
      $(function () {
          let maxDispCnt = 0;
          let currentDispCnt = 0;
          let tileList = $('.style_list').children('li');
  
          $(tileList).each(function (i) {
              if (i < defaultDispCnt) {
                  $(this).show().css("display", "block").addClass('active');
          //$(this).css("display", "block").delay(100 * i).queue(function(){$(this).addClass('active')});
                  currentDispCnt++;
              }
              maxDispCnt++;
  
              if (maxDispCnt > currentDispCnt) {
                  $('#style .bt_more').show().css("display", "table");
              }
          });
  
          $('#style .bt_more').click(function () {
              var newCount = currentDispCnt + addDispCnt;
              $(tileList).each(function (i) {
                  if (currentDispCnt <= i && i < newCount) {
            $(this).css("display", "block").delay(20 * i).queue(function(){$(this).addClass('active')});
            currentDispCnt++;
                  }
              });
              if (maxDispCnt <= newCount) {
                  $(this).addClass('hide');
              }
              return false;
          });
      });
  });