$(function () {
    //AOS initialize
    AOS.init();

    //background-color scroll시 변경
    var bgColor = [
    //black
    "#0f151f",
    //white
    "#fdfcf8",
    //green
    "#3cb14a",
  ];
    $(window).scroll(function () {
        sct = $(window).scrollTop();
        var CHANGE_TOP_VALUE = 500;
        societyTop = $("#society").offset().top - CHANGE_TOP_VALUE;
        newsTop = $("#news").offset().top - CHANGE_TOP_VALUE;
        recruitTop = $("#recruit").offset().top - CHANGE_TOP_VALUE;

        if (sct > societyTop && sct < newsTop) {
            $("body").css({
                backgroundColor: bgColor[0],
            });
        } else if (sct > newsTop && sct < recruitTop) {
            $("body").css({
                backgroundColor: bgColor[1],
            });
        } else if (sct > recruitTop) {
            $("body").css({
                backgroundColor: bgColor[2],
            });
        } else if (sct < societyTop) {
            $("body").css({
                backgroundColor: bgColor[1],
            });
        }
    });

    //header toggle menu클릭 시, menu 왼쪽에서 슬라이드
    $(".header__toggle").click(function () {
        $(".menu-slide")
            .stop()
            .animate({
                    width: "100%",
                },
                500
            )
            .css({
                visibility: "visible",
            });

        $(".menu-wrap").css({
            visibility: "visible",
        });

        $(".slide-btn").css({
            visibility: "visible",
        });
    });

    //header menu close btn
    $(".menu__close").click(function () {
        $(".menu-slide").stop().animate({
                width: "0%",
            },
            500
        );

        $(".menu-wrap").css({
            visibility: "hidden",
        });

        $(".slide-btn").css({
            visibility: "hidden",
        });
    });

    //스크롤 내렸을 때 헤더 사라짐,올렸을 때 헤더 나타남
    var headerHeight = $("header").height();
    var header = $("header");
    var lastScrollTop = 0;
    $(window).scroll(function () {
        sct = $(window).scrollTop();

        //scroll top값 header height보다 작을 때 메뉴바 투명해짐
        if (sct <= headerHeight) {
            header.css({
                opacity: 1,
                visibility: "visible",
                backgroundColor: "transparent",
            });
            $(".header__toggle>img").attr({
                src: "img/pc_toggle.png",
            });
            return;
        }

        if (sct > lastScrollTop && lastScrollTop > 0) {
            //아래로 스크롤 시 메뉴바 사라짐
            header.css({
                opacity: 0,
                visibility: "hidden",
            });
        } else if (sct + $(window).height() < $(document).height()) {
            //위로 스크롤 시 메뉴바 생겨남
            header.css({
                opacity: 1,
                visibility: "visible",
                backgroundColor: "#fdfcf8",
            });
            $(".header__toggle>img").attr({
                src: "img/header_toggle-green.png",
            });
        }
        lastScrollTop = sct;
    });

    //더보기 버튼 hover시 value 0 -> 100% 이벤트
    var viewMoreWrap = $(".view-more");
    var viewMoreBtn = $(".view-more__btn");
    var viewMoreValue = $(".view-more__value");
    viewMoreWrap
        .each(function (index) {
            $(this).attr("data-index", index);
        })
        .hover(
            function () {
                btnIndex = $(this).attr("data-index");

                viewMoreValue.eq(btnIndex).stop().animate({
                        left: 0,
                    },
                    500
                );

                viewMoreBtn.eq(btnIndex).css({
                    color: "#fdfcf8",
                });
                $(".view-more__btn>img").eq(btnIndex).attr({
                    src: "img/white arrow.png",
                });
            },
            function () {
                viewMoreValue.stop().animate({
                        left: "-100%",
                    },
                    500
                );

                viewMoreBtn.css({
                    color: "#3cb14a",
                });
                $(".view-more__btn>img").attr({
                    src: "img/green arrow.png",
                });
            }
        );

    //사회공헌활동 아이콘 hover시 색깔 변경 & transform(rotate)
    var greenIconSrc = [
    "img/sec3-share_icon_green.png",
    "img/sec3-together_icon_green.png",
    "img/sec3-give_icon_green.png",
    "img/sec3-cheer_icon_green.png",
  ];

    var whiteIconSrc = [
    "img/sec3-share_icon_white.png",
    "img/sec3-together_icon_white.png",
    "img/sec3-give_icon_white.png",
    "img/sec3-cheer_icon_white.png",
  ];

    var i = 0;
    $(".society__icon>img")
        .each(function (index) {
            $(this).attr("data-index", index);
        })
        .hover(
            function () {
                iconIndex = $(this).attr("data-index");
                if ($(this).attr("data-index") == iconIndex) {
                    $(this).attr({
                        src: greenIconSrc[iconIndex],
                    });
                    $(this).stop().transition({
                            rotate: "-15deg",
                        },
                        300,
                        "ease-in"
                    );
                    $(".society__title").eq(iconIndex).css({
                        color: "#3cb14a",
                    });
                }
            },
            function () {
                $(this).attr({
                    src: whiteIconSrc[iconIndex],
                });
                $(this).stop().transition({
                        rotate: "0deg",
                    },
                    300,
                    "ease-in"
                );
                $(".society__title").eq(iconIndex).css({
                    color: "#fdfcf8",
                });
            }
        );

    //사회공헌활동 아이콘 위에 마우스 올리면 커서 변경
    var cursor = $(".cursor");
    $("#society").mousemove(function (event) {
        cursor.css({
            //cursor 위치
            top: event.clientY - cursor.height() / 2,
            left: event.clientX - cursor.width() / 2,
        });
    });

    //사회공헌 섹션 마우스 들어오면 cursor모양 변경
    $(window).resize(function () {
        ww = $(this).width();
    });


    $("#society")
        .mouseenter(function () {
        ww = $(window).width();
        //tab버전 이상일 때만 마우스 커서 변경 적용 
            if (ww >= 960) {
                cursor.css({
                    opacity: 0.8,
                });
                $("html,button").css({
                    cursor: "none",
                });
            }
        });
    
     $("#society").mouseleave(function () {
        cursor.css({
            opacity: 0,
        });
        $("html").css({
            cursor: "auto",
        });
        $("button").css({
            cursor: "pointer",
        });
    });

    //아이템에 호버 시 cursor모양 커짐
    $(".society__title-wrap,.society__icon,.society__text-box,.society__btn")
        .mouseenter(function () {
            cursor.stop().transition({
                scale: 3.5,
            });
        })
        .mouseleave(function () {
            cursor.stop().transition({
                scale: 1,
            });
        });


    //
    //
    //
    //
    //mobile ver jquery

    //BGF리테일 소개 mobile ver swiper
    var swiper = new Swiper(".intro-swiper-container", {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        autoplay: {
            disableOnInteraction: false,
            delay: 2000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //intro custom cursor
    var introCursor = $(".intro__cursor");
    $("#intros").mousemove(function (event) {
        introCursor.css({
            //cursor 위치
            top: event.clientY - introCursor.height() / 2,
            left: event.clientX - introCursor.width() / 2,
        });
    });

    $(".intro-swiper-slide")
        .mouseenter(function () {
            introCursor.css({
                opacity: 1,
            });
            $("html").css({
                cursor: "none",
            });
        })
        .mouseleave(function () {
            introCursor.css({
                opacity: 0,
            });
            $("html").css({
                cursor: "auto",
            });
            $("button").css({
                cursor: "pointer",
            });
        });

    //swiper 클릭 시 커서 색깔 변경
    $(".mo-intro__img")
        .mouseenter(function () {
            introCursor.css({
                backgroundColor: "#3cb14a",
                color: "#fdfcf8",
            });
        })
        .mouseleave(function () {
            introCursor.css({
                backgroundColor: "transparent",
                color: "#3cb14a",
            });
        });

    //section4 : news mobile swiper
    var swiper = new Swiper(".news-swiper-container", {
        slidesPerView: 1.8,
        spaceBetween: 20,
        centeredSlides: true,
        speed: 1000,
        loop: true,
        autoplay: {
            disableOnInteraction: false,
            delay: 2000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
    });
}); //end
