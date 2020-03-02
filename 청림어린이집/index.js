$(document).ready(function() {
  $(window).scroll(function(){
      if ($(this).scrollTop() >= $('#menu1').offset().top-1) {
        $('#header').fadeIn();
      }
      else {
        $('#header').fadeOut();
      }
    }); //헤더가 나오고 숨고 제이쿼리

  var won = document.getElementsByClassName('menu_list_sebu_1');
  var gyo = document.getElementsByClassName('menu_list_sebu_2');
  var mo = document.getElementsByClassName('menu_list_sebu_3');
  var kid = document.getElementsByClassName('menu_list_sebu_4');
  var position;
  var home = document.getElementById('home_main');
  var menu1 = document.getElementById('menu1');
  var menu2 = document.getElementById('menu2');
  var menu3 = document.getElementById('menu3');
  var menu4 = document.getElementById('menu4');

  var count = 0;
  var scrollEvent = false;
  var wheel_data;

  $(won[0]).click(function() {
    count = 1;
    wheel_count();
    $('#right_1_1').show();
    $('#right_1_2').hide();
    $('#right_1_3').hide();
    $("#left_menu_1 p[0]").addClass("selected");
    $("#left_menu_1 p[1]").removeClass("selected");
    $("#left_menu_1 p[2]").removeClass("selected");
  });
  $(won[1]).click(function() {
    count = 1;
    wheel_count();
    $('#right_1_1').hide();
    $('#right_1_2').show();
    $('#right_1_3').hide();
  });
  $(won[2]).click(function() {
    count = 1;
    wheel_count();
    $('#right_1_1').hide();
    $('#right_1_2').hide();
    $('#right_1_3').show();
  });
  $(gyo[0]).click(function() {
    count = 2;
    wheel_count();
    $('#right_2_1').show();
    $('#right_2_2').hide();
    $('#right_2_3').hide();
  });
  $(gyo[1]).click(function() {
    count = 2;
    wheel_count();
    $('#right_2_1').hide();
    $('#right_2_2').show();
    $('#right_2_3').hide();
  });
  $(gyo[2]).click(function() {
    count = 2;
    wheel_count();
    $('#right_2_1').hide();
    $('#right_2_2').hide();
    $('#right_2_3').show();
  });
  $(mo[0]).click(function() {
    count = 3;
    wheel_count();
    $('#right_3_1').show();
    $('#right_3_2').hide();
  });
  $(mo[1]).click(function() {
    count = 3;
    wheel_count();
    $('#right_3_1').hide();
    $('#right_3_2').show();
  });
  $(kid[0]).click(function() {
    count = 4;
    wheel_count();
  });
















  var bt = document.getElementsByClassName('bt');
  var home_go = document.getElementById('logo_img');
  var position;
  var home = document.getElementById('home_main');
  var menu1 = document.getElementById('menu1');
  var menu2 = document.getElementById('menu2');
  var menu3 = document.getElementById('menu3');
  var menu4 = document.getElementById('menu4');

  var count = 0;
  var scrollEvent = false;
  var wheel_data;

  $(home_go).click(function() {
    count = 0;
    wheel_count();
  });
  $(bt[0]).click(function() {
    count = 1;
    wheel_count();
  });
  $(bt[1]).click(function() {
    count = 2;
    wheel_count();
  });
  $(bt[2]).click(function() {
    count = 3;
    wheel_count();
  });
  $(bt[3]).click(function() {
    count = 4;
    wheel_count();
  });


  $("html").on('mousewheel', function(c) {
    wheel_data = c.originalEvent.wheelDelta;
    c.preventDefault();
    if (wheel_data > 0 && count > 0 && scrollEvent == false) {
      scrollEvent = true;
      count --;
      wheel_count();
      setTimeout(function(){
        scrollEvent = false;
      }, 500);
    }else if (wheel_data < 0 && count < 4 && scrollEvent == false) {
      c.preventDefault();
      scrollEvent = true;
      count ++;
      wheel_count();
      setTimeout(function(){
        scrollEvent = false;
      }, 500);
    }
  });

  function wheel_count() {
      if (count == 0) {
        position = $("#home_main").offset();
        $("html").stop().animate({scrollTop:position.top},500);
      }
      else if (count == 1) {
        position = $("#menu1").offset();
        $("html").stop().animate({scrollTop:position.top},500);
        $(bt[0]).css("color", "#c1e1b8");
        $(bt[1]).css("color", "white");
        $(bt[2]).css("color", "white");
        $(bt[3]).css("color", "white");
      }else if (count == 2) {
        position = $("#menu2").offset();
        $("html").stop().animate({scrollTop:position.top},500);
        $(bt[1]).css("color", "#facdd6");
        $(bt[0]).css("color", "white");
        $(bt[2]).css("color", "white");
        $(bt[3]).css("color", "white");
      }else if (count == 3) {
        position = $("#menu3").offset();
        $("html").stop().animate({scrollTop:position.top},500);
        $(bt[2]).css("color", "#fed56b");
        $(bt[0]).css("color", "white");
        $(bt[1]).css("color", "white");
        $(bt[3]).css("color", "white");
      }else if (count == 4) {
        position = $("#menu4").offset();
        $("html").stop().animate({scrollTop:position.top},500);
        $(bt[3]).css("color", "#bde7fb");
        $(bt[0]).css("color", "white");
        $(bt[1]).css("color", "white");
        $(bt[2]).css("color", "white");
      }
    }
  //
  // function wheel_count() {
  //   bt_color();
  //   if (count == 0) {
  //     position = $("#home_main").offset();
  //     $("html").stop().animate({scrollTop:position.top},500);
  //   }
  //   else if (count == 1) {
  //     position = $("#menu1").offset();
  //     $("html").stop().animate({scrollTop:position.top},500);
  //     $(bt[0]).css("color", "orange");
  //   }else if (count == 2) {
  //     position = $("#menu2").offset();
  //     $("html").stop().animate({scrollTop:position.top},500);
  //     $(bt[1]).css("color", "orange");
  //   }else if (count == 3) {
  //     position = $("#menu3").offset();
  //     $("html").stop().animate({scrollTop:position.top},500);
  //     $(bt[2]).css("color", "orange");
  //   }else if (count == 4) {
  //     position = $("#menu4").offset();
  //     $("html").stop().animate({scrollTop:position.top},500);
  //     $(bt[3]).css("color", "orange");
  //   }
  // }
  start_ani();
  function start_ani() {
    position = $("#menu4").offset();
    $("html").stop().animate({scrollTop:position.top},0);
    position = $("#menu1").offset();
    $("html").stop().animate({scrollTop:position.top},1500);
    wheel_count();
  }
  //
  // function bt_color() {
  //   $(bt[0]).css("color", "white");
  //   $(bt[1]).css("color", "white");
  //   $(bt[2]).css("color", "white");
  //   $(bt[3]).css("color", "white");
  // }

  //원소개 내용 바꾸기
  $('#right_1_1').show();
  $('#right_1_2').hide();
  $('#right_1_3').hide();

  $('#menu_1_1').click(function(){
    $('#right_1_2').hide();
    $('#right_1_3').hide();
    $('#right_1_1').fadeIn();
    return false;
  });
  $('#menu_1_2').click(function(){
    $('#right_1_1').hide();
    $('#right_1_3').hide();
    $('#right_1_2').fadeIn();
    return false;
  });
  $('#menu_1_3').click(function(){
    $('#right_1_1').hide();
    $('#right_1_2').hide();
    $('#right_1_3').fadeIn();
    return false;
  });
  // 원소개 내용 바꾸기 끝
  //교육안내 내용 바꾸기
  $('#right_2_1').show();
  $('#right_2_2').hide();
  $('#right_2_3').hide();

  $('#menu_2_1').click(function(){
    $('#right_2_2').hide();
    $('#right_2_3').hide();
    $('#right_2_1').fadeIn();
    return false;
  });
  $('#menu_2_2').click(function(){
    $('#right_2_1').hide();
    $('#right_2_3').hide();
    $('#right_2_2').fadeIn();
    return false;
  });
  $('#menu_2_3').click(function(){
    $('#right_2_1').hide();
    $('#right_2_2').hide();
    $('#right_2_3').fadeIn();
    return false;
  });
  // 교육안내 내용 바꾸기 끝
  // 교육환경 내용 바꾸기 시작
    $('#gallery_list').show();
    $('#gallery_list2').hide();
    $('#gallery_list3').hide();
    $('#gallery_list4').hide();

    $('#room1').click(function(){
    $('#gallery_list').show();
    $('#gallery_list2').hide();
    $('#gallery_list3').hide();
    $('#gallery_list4').hide();
    return false;
  });
  $('#room2').click(function(){
    $('#gallery_list').hide();
    $('#gallery_list2').show();
    $('#gallery_list3').hide();
    $('#gallery_list4').hide();
    return false;
  });
  $('#room3').click(function(){
    $('#gallery_list').hide();
    $('#gallery_list2').hide();
    $('#gallery_list3').show();
    $('#gallery_list4').hide();
    return false;
  });
  $('#room4').click(function(){
    $('#gallery_list').hide();
    $('#gallery_list2').hide();
    $('#gallery_list3').hide();
    $('#gallery_list4').show();
    return false;
  });
  // 교육환경 내용 바꾸기 끝

  //입학안내 내용 바꾸기
  $('#right_3_1').show();
  $('#right_3_2').hide();

  $('#menu_3_1').click(function(){
    $('#right_3_2').hide();
    $('#right_3_1').fadeIn();
    return false;
  });
  $('#menu_3_2').click(function(){
    $('#right_3_1').hide();
    $('#right_3_2').fadeIn();
    return false;
  });
  // 입학안내 내용 바꾸기 끝

  // 교육과정 내용 바꾸기 시작
      $('#gallery_list1').show();
      $('#gallery_list_2').hide();
      $('#gallery_list_3').hide();
      $('#gallery_list_4').hide();

      $('#room_1').click(function(){
      $('#gallery_list1').show();
      $('#gallery_list_2').hide();
      $('#gallery_list_3').hide();
      $('#gallery_list_4').hide();
      return false;
    });
    $('#room_2').click(function(){
      $('#gallery_list1').hide();
      $('#gallery_list_2').show();
      $('#gallery_list_3').hide();
      $('#gallery_list_4').hide();
      return false;
    });
    $('#room_3').click(function(){
      $('#gallery_list1').hide();
      $('#gallery_list_2').hide();
      $('#gallery_list_3').show();
      $('#gallery_list_4').hide();
      return false;
    });
    $('#room_4').click(function(){
      $('#gallery_list1').hide();
      $('#gallery_list_2').hide();
      $('#gallery_list_3').hide();
      $('#gallery_list_4').show();
      return false;
    });
    // 교육과정 내용 바꾸기 끝

  // 교육환경 메뉴 버튼 색
  $("#gallery_tab p").each(function () {
    $(this).click(function () {
      $(this).addClass("selected2");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
      $(this).siblings().removeClass("selected2");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
    });
  });
  // 교육환경 메뉴 버튼 색 끝

  // 교육과정 메뉴 버튼 색
  $(function(){
  var room_1 = $('#room_1');
  var room_2 = $('#room_2');
  var room_3 = $('#room_3');
  var room_4 = $('#room_4');

  // $('#room_1').css('border-bottom','4px solid #c0d683');
  //
  //   room_1.click(function(){
  //   room_1.css('border-bottom','4px solid #c0d683');
  //   room_2.css('border-bottom','');
  //   room_3.css('border-bottom','');
  //   room_4.css('border-bottom','');
  // });
  //
  //   room_2.click(function(){
  //   room_1.css('border-bottom','');
  //   room_2.css('border-bottom','4px solid #274b1d');
  //   room_3.css('border-bottom','');
  //   room_4.css('border-bottom','');
  // });
  //   room_3.click(function(){
  //   room_1.css('border-bottom','');
  //   room_2.css('border-bottom','');
  //   room_3.css('border-bottom','4px solid #f68056');
  //   room_4.css('border-bottom','');
  // });
  //   room_4.click(function(){
  //   room_1.css('border-bottom','');
  //   room_2.css('border-bottom','');
  //   room_3.css('border-bottom','');
  //   room_4.css('border-bottom','4px solid #6a3786');
  // });

  $('#room_1').css({'background':'#c0d683', 'color':'#fff'});

  room_1.click(function(){
  room_1.css({'background':'#c0d683', 'color':'#fff'});
  room_2.css({'background':'', 'color':'#000'});
  room_3.css({'background':'', 'color':'#000'});
  room_4.css({'background':'', 'color':'#000'});
});

  room_2.click(function(){
  room_1.css({'background':'', 'color':'#000'});
  room_2.css({'background':'#274b1d', 'color':'#fff'});
  room_3.css({'background':'', 'color':'#000'});
  room_4.css({'background':'', 'color':'#000'});
});
  room_3.click(function(){
  room_1.css({'background':'', 'color':'#000'});
  room_2.css({'background':'', 'color':'#000'});
  room_3.css({'background':'#f68056', 'color':'#fff'});
  room_4.css({'background':'', 'color':'#000'});
});
  room_4.click(function(){
  room_1.css({'background':'', 'color':'#000'});
  room_2.css({'background':'', 'color':'#000'});
  room_3.css({'background':'', 'color':'#000'});
  room_4.css({'background':'#6a3786', 'color':'#fff'});
});
});
  // 교육과정 메뉴 버튼 색 끝

  // 메인 게시판 버튼 색
  $("#won1").each(function () {
    $("#won1").click(function () {
      $("#menu_1_1").addClass("selected");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
      $("#menu_1_1").siblings().removeClass("selected");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
    });
  });

  $("#won2").each(function () {
    $("#won2").click(function () {
      $("#menu_1_2").addClass("selected");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
      $("#menu_1_2").siblings().removeClass("selected");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
    });
  });

  $("#won3").each(function () {
    $("#won3").click(function () {
      $("#menu_1_3").addClass("selected");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
      $("#menu_1_3").siblings().removeClass("selected");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
    });
  });

  $("#gyo1").each(function () {
    $("#gyo1").click(function () {
      $("#menu_2_1").addClass("selected");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
      $("#menu_2_1").siblings().removeClass("selected");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
    });
  });

  $("#gyo2").each(function () {
    $("#gyo2").click(function () {
      $("#menu_2_2").addClass("selected");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
      $("#menu_2_2").siblings().removeClass("selected");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
    });
  });

  $("#gyo3").each(function () {
    $("#gyo3").click(function () {
      $("#menu_2_3").addClass("selected");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
      $("#menu_2_3").siblings().removeClass("selected");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
    });
  });

  $("#mo1").each(function () {
    $("#mo1").click(function () {
      $("#menu_3_1").addClass("selected");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
      $("#menu_3_1").siblings().removeClass("selected");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
    });
  });

  $("#mo2").each(function () {
    $("#mo2").click(function () {
      $("#menu_3_2").addClass("selected");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
      $("#menu_3_2").siblings().removeClass("selected");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
    });
  });
  // 메인 게시판 버튼 색 끝

  // 원소개 메뉴 버튼 색
  $("#left_menu_1 p").each(function () {
      $(this).click(function () {
          $(this).addClass("selected");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
          $(this).siblings().removeClass("selected");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
      });
  });
  // 원소개 메뉴 버튼 색 끝
  // 교육안내 메뉴 버튼 색
  $("#left_menu_2 p").each(function () {
      $(this).click(function () {
          $(this).addClass("selected");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
          $(this).siblings().removeClass("selected");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
      });
  });
  // 교육안내 메뉴 버튼 색 끝
  // 입학안내 메뉴 버튼 색
  $("#left_menu_3 p").each(function () {
      $(this).click(function () {
          $(this).addClass("selected");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
          $(this).siblings().removeClass("selected");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
      });
  });
  // 입학안내 메뉴 버튼 색 끝



});

// 오토스크롤

// 오토스크롤 끝
//
//
