$(document).ready(function(){
    //메뉴 해당섹션
    $(".gnb ul li a").click(function(e){
        e.preventDefault();
        $(this).addClass("active").parent().siblings().children("a").removeClass("active");
    });
    //탭메뉴
    $(".portfolio_tab a").click(function(e){
        e.preventDefault();
        $(this).addClass("current").siblings().removeClass("current");
    });
    //탭메뉴_분류
    $(".project").click(function(e){
        e.preventDefault();
        $(".tab02").show();
        $(".tab03").hide();  
    });
    $(".portfolio").click(function(e){
        e.preventDefault();
        $(".tab03").show();
        $(".tab02").hide();  
    });
    $(".all").click(function(e){
        e.preventDefault();
        $(".tab03").show();
        $(".tab02").show();  
    });

    //드롭다운
    $(".menu_trigger").click(function(e){
        e.preventDefault();
        $(this).toggleClass('active').siblings();
        $(".menu_drop").slideToggle(200);
    });
    //드롭다운_메뉴_클릭 시, 슬라이드업
    $(".menu_drop li a").click(function(e){
        e.preventDefault();
        $(".menu_drop").slideToggle(200);
        $(".menu_trigger").toggleClass('active').siblings();
    }); 
    //top_btn 스크롤 값에 따른 fade in/out
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $("#top_btn").fadeIn();
        } else {
            $("#top_btn").fadeOut();
        }                       
    });

        $("#top_btn").click(function() {
        $('html, body').animate({
            scrollTop : 0}, 400);
        return false;
    });
});

//타이핑 이벤트
$(window).on('scroll', function() {
    if($('.gnb ul li a[href="#home"]').hasClass("active")) {
        $('#home .main_text .typing_text').css('animation', 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite');
    } else {
        $('#home .main_text .typing_text').css('animation', 'none');
    }
    return false;
});

//스크롤 메뉴 색상 변경
$(window).on('scroll', function() {
        $("section").each(function() {
            if($(window).scrollTop() >= $(this).offset().top) {
                var id = $(this).attr('id');
                $('.gnb ul li a').removeClass('active');
                $('.gnb ul li a[href="#'+id+'"]').addClass('active');
            }
        });
    });

    //스킬 게이지 이벤트
    $(window).on('scroll', function() {
        if($('.gnb ul li a[href="#skill"]').hasClass("active")) {
            var i;
            var guage = "#skill .skill_wrap .guage_wrap .guage_bg .gg0";

            for (i = 1; i < 6; i++) {
                $(guage + i).css({'animation-name': 'mymove0'+i, 'animation-duration': '3s'});
            }
            return false;
        } else {
            $('#skill .skill_wrap .guage_wrap .guage_bg .guage').css('animation', 'none');
        }
        return false;
    });

// 헤더 페이지 이동 
function movePage (pageName) {
    var position = $(pageName).offset(); // 해당 태그의 좌표값을 구한다.
    $("html").stop().animate({scrollTop:position.top},500);      
}

// 팝업 오픈
function pop_open (this_pf) {
    $(this_pf).prev().fadeIn(); // this 앞에 팝업 fadein
    $("body").css("overflow-Y","hidden");
}

// 팝업 닫기
function pop_close () {
    $(".popup_wrap").fadeOut();
    $("body").css("overflow-Y","auto");
}

