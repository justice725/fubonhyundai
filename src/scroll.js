import $ from 'jquery';

$(function(){
    $(window).on('scroll', function(){
        var ht = $(window).scrollTop(); // 현재 스크롤 좌표
        var wHt = $(window).innerHeight();
        var deviceHt = $(window).outerHeight(true); // 전체 높이 - 현재 디바이스 크기의 탑 좌표 값
        var docHt = $(document).height(); // 전체 높이

        var opa = (docHt-deviceHt); // opacity 최대값 1 최소값 0을 만들기 위한 스크롤 최대값
        var act = (500 / opa); // translate 값을 정하기 위한 값
        
        if ( ht > 0 ) {
            $(".re_main_menu").stop().css({opacity:1-(ht / opa), transform:"translate3d(0px, "+((ht / act)*-1.5)+"px, 0px)"}); // 오른쪽 메뉴 스크롤 애니메이션 조절
            $(".re_main_top_title_box").stop().css({opacity:1-(ht / opa), transform:"translate3d(0px, "+((ht / act)*-0.5)+"px, 0px)"}) // 왼쪽 메뉴 스크롤 애니메이션 조절

            $(".re_main_head__shape__left_top").stop().css({transform:"translate3d(0px, "+((ht / act)*-1)+"px, 0px)"}); // 배너 이미지 애니메이션 조절
            $(".re_main_head__shape__left_bottom").stop().css({transform:"translate3d(0px, "+((ht / act)*+0.5)+"px, 0px)"}); // 배너 이미지 애니메이션 조절
            $(".re_main_head__shape__right_top").stop().css({transform:"translate3d(0px, "+((ht / act)*+0.7)+"px, 0px)"}); // 배너 이미지 애니메이션 조절
            $(".re_main_head__shape__right_bottom").stop().css({transform:"translate3d(0px, "+((ht / act)*-1.1)+"px, 0px)"}); // 배너 이미지 애니메이션 조절
        }
    });
});