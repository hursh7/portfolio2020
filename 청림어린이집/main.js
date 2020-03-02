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

//메인 서브메뉴 나오게 하기
$(document).ready(function(){
  var menu_list_img = document.getElementsByClassName('menu_img');

  $(menu_list_img[0]).mouseover(function(){
    $('.menu_list_sebu_1').addClass('active');
    $('#hellotext_img').css('left', '40vw');
  });
  $(menu_list_img[0]).mouseout(function(){
    $('.menu_list_sebu_1').removeClass('active');
    $('#hellotext_img').css('left', '0vw');
  });
  $(menu_list_img[1]).mouseover(function(){
    $('.menu_list_sebu_2').addClass('active');
    $('#hellotext_img').css('left', '40vw');
  });
  $(menu_list_img[1]).mouseout(function(){
    $('.menu_list_sebu_2').removeClass('active');
    $('#hellotext_img').css('left', '0vw');
  });
  $(menu_list_img[2]).mouseover(function(){
    $('.menu_list_sebu_3').addClass('active');
    $('#hellotext_img').css('left', '40vw');
  });
  $(menu_list_img[2]).mouseout(function(){
    $('.menu_list_sebu_3').removeClass('active');
    $('#hellotext_img').css('left', '0vw');
  });
  $(menu_list_img[3]).mouseover(function(){
    $('.menu_list_sebu_4').addClass('active');
    $('#hellotext_img').css('left', '40vw');
  });
  $(menu_list_img[3]).mouseout(function(){
    $('.menu_list_sebu_4').removeClass('active');
    $('#hellotext_img').css('left', '0vw');
  });


  $('.menu_list_sebu_1').mouseover(function(){
    $('.menu_list_sebu_1').addClass('active');
    $('#hellotext_img').css('left', '40vw');
  });
  $('.menu_list_sebu_1').mouseout(function(){
    $('.menu_list_sebu_1').removeClass('active');
    $('#hellotext_img').css('left', '0vw');
  });
  $('.menu_list_sebu_2').mouseover(function(){
    $('.menu_list_sebu_2').addClass('active');
    $('#hellotext_img').css('left', '40vw');
  });
  $('.menu_list_sebu_2').mouseout(function(){
    $('.menu_list_sebu_2').removeClass('active');
    $('#hellotext_img').css('left', '0vw');
  });
  $('.menu_list_sebu_3').mouseover(function(){
    $('.menu_list_sebu_3').addClass('active');
    $('#hellotext_img').css('left', '40vw');
  });
  $('.menu_list_sebu_3').mouseout(function(){
    $('.menu_list_sebu_3').removeClass('active');
    $('#hellotext_img').css('left', '0vw');
  });
  $('.menu_list_sebu_4').mouseover(function(){
    $('.menu_list_sebu_4').addClass('active');
    $('#hellotext_img').css('left', '40vw');
  });
  $('.menu_list_sebu_4').mouseout(function(){
    $('.menu_list_sebu_4').removeClass('active');
    $('#hellotext_img').css('left', '0vw');
  });
  //메인 서브메뉴 나오게 하기 끝
});
