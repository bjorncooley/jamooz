var card_margin=0;
var cards_moved = false;
var mobile = false;
var card_details_icon_position = [];

$(window).load(function(){

    if ( $('body').css('position') == 'relative' ) {

        mobile = true;

        var plan_card_height = $('.card').height();
        var container_height = $('.card-container').height();

        $('.card-container').height(container_height - plan_card_height * 2);


        movePlanCards();  
        setMobileNav();

        // Special functions for the discounts slide
        $('#discounts .card-container').height(container_height - plan_card_height * 3);
        $('#discounts .device-container.current').height($('#discounts .card-container').height());
        $('#devices .row.current').next().css({
            'position': 'absolute',
            'top' : 0,
            'left' : 0,
        });
    }

    // On desktop, set main home sections to window height

    if ( !mobile ) {

        var window_height = $(window).height();
        $('.full-height').each(function(){

            var original_height = $(this).height();
            var difference = window_height - original_height;
            var vertical_adjust = difference / 2;

            if ( difference > 0 ) {

                console.log($(this));
                $(this).height(window_height);
                $(this).css('padding-top', vertical_adjust + 'px');
            }

        });
    }

    moveSlides();
    setUpGetStarted();
    updatePlanProfile();
});

$(window).resize(function(){

    if ( $('body').css('position') == 'relative' ) {

        mobile = true;
        setMobileNav();
        
    } else {

        mobile = false;
    }

    movePlanCards();
    moveSlides();
});

$(window).scroll(function(){

    if ( !mobile ) {

        if ( $('#home').length != 0 ) {

            positionDesktopNav();
        }
    }
});

$(function(){

    // Close buttons
    $('.close-button').click(function(){
        $(this).parent().fadeOut(400);
    });

    // Mobile nav
    $('#mobile-nav-toggle').click(function(){

        var width = $(window).width();

        if ( $('#mobile-nav').hasClass('closed') == true ) {

            $('#mobile-nav-toggle').animate({rotate: -90}, 150);
            $('#mobile-nav').animate({'left' : 0}, 300);
            $('#mobile-nav').removeClass('closed').addClass('opened');
            $('#page-content, #plan-profile, #mobile-logo-container').animate({'left' : '-' + width}, 300);
            $('#mobile-logo-container').css('box-shadow', 'none');

            //Change menu from fixed to absolute
            var top = $('#mobile-nav').offset()['top'];
            $('#mobile-nav').css({
                'top' : top,
                'position' : 'absolute',
            });
        } else {

            $('#mobile-nav-toggle').animate({rotate: 0}, 150);
            $('#mobile-nav').removeClass('opened').addClass('closed');
            $('#page-content, #plan-profile, #mobile-logo-container').animate({'left' : 0}, 300);
            $('#mobile-nav').animate({'left' : width}, 300, function(){
                $('#mobile-nav').css({
                    'position': 'fixed',
                    'top' : 0,
                });
            });
            $('#mobile-logo-container').css('box-shadow', '0 2px 5px #787878');
            

            
        }
        
    });


    // Down arrow for hero

    $('#hero-down-arrow').click(function(){

        var next_top = $('.hero').next().offset()['top'];
        var nav_size = $('#nav').height();
        var scroll_target = next_top - nav_size;

        $('html, body').animate({ scrollTop: scroll_target}, 600);
    });


    $('#hero-down-arrow img').hover(function(){

        console.log('hovered');
        console.log($(this).css('top'));
        $(this).animate({top: '-=5'}, 100);
    }, function(){

        $(this).animate({top: '+=5'}, 100);
    });
    /* --------------------------- */
    /* ---------- CARDS ---------- */
    /* --------------------------- */

    
    $('.card').click(function(){

        $(this).addClass('selected');
        $(this).siblings('.plan').removeClass('selected');

        $(this).find('img').attr('src', 'img/shared/blue_check_icon.png');
        $(this).siblings('.plan').find('img').attr('src', 'img/shared/yellow_plus_icon.png');
    });


    $('.add-container').click(function(){

        $(this).addClass('selected');
        $(this).find('img').attr('src', 'img/get-started/blue-check-icon-mobile.png');

        var num_items = parseInt($.cookie('num_items'));
        num_items += 1;
        $.cookie('num_items', num_items);

        updatePlanProfile();
    });

    /* ----------------------------------------- */
    /* ---------- PLAN PROFILE WIDGET ---------- */
    /* ----------------------------------------- */

    $('.remove-item').click(function(){

        var product_type = $(this).parent().data('productType');
        var num_items = parseInt($.cookie('num_items'));

        $.removeCookie(product_type);
        $.removeCookie(product_type + '-cost');

        num_items -= 1;
        $.cookie('num_items', num_items);

        updatePlanProfile();

    });

    // Toggle plan profile widget
    $('.plan-profile-toggle').click(function(){

        if ( $('#plan-profile-content').css('display') == 'none' ) {

            $('#plan-profile-content').css('display', 'block');

            // Set the widget to be absolutely positioned on mobile,
            // so mobile users can scroll down the widget

            if ( mobile ) {

                var top = $('#plan-profile').offset()['top'];
                $('#plan-profile').css({
                    'position' : 'absolute',
                    'top' : top,
                    'left' : 0 ,
                });
            }
            
        } else {

            $('#plan-profile-content').css('display', 'none');

            if ( mobile ) {

                top = '-9px';
            } else {

                top = '15%';
            }

            // Set widget back to fixed
            $('#plan-profile').css({

                'position' : 'fixed',
                'top' : top,
            });
        }
    });    

    $('.plan-profile-close-button').click(function(){

        $('#plan-profile-content').css('display', 'none');
    });

    /* --------------------------------------- */
    /* -------------- HOME PAGE -------------- */
    /* --------------------------------------- */

    // Hide desktop nav for first section on home page
    if ( !mobile ) {

        $('#home').siblings('#nav').css('display','none');
    }    

    /* ----------------------------------------- */
    /* -------------- GET STARTED -------------- */
    /* ----------------------------------------- */

    // Scroll user down from contact form

    $('#get-started #step-1 button.yellow-background').click(function(e){

        e.preventDefault();
        var target = $('#step-2').offset()['top'];
        $('html body').animate({ 'scrollTop' : target}, 800);
    });


    // Record user's plan selection, move to next slide

    $('#get-started #plans button.yellow-background').click(function(){

        // Get data-product attribute

        var plan = $('.selected').data('product');

        if ( plan == undefined ) {

            alert("Please select a plan");

        } else {

            var total = $.cookie('total');
            var num_items = $.cookie('num_items');

            if ( total == undefined ) {

                total = 0;
            }

            if ( num_items == undefined ) {

                num_items = 0;
            } else {

                num_items = parseInt(num_items);
            }

            switch(plan) {

                case 'startup-plan':

                    $.cookie('plan', 'Startup Base Plan');
                    $.cookie('plan-cost', '$17/month');
                    total = 17;
                    break;

                case 'small-business-plan':

                    $.cookie('plan', 'Small Business Base Plan');
                    $.cookie('plan-cost', '$25/month');
                    total = 25;
                    break;

                case 'enterprise-plan':

                    $.cookie('plan', 'Enterprise Base Plan');
                    $.cookie('plan-cost', 'TBD');
                    total = 'TBD';
                    break;

                default:

                    $.cookie('plan', '');
            }

            num_items = 1;

            $.cookie('total', total);
            $.cookie('num_items', num_items);
            updatePlanProfile();

            var width = $(window).width();

            // Make sure next slide is in correct location
            $('#apps-add-ons').css('left', width);

            $('#plans').animate({ left: '-=' + width }, 400);
            $('#apps-add-ons').animate({ left: 0 }, 400);
        }       
    }); 
    

    // Fade in devices overlay
    $('#device-slide-button').click(function(){

        $('#device-discounts').fadeIn(400);
    });

    // Card swapping

    $('.card-right-arrow').click(function(){

        var $current = $(this).siblings().find('.card.current');
        var $next = $current.next();

        var $currentContainer = $(this).siblings('.card-container.current');
        var $nextContainer = $currentContainer.next('.card-container');

        var width = $(window).width();
        var width = $(window).width();
        var padding = parseInt( $current.css('padding-left') );

        card_margin = (width - $current.width()) / 2 - padding;
        
        // var offset = width + card_margin;

        //card_margin = (width - $(this).siblings().find('.card.current').width()) / 2;

        var offset = width + card_margin;

        // Logic for figuring out what to do if this is the last card
        if ( $next.length == 0 ) {

            if ( $nextContainer.length == 0 ) {

                $nextContainer = $(this).siblings('.card-container:first');
                $next = $nextContainer.find('.card:first');

            } else {

                $next = $nextContainer.find('.card:first');
            }

            $currentContainer.removeClass('current');
            $nextContainer.addClass('current');
        }

        // Make sure the next card is in the correct position
        $next.css('left', offset + 'px');

        $current.animate({ left: "-=" + width,}, 500).removeClass('current');
        $next.animate({ left: "-=" + width,}, 500).addClass('current');
    });

    $('.card-left-arrow').click(function(){

        var $current = $('.card.current');
        var $next = $current.prev();

        var $currentContainer = $('.card-container.current');
        var $nextContainer = $currentContainer.prev('.card-container');

        var width = $(window).width();
        var width = $(window).width();
        var padding = parseInt( $current.css('padding-left') );

        card_margin = (width - $current.width()) / 2 - padding;

        var offset = width + card_margin;

        // Check if this is the first card, if so, get the last card
        if ( $next.length == 0 ) {

            if ( $nextContainer.length == 0 ) {

                $nextContainer = $('.card-container:last');
                $next = $nextContainer.find('.card:last');

            } else {

                $next = $nextContainer.find('.card:last');
            }

            $currentContainer.removeClass('current');
            $nextContainer.addClass('current');
        }

        // Make sure the next card is in the correct position
        $next.css('left', '-' + width + 'px');

        $current.animate({ left: "+=" + offset,}, 500).removeClass('current');
        $next.animate({ left: "+=" + offset,}, 500).addClass('current');
    });

    // Slide swapping
    $('.slide-right-arrow').click(function(){

        var $current = $(this).parent('.slide.current');
        var $next = $current.next();
        var width = $(window).width();

        // Check if this is the first card, if so, get the last card
        if ( $next.length == 0 ) {

            $next = $('.slide:first');
        }

        // Make sure the next card is in the correct position
        $next.css('left', width + 'px');

        $current.animate({ left: "-=" + width,}, 500).removeClass('current');
        $next.animate({ left: "-=" + width,}, 500).addClass('current');
    });

    $('.slide-left-arrow').click(function(){

        var $current = $(this).parent('.slide.current');
        var $next = $current.prev();
        var width = $(window).width();

        // Check if this is the first card, if so, get the last card
        if ( $next.length == 0 ) {

            $next = $('.slide:last');
        }

        // Make sure the next card is in the correct position
        $next.css('left', '-' + width + 'px');

        $current.animate({ left: "+=" + width,}, 500).removeClass('current');
        $next.animate({ left: "+=" + width,}, 500).addClass('current');
    });


    // Slide up card details
    $('.show-details-link').click(function(e){

        e.stopPropagation();

        var index = $(this).parent().parent().index();

        $shadowed = $(this).parent().siblings('.shadowed');
        var container_height = $shadowed.height() + parseInt($shadowed.css('padding-top'));

        $icon = $(this).parent().siblings().find('img.relative');
        $detailsSlide = $(this).parent().siblings().find('.card-details');

        card_details_icon_position[index] = parseInt($icon.css('top'));

        $icon.animate({ top: '-=' + container_height}, 400);
        $detailsSlide.animate({ top: 0}, 400);

        $(this).addClass('hide');
        $(this).siblings('.close-details-link').removeClass('hide');
    });

    $('.close-details-link').click(function(e){

        e.stopPropagation();

        var index = $(this).parent().parent().index();
        var icon_position = card_details_icon_position[index];

        $icon = $(this).parent().siblings().find('img.relative');
        $icon.animate({ top: icon_position}, 400);

        $detailsSlide = $(this).parent().siblings().find('.card-details');
        $detailsSlide.animate({ top: '100%'}, 400);

        $(this).addClass('hide');
        $(this).siblings('.show-details-link').removeClass('hide');
    });
});

function movePlanCards() {

    if ( mobile == true ) {

        cards_moved = true;

        var width = $(window).width();

        $('.slide-container').each(function(){

            var padding = parseInt( $(this).find('.card.current').css('padding-left') );
            card_margin = (width - $(this).find('.card.current').width()) / 2 - padding;

            var i=0;

            $(this).find('.card').each(function(){

                offset = (width * i) + card_margin;
                $(this).css('position', 'absolute');
                $(this).css('left', offset + 'px');

                i += 1;
            });
        });
        

    } else if ( cards_moved = true ) {

        $('.card').each(function(){
            $(this).css('position', 'static');
        });

        cards_moved = false;
    }
}

function moveSlides() {

    $('.slide-container').each(function(){

        var slide_height = $('.slide').height();
        $('.slide-container').height(slide_height);
        var width = $(window).width();
        var i=0;

        $(this).find('.slide').each(function(){

            offset = width * i;
            $(this).css('position', 'absolute');
            $(this).css('left', offset + 'px');

            i += 1;
        });
    });

    
}

function setUpGetStarted() {

    var width = $(window).width();

    var container_height = $('#devices .card-container').height();

    $('#get-started #apps-add-ons').css('left', width);

    $('#get-started #device-discounts').css('display', 'none');

    // Special functions for the discounts slide
    // $('#devices .card-container').height(container_height - plan_card_height * 3);
    // console.log($('#devices .card-container').height());
    // $('#devices .device-container.current').height($('#devices .card-container').height());
    // $('#devices .row.current').next().css({
    //     'position': 'absolute',
    //     'top' : 0,
    //     'left' : 0,
    // });
}

function updatePlanProfile() {

    $('#num-items').text($.cookie('num_items'));

    if ( $.cookie('plan') == undefined ) {

        $('.plan-item[data-product-type="plan"').css('display', 'none');
    } else {

        $('.plan-item[data-product-type="plan"').css('display', 'block');
        $('#plan-profile .plan-item:first .description').text($.cookie('plan'));
        $('#plan-profile .plan-item:first .price').text($.cookie('plan-cost'));
        $('#plan-profile #total').text($.cookie('total'));
    }   
}

function setMobileNav() {

    var width = $(window).width();

    $('#mobile-nav.closed').css('left', width);
    $('#mobile-nav.open').css('left', 0);
}

function positionDesktopNav() {

    

    if ( $('#nav').css('display') == 'none' ) {

        var window_top = $(window).scrollTop();
        var intro_top = $('#hero-down-arrow').offset()['top'];

        if ( window_top >= intro_top ) {

            $('#nav').slideDown(200);
            $('#page-brand').css('visibility', 'hidden');
        }
    }
}