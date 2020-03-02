// 메인 사진 자동전환
var showimg;
var nextimg;
function fadeInOut() {
  showimg = $("#content img:eq(0)");
  nextimg = $("#content img:eq(1)");
  nextimg.addClass("active");
  nextimg.css("opacity", "0")
  .animate({opacity:1}, 1000, function(){$("#content").append(showimg);
  showimg.removeClass("active");
  });
}

var timer = setInterval("fadeInOut()", 4000);

$(function(){timer = setInterval("fadeInOut()", 4000);});

// $(function(){$("div#content").hover(function(){clearInterval(timer);},
//   function(){timer = setInterval("fadeInOut()", 4000);}
// );})
// 메인 사진 자동전환 끝


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
      $("#main_back").slideToggle();
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

  // 다른곳 눌러도 메뉴 닫히기
  $("#main_back").click(function(){
    $("#menu_total").slideUp();
    $("#main_back").slideUp();
    $('.line').removeClass('init');
    $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
    $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
    $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse');
  });
});
