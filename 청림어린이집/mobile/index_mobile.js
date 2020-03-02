// 제이쿼리 시작
$(document).ready(function(){
  // 슬라이드 메뉴 토글
  var top_menu = document.getElementsByClassName('top_menu');
  var bottom_menu = document.getElementsByClassName('bottom_menu');

  $(top_menu[0]).click(function(){
    $(bottom_menu[0]).slideToggle();
    $(bottom_menu[1]).slideUp();
    $(bottom_menu[2]).slideUp();
    $(bottom_menu[3]).slideUp();
  });
  $(top_menu[1]).click(function(){
    $(bottom_menu[1]).slideToggle();
    $(bottom_menu[0]).slideUp();
    $(bottom_menu[2]).slideUp();
    $(bottom_menu[3]).slideUp();
  });
  $(top_menu[2]).click(function(){
    $(bottom_menu[2]).slideToggle();
    $(bottom_menu[0]).slideUp();
    $(bottom_menu[1]).slideUp();
    $(bottom_menu[3]).slideUp();
  });
  $(top_menu[3]).click(function(){
    $(bottom_menu[3]).slideToggle();
    $(bottom_menu[0]).slideUp();
    $(bottom_menu[1]).slideUp();
    $(bottom_menu[2]).slideUp();
  });

  //햄버거 모양 변화
  $('#line-wrapper').click(function(){
    $('.line').removeClass('init');
    $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
    $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
    $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse');
  })

  // 슬라이드 메뉴 나오게 하기
  $("#wrapper").click(function(){
    $("#menu_total").slideToggle();
  });

  $(top_menu[0]).click(function(){
    $(top_menu[0]).toggleClass("active");
    $(top_menu[1]).removeClass("active");
    $(top_menu[2]).removeClass("active");
    $(top_menu[3]).removeClass("active");
  });
  $(top_menu[1]).click(function(){
    $(top_menu[1]).toggleClass("active");
    $(top_menu[0]).removeClass("active");
    $(top_menu[2]).removeClass("active");
    $(top_menu[3]).removeClass("active");
  });
  $(top_menu[2]).click(function(){
    $(top_menu[2]).toggleClass("active");
    $(top_menu[0]).removeClass("active");
    $(top_menu[1]).removeClass("active");
    $(top_menu[3]).removeClass("active");
  });
  $(top_menu[3]).click(function(){
    $(top_menu[3]).toggleClass("active");
    $(top_menu[0]).removeClass("active");
    $(top_menu[1]).removeClass("active");
    $(top_menu[2]).removeClass("active");
  });

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
    // 교육환경 메뉴 버튼 색
$("#gallery_tab p").each(function () {
  $(this).click(function () {
    $(this).addClass("selected2");                      //클릭된 부분을 상단에 정의된 CCS인 selected클래스로 적용
    $(this).siblings().removeClass("selected2");  //siblings:형제요소들,    removeClass:선택된 클래스의 특성을 없앰
  });
});
// 교육환경 메뉴 버튼 색 끝
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

    // 교육과정 메뉴 버튼 색
    $(function(){
    var room_1 = $('#room_1');
    var room_2 = $('#room_2');
    var room_3 = $('#room_3');
    var room_4 = $('#room_4');

    $('#room_1').css('border-bottom','4px solid #c0d683');
      room_1.click(function(){
      room_1.css('border-bottom','4px solid #c0d683');
      room_2.css('border-bottom','');
      room_3.css('border-bottom','');
      room_4.css('border-bottom','');
    });
      room_2.click(function(){
      room_1.css('border-bottom','');
      room_2.css('border-bottom','4px solid #274b1d');
      room_3.css('border-bottom','');
      room_4.css('border-bottom','');
    });
      room_3.click(function(){
      room_1.css('border-bottom','');
      room_2.css('border-bottom','');
      room_3.css('border-bottom','4px solid #f68056');
      room_4.css('border-bottom','');
    });
      room_4.click(function(){
      room_1.css('border-bottom','');
      room_2.css('border-bottom','');
      room_3.css('border-bottom','');
      room_4.css('border-bottom','4px solid #6a3786');
    });
  });
  //교육과정 메뉴 버튼 색 끝
});
