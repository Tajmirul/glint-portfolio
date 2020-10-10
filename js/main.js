$(document).ready(function () {

    /* magnificPopup img view */
    // $('.popup-image').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
    // });

    // /* magnificPopup video view */
    $('.about-video-popup').magnificPopup({
        type: 'iframe',
    });


    // WOW active
    new WOW().init();

    // slick slider for banner 
    $('.banner-slider').slick({
        prevArrow: '<i class="arrows prev icofont-rounded-left"></i>',
        nextArrow: '<i class="arrows next icofont-rounded-right"></i>',
        arrows: false,
        dots: true,
    });
    $('.slider-type-2').slick({
        dots: false,
        prevArrow: '<i class="arrows prev icofont-rounded-left"></i>',
        nextArrow: '<i class="arrows next icofont-rounded-right"></i>',
        appendArrows: $('.slider-type-2-arrows'),
    });
    $('.slider-type-3').slick({
        dots: false,
        prevArrow: '<i class="arrows prev icofont-rounded-left"></i>',
        nextArrow: '<i class="arrows next icofont-rounded-right"></i>',
        appendArrows: $('.slider-type-3-arrows'),
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    // hoverdir ---------------
    $('#da-thumbs > li').hoverdir();

    // my code ----------------------------------------------------------------------
    // preloader
    // $(".preloader").animate({
    //     top: -2000000
    // }, 1500);

    // sticky menu ber and go to top button
    // $(window).scroll(function () {
    //     var scrolled = $(window).scrollTop();
    //     var topMain = $('main').offset().top - 400;

    //     // go to top button
    //     if (scrolled > topMain) {
    //         $('.go-to-top').addClass('active');
    //         $('.nav-outer').addClass('sticky');

    //         $('.go-to-top').click(function () {
    //             $(window).scrollTop(0);
    //         });
    //     } else {
    //         $('.go-to-top').removeClass('active');
    //         $('.nav-outer').removeClass('sticky')
    //     }
    //     // console.log(scrolled);
    // });

    // menu bar open -------------------------
    // $('.navigations .menu-icon').click(function () {
    //     $('.mobile-navigations').css({
    //         'width': '100%',
    //         'padding': '3rem 5rem'
    //     });
    //     // $('.mobile-navigations').toggleClass('w-100 py-5 pl-50 pr-50')
    // });
    // // menu bar close -------------------------
    // $('.mobile-navigations li.close-menu').click(function () {
    //     $('.mobile-navigations').css({
    //         'width': '0',
    //         'padding': '0'
    //     });
    // });
    // // dropdown toggle ------------------
    // $('.mobile-navigations li.has-dropdown > i').click(function () {
    //     $(this).parent().find('>ul').slideToggle()
    // });

    // google map --------------
    // var map = $('.google-map');
    // if (map.width() )

    // desktop navigation bar -----------------
    var submenu = $('.desktop-nav-list-item > ul');
    var submenu_link = submenu.find(' > li > a');
    // enpend submenu 
    $('.desktop-nav-list .desktop-nav-list-item').hover(function() {
        $(this).find('>ul').stop().slideDown(200);
    }, function() {
        $(this).find('>ul').stop().slideUp(200);
    });

    submenu_link.hover(function() {
        $(this).find('> span').stop().animate({width: '1rem'}, 200);
    }, function() {
        $(this).find('> span').stop().animate({width: '0'}, 200);
    });






    var skill_bars = $('.skill-bar');
    $.each(skill_bars, function(index, item) {
        skill = $(item).data().skill;
        $(item).parent().find('> p > span').text(skill + '%');
        $(item).find('> span').css('width', skill + '%')
    });


















});
