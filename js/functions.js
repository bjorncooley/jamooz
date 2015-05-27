var card_margin=0;
var cards_moved = false;
var mobile = false;
var card_details_icon_position = [];
var video_positions = [];
var videos = [];
var num_videos;

$(window).unload(function(){

    postUserData();
}); 

$(window).load(function(){

    $('body').css('display', 'block');

    checkMobile();

    if ( mobile ) {
        
        mobileSetupFunctions();
    }

    if ( !mobile ) {

        desktopSetupFunctions();
    }

    universalSetup();

    /* ---------------------------------------------- */
    /* -------------- SOFTARE/HARDWARE -------------- */
    /* ---------------------------------------------- */

    if ( $('#software-integrations').length != 0 ||
         $('#hardware-integrations').length != 0 ) {
            
        setInterval(animateSignalGraphics, 900);
    }
});

function hereFunction() {

    console.log('here');
}

$(window).resize(function(){

    checkMobile();

    if ( mobile ) {

        mobileSetupFunctions();
    }

    if ( !mobile ) {

        desktopSetupFunctions();
    }

    universalSetup();
});

$(window).scroll(function(){

    if ( mobile ) {

        if ( $('#home').length != 0 ) {

            homeMobileNav();
        }
    }

    if ( !mobile ) {

        if ( $('#home').length != 0 ) {

            positionDesktopNav();
        }

        resetVideos();

        /* --------------------------------------------------- */
        /* -------------- SOFTWARE INTEGRATIONS -------------- */
        /* --------------------------------------------------- */

        var window_top = $(window).scrollTop();
        var window_bottom = window_top + $(window).height();

        if ( $('#software-integrations').length != 0 ) {

            if ( window_bottom > $('#phone-icon-1').offset().top + 100 ) {

                if ( !($('#phone-icon-1').hasClass('animated')) ) {

                    $('#phone-icon-1').addClass('animated');

                    $('#phone-icon-1').animate({ left : 585 }, 1200, function(){

                        $('#phone-icon-1').animate({ bottom : -250}, 1600);


                        setTimeout(function(){

                            $('#phone-icon-1').fadeOut({ queue: false, duration: 800 });
                        }, 800);
                    });
                }
            }

            if ( window_bottom > $('#phone-icon-2').offset().top + 100 ) {

                if ( !($('#phone-icon-2').hasClass('animated')) ) {

                    $('#phone-icon-2').addClass('animated');

                    $('#phone-icon-2').animate({ left : -235 }, 800, function(){

                        $('#phone-icon-2').animate({ top : 480 }, 2400);


                        setTimeout(function(){

                            $('#phone-icon-2').fadeOut({ queue: false, duration: 600 }, function(){

                                $('#phone-icon-2').css('display', 'none !important');
                            });
                        }, 1200);
                    });
                }
            }
        }

        

        /* --------------------------------------------------- */
        /* -------------- HARDWARE INTEGRATIONS -------------- */
        /* --------------------------------------------------- */

        if ( $('#hardware-integrations').length != 0 ) {

            if ( window_bottom > $('#story-1-phone-icon').offset().top + 100 ) {

                if ( !($('#story-1-phone-icon').hasClass('animated')) ) {

                    $('#story-1-phone-icon').addClass('animated');

                    $('#story-1-phone-icon').animate({ left : -30 }, 800 , function() {

                        $('#story-1-phone-icon').animate({ top : 580 }, 2800, function(){

                            setTimeout( function(){
                                $('#story-2 .row:nth-child(1) img:nth-of-type(4)').attr(
                                    'src', 'img/hardware/on_call.png');
                            }, 600);
                            

                            $('#story-1-phone-icon').fadeOut({ queue: false, duration: 800 });
                            $('#story-1-phone-icon').animate({ left : 160 }, 800);
                            
                        });
                    });
                }
            }

            if ( window_bottom > ($('#walking-icon-1').offset().top + 100)) {

                if ( !($('#walking-icon-1').hasClass('animated')) ) {

                    $('#walking-icon-1').addClass('animated');

                    $('#walking-icon-1').animate({ opacity: 1 },
                                                 { queue: false,
                                                   duration: 800});
                    $('#walking-icon-1').animate({ left : 640 }, 3000);

                    setTimeout(function(){
                        $('#walking-icon-1').fadeOut({ queue: false, duration: 1200 });
                    }, 1800);
                }
            }

            if ( window_bottom > ($('#walking-icon-2').offset().top + 500)) {

                if ( !($('#walking-icon-2').hasClass('animated')) ) {

                    $('#walking-icon-2').addClass('animated');

                    $('#walking-icon-2').animate({ opacity: 1 },
                                                 { queue: false,
                                                   duration: 400});
                    $('#walking-icon-2').animate({ top : 500 }, 2400);

                    setTimeout(function(){
                        $('#walking-icon-2').fadeOut({ queue: false, duration: 800 });
                    }, 1600);
                }
            }
        }

        
    }


    
});


$(function(){

    // Close buttons
    $('.close-button').click(function(){
        $(this).parent().fadeOut(400);
    });

    // Login

    $('.login-button').click(function(e){

        e.preventDefault();

        $('#login-overlay').fadeIn(400);

        if ( mobile ) {

            var left = 0;

            if ( $('#mobile-nav').hasClass('opened') ) {

                left = $(window).width();
            }

            $('#login-overlay').css({
                'position' : 'absolute',
                'top' : $(window).scrollTop(),
                'left' : left,
                'height' : $(window).height(),
            });
        }
        
    });

    $('#login-close').click(function(){
        $('#login-overlay').fadeOut(400);
        $('#login-overlay').css({
            'position' : 'fixed',
            'top' : 0,
        });
    });

    $('.signup-button').click(function(){

        $(window).location.href('http://doorstepstudios.com/jamooz/index.php#trial');
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
            $('#page-content, #plan-profile, #mobile-logo-container').animate({'left' : 0}, 300);
            $('#mobile-nav').animate({'left' : width}, 300, function(){
                $('#mobile-nav').css({
                    'position': 'fixed',
                    'top' : 0,
                });
                $('#mobile-nav').removeClass('opened').addClass('closed');
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

        $(this).animate({top: '-=5'}, 100);
    }, function(){

        $(this).animate({top: '+=5'}, 100);
    });



    /* ------------------------------------ */
    /* ---------- CARDS & SLIDES ---------- */
    /* ------------------------------------ */

    
    $('.card').click(function(){

        if ( $(this).hasClass('selected') ) {

            $(this).removeClass('selected');
            $(this).find('img[src="img/shared/blue_check_icon.png"]').attr('src', 'img/shared/yellow_plus_icon.png');

        } else {

            $(this).addClass('selected');
            $(this).siblings('.plan').removeClass('selected');

            $(this).find('img[src="img/shared/yellow_plus_icon.png"]').attr('src', 'img/shared/blue_check_icon.png');
            $(this).siblings('.plan').find('img').attr('src', 'img/shared/yellow_plus_icon.png');
        }

        
    });


    $('.add-container').click(function(){

        if ( !$(this).hasClass('selected') ) {

            $(this).addClass('selected');
            $(this).find('img').attr('src', 'img/shared/blue_check_icon.png');
            $(this).find('p').text('Added');

            addItemToCookie();
        } else {

            $(this).find('img').attr('src', 'img/shared/yellow_plus_icon.png');
            $(this).removeClass('selected');
            $(this).find('p').text('Add to Plan');
        }

        
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
    
    slideRightArrow();
    slideLeftArrow();


    // Slide up card details
    showCardDetails();

    hideCardDetails();

    /* ----------------------------------------- */
    /* ---------- PLAN PROFILE WIDGET ---------- */
    /* ----------------------------------------- */

    $('.plan-item .quantity').change(function(){

        if ( $(this).parents('.plan-item').data('productType') == 'plan' ) {

            var quantity = $(this).val();
            var previousTotal = $.cookie('total');

            $.cookie('update', true);
            planObject = JSON.parse($.cookie('plan'));
            planObject.quantity = quantity;
            $.cookie('plan', JSON.stringify(planObject));

            if ( $.isNumeric(planObject.cost) ) {

                $.cookie('total', quantity * planObject.cost);
            }
            
        }

        updatePlanProfile();

       

    });

    $('.remove-item').click(function(){

        var product_type = $(this).parent().data('productType');
        var num_items = parseInt($.cookie('num_items'));

        $.removeCookie(product_type);
        $.removeCookie(product_type + '-cost');

        num_items -= 1;
        $.cookie('num_items', num_items);
        $.cookie('total', 0);

        updatePlanProfile();

    });

    // Toggle plan profile widget
    $('.plan-profile-toggle, #continue').click(function(){

        togglePlanProfile();
    });

    $('.plan-profile-close-button').click(function(){

        togglePlanProfile();
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
        var target = $('#step-2').offset()['top'] - 60;
        $('html, body').animate({ 'scrollTop' : target}, 800);

        // Record user data in cookie, 
        $.cookie('hasData', true);
        $.cookie('update', true);
        $.cookie('firstName', $('#first-name').val());
        $.cookie('lastName', $('#last-name').val());
        $.cookie('email', $('#email').val());
        $.cookie('phone', $('#phone').val());
        $.cookie('location', $('#location').val());
        $.cookie('organization', $('#organization').val());

    });


    // Record user's plan selection, move to next slide

    $('#get-started #plans button.yellow-background').click(function(){

        // Get data-product attribute

        var plan = $('.selected').data('product');

        if ( plan == undefined ) {

            alert("Please select a plan");

        } else {

            $.cookie('update', true);
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

            var planObject = new Object();

            switch(plan) {

                case 'startup-plan':

                    planObject.item_name = 'Startup Base Plan';
                    planObject.cost = 17
                    planObject.quantity = 1;

                    total = 17;
                    break;

                case 'small-business-plan':

                    planObject.item_name = 'Small Business Plan';
                    planObject.cost = 25;
                    planObject.quantity = 1;

                    total = 25;
                    break;

                case 'enterprise-plan':

                    planObject.item_name = 'Enterprise Base Plan';
                    planObject.cost = 'TBD';
                    planObject.quantity = 1;

                    total = 'TBD';
                    break;

                default:

                    $.cookie('plan', '');
            }

            $.cookie('plan', JSON.stringify(planObject));

            num_items = 1;

            $.cookie('total', total);
            $.cookie('num_items', num_items);
            togglePlanProfile();
            updatePlanProfile();

            var width = $(window).width();

            $('#apps-add-ons').slideDown(800);
            $('html, body').animate({
                scrollTop : $('#apps-add-ons').offset().top - 50,
            }, 800);

        }       
    }); 

    $('#get-started #next-step-button').click(function(){

        $('#get-started #step-3').slideDown(400);
        $('html, body').animate({ 'scrollTop' : $('#step-3').offset()['top'] - 60}, 800);
    });    

    // Fade in devices overlay
    $('#device-slide-button').click(function(){
        
        $('#device-discounts').fadeIn(400, function(){
            $('html, body').animate({ scrollTop : 
                $('#device-discounts').offset().top })
        });

        if ( mobile ) {
            var extras_top = $('#extras').offset().top;
            $('#device-discounts').offset({ top: extras_top });
        }
    });  
    

});

/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
/* ------------------------ CLICK EVENTS ------------------------- */
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */

function slideLeftArrow() {

    $('.slide-left-arrow').click(function(){

        var $current = $(this).parent('.slide.current');
        var $next = $current.prev();
        var width = $(window).width();

        // Check if this is the first card, if so, get the last card
        if ( $next.length == 0 ) {

            $next = $(this).parents('.slide-container').find('.slide:last');
        }

        // Make sure the next card is in the correct position
        $next.css('left', '-' + width + 'px');

        $current.animate({ left: "+=" + width,}, 500).removeClass('current');
        $next.animate({ left: "+=" + width,}, 500).addClass('current').addClass('active');
    });
}

function slideRightArrow() {

    $('.slide-right-arrow').click(function(){

        var $current = $(this).parent('.slide.current');
        var $next = $current.next();
        var width = $(window).width();

        // Check if this is the first card, if so, get the last card
        if ( $next.length == 0 ) {

            $next = $(this).parents('.slide-container').find('.slide:first');
        }

        // Make sure the next card is in the correct position
        $next.css('left', width + 'px');

        $current.animate({ left: "-=" + width,}, 500).removeClass('current').removeClass('active');
        $next.animate({ left: "-=" + width,}, 500).addClass('current').removeClass('active');
    });
}

function showCardDetails() {

    $('.show-details-link').click(function(e){

        e.stopPropagation();

        // Move card caption above to mask shadow
        $(this).parent().css({
            position: 'relative',
            'z-index' : 2,
        });

        var index = $(this).parent().parent().index();

        $shadowed = $(this).parent().siblings('.shadowed');
        var container_height = $shadowed.height() + parseInt($shadowed.css('padding-top'));

        $icon = $(this).parent().siblings().find('img.relative');
        $textSlide = $(this).parent().siblings().find('.card-text');

        card_details_icon_position[index] = parseInt($icon.css('top'));

        $icon.animate({ top: '-=' + container_height}, 400);
        $textSlide.animate({ top: '-=' + container_height}, 400);

        $(this).addClass('hide');
        $(this).siblings('.close-details-link').removeClass('hide');
    });
}


function hideCardDetails() {

    $('.close-details-link').click(function(e){

        e.stopPropagation();

        var index = $(this).parent().parent().index();
        var icon_position = card_details_icon_position[index];

        $icon = $(this).parent().siblings().find('img.relative');
        $icon.animate({ top: icon_position}, 400, function(){
            // Move card caption below shadow
            $(this).parent().parent().siblings('.caption').css({
                position: 'static',
            });
        });

        $textSlide = $(this).parent().siblings().find('.card-text');
        $textSlide.animate({ top: 0}, 400);

        $(this).addClass('hide');
        $(this).siblings('.show-details-link').removeClass('hide');
    });
}


/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
/* ------------------------ TIMED EVENTS ------------------------- */
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */

function animateSignalGraphics() {

    if ( $('.signal-graphic.current').length == 0 ) {
        console.log('no graphic');
        $('#signal-1').addClass('current');
        $('.signal-graphic').each(function(){

            $(this).css('display', 'none');
        });
    } else {

        $currentGraphic = $('.signal-graphic.current');
        $nextGraphic = $currentGraphic.next('.signal-graphic');

        $currentGraphic.css('display', 'block');
        $currentGraphic.removeClass('current');
        $nextGraphic.addClass('current');
    }

    
}


/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
/* ---------------------- LAYOUT FUNCTIONS ----------------------- */
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */

function checkMobile() {

    if ( $('body').css('position') == 'relative' ) {

        mobile = true;

    } else {

        mobile = false;
    }
}

function universalSetup() {
    
    getVideoPositions();
    movePlanCards(); 
    setUpGetStarted();
    updatePlanProfile();

    if ( $('#devices').length != 0 ) {

        arrangeDiscountCards();
    }

    moveSlides();
}

function mobileSetupFunctions() {

    setMobileNav();
    setCardContainer();

    if ( $('#home').length != 0 ) {

        homeMobileNav();
    }
}

function desktopSetupFunctions() {

    var window_height = $(window).height();
    $('.full-height').each(function(){

        var original_height = $(this).height();
        var difference = window_height - original_height;
        var vertical_adjust = difference / 2;

        if ( difference > 0 ) {

            $(this).height(window_height);
            $(this).css('padding-top', vertical_adjust + 'px');
        }
    });
}

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
            $(this).css('left', 'auto');
        });

        cards_moved = false;
    }
}

function moveSlides() {

    $('.slide-container').each(function(){

        var slide_height = $(this).find('.slide').height();
        $(this).height(slide_height);

        var width = $(window).width();
        var i=0;

        $(this).find('.slide').not('.active').each(function(){

            offset = width * i;
            $(this).css('position', 'absolute');
            $(this).css('left', offset + 'px');

            i += 1;
        });
    });

    if ( mobile ) {
        $('#devices .slide-container').height($('#devices .card-container').height() + 100);
    }

    
}

function setUpGetStarted() {

    var width = $(window).width();

    var container_height = $('#devices .card-container').height();

    // If apps-add-ons is not already being viewed, move off-screen
    // if ( !($('#get-started #apps-add-ons').hasClass('active'))) {

    //     $('#get-started #apps-add-ons').css('left', width);
    // }

    $('#get-started #device-discounts').css('display', 'none');
}

function updatePlanProfile() {

    if ( $.cookie('num_items') != 'NaN' ) {

        $('#num-items').text($.cookie('num_items'));
    } else {

        $('#num-items').text('0');
    }

    

    if ( $.cookie('plan') == undefined ) {

        $('.plan-item[data-product-type="plan"]').css('display', 'none');
        $('#plan-profile #total').text(0);
    } else {

        planObject = JSON.parse($.cookie('plan'));

        $('#plan-profile .plan-item:first').css('display', 'block');
        $('#plan-profile .plan-item:first .description').text(planObject.item_name);
        $('#plan-profile .plan-item:first .price').text(
            '$' + planObject.cost + '/ext./mo.');
        $('#plan-profile .plan-item:first .price').data('price', planObject.cost);
        $('#plan-profile .plan-item:first .quantity').val(planObject.quantity);
        $('#plan-profile #total').text($.cookie('total'));
    }   

    
}


function togglePlanProfile() {

    if ( $('#plan-profile-content').css('display') == 'none' ) {

        $('#plan-profile-content').css('display', 'block');
        $('.plan-profile-toggle').find('img').css('display', 'block');
        $('.plan-profile-toggle').find('h4').css('display', 'none');

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
        $('.plan-profile-toggle').find('img').css('display', 'none');
        $('.plan-profile-toggle').find('h4').css('display', 'block');

        if ( mobile ) {

            top = '1px';
        } else {

            top = '15%';
        }

        // Set widget back to fixed
        $('#plan-profile').css({

            'position' : 'fixed',
            'top' : top,
        });
    }
}

function addItemToCookie() {

    var num_items = parseInt($.cookie('num_items'));

    if ( num_items == 0 ) {

        //togglePlanProfile();
    }

    num_items += 1;
    $.cookie('num_items', num_items);

    updatePlanProfile();
}


function setMobileNav() {

    var width = $(window).width();

    $('#mobile-nav.closed').css('left', width);
    $('#mobile-nav.open').css('left', 0);
}

function homeMobileNav() {

    var window_top = $(window).scrollTop();

    if ( window_top == 0 ) {

        $('#mobile-logo-container').find('img').attr('src',
            'img/shared/jamooz_logo_large.png');
        $('#mobile-logo-container').css('padding-bottom', '90px');
        $('#page-content').css('padding-top', '220px');
        $('#mobile-nav-toggle').css('top', 150);
        $('#plan-profile').css('top', 145);

    } else {

        $('#mobile-logo-container').find('img').attr('src',
            'img/shared/jamooz_logo_mobile.jpg');
        $('#mobile-logo-container').css('padding-bottom', '0px');
        $('#page-content').css('padding-top', '80px');
        $('#mobile-nav-toggle').css('top', 6);
        $('#plan-profile').css('top', 1);
    }
}

function positionDesktopNav() {  

    var window_top = $(window).scrollTop();
    var intro_top = $('#hero-down-arrow').offset()['top']; 

    if ( window_top >= intro_top ) {

        $('#nav').slideDown(200);

    } else {

        if ( $('#nav').css('display') == 'block' ) {

            $('#nav').slideUp(200);
        }
    }          
}

function getVideoPositions() {

    var i = 0;

    // Get the top positions of all videos
    $('video').each(function(){

        video_positions[i] = $(this).offset()['top'];
        videos[i] = $(this);

        // Pause video
        $(this)[0].pause();

        i += 1;
    });

    num_videos = i;
}

function resetVideos() {

    var window_top = $(window).scrollTop();
    var window_bottom = window_top + $(window).height();
    var i = 0;

    while ( i < num_videos ) {

        var video_bottom = video_positions[i] + videos[i].height();

        if ( window_bottom >= video_positions[i] && window_top < video_bottom ) {

            videos[i][0].play();

        } else {

            // Pause and reset
            videos[i][0].currentTime = 0;
            videos[i][0].pause();
        }

        i += 1;
    }
}

function arrangeDiscountCards() {

    if ( mobile ) {

        var plan_card_height = $('#devices .card').height();
        $('#devices .slide-container').height(plan_card_height);

        $('#devices .row.current').next().css({
            'position': 'absolute',
            'top' : 0,
            'left' : 0,
        });

    } else {

        $('#devices .card-container').height('auto');
        $('#devices .device-container.current').height('auto');
        $('#devices .row.current').next().css({
            'position': 'static',
            'top' : 'auto',
            'left' : 'auto',
        });
    }

    
}

function setCardContainer() {

    
    var container_padding = parseInt($('#devices .card-container').css('padding-top'));
    

    $('.card-container').each(function(){

        var plan_card_height = $(this).find('.card').height();
        $(this).height(plan_card_height);
    }); 
    //$('#devices .card-container').height(plan_card_height + container_padding);
}



/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */
/* ------------------ THIRD PARTY INTEGRATIONS ------------------- */
/* --------------------------------------------------------------- */
/* --------------------------------------------------------------- */




function postUserData() {

    if ( $.cookie('hasData') == 'true' && $.cookie('update') == 'true' ) {

        // Set cookie to not update again until data is changed
        $.cookie('update', false);
        var firstName = $.cookie('firstName');
        var lastName = $.cookie('lastName');
        var email = $.cookie('email');
        var phone = $.cookie('phone');
        var location = $.cookie('location');
        var organization = $.cookie('organization');

        var planObject = JSON.parse($.cookie('plan'));
        var plan = planObject.item_name;

        $.ajax({
                url: "https://docs.google.com/forms/d/1cWrFUE6pOP6LmI5EeUtljFF_wsc7REQBv2BlCyGAESY/formResponse",
                data: {
                    "entry.2104773484" : firstName, 
                    "entry.726039950" : lastName, 
                    "entry.1879287637" : email,
                    "entry.1090203698" : phone,
                    "entry.1788896219" : location,
                    "entry.1554689900" : organization,
                    "entry.2051865047" : plan},
                type: "POST",
                dataType: "xml",
                async: false,
                statusCode: {
                    0: function (){
        
                        // success
                    },
                    200: function (){
                        // success
                    }
                }
            });
    }
}