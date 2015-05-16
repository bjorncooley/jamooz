var card_margin=0;
var cards_moved = false;
var mobile = false;
var card_details_icon_position = [];

$(window).load(function(){

    if ( $('body').css('position') == 'relative' ) {

        mobile = true;

        var plan_card_height = $('.plan-card').height();
        var container_height = $('.card-container').height();

        $('.card-container').height(container_height - plan_card_height * 2);

        movePlanCards();  
    }

    moveSlides();
    setUpGetStarted();
});

$(window).resize(function(){

    if ( $('body').css('position') == 'relative' ) {

        mobile = true;
        
    } else {

        mobile = false;
    }

    movePlanCards();
    moveSlides();
});

$(function(){

    // Down arrow for Home Page

    $('#hero-down-arrow').click(function(){
        $('html, body').animate({ scrollTop: $('#intro').offset()['top']}, 800);
    });

    // Activate plan cards when selected
    $('#get-started .plan-card, #pricing .plan-card').click(function(){

        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');

        $(this).find('img').attr('src', 'img/get-started/blue-check-icon-mobile.png');
        $(this).siblings().find('img').attr('src', 'img/get-started/yellow-plus-icon-mobile.png');
    });

    // Move Get Started to next slide section
    $('#get-started #plans button.yellow-background').click(function(){

        var width = $(window).width();

        // Make sure next slide is in correct location
        $('#apps-add-ons').css('left', width);

        $('#plans').animate({ left: '-=' + width }, 400);
        $('#apps-add-ons').animate({ left: 0 }, 400);

    }); 

    // Card swapping

    $('#card-right-arrow').click(function(){

        var $current = $('.plan-card.current');
        var $next = $current.next();
        var width = $(window).width();
        var offset = width + card_margin;

        // Check if this is the first card, if so, get the last card
        if ( $next.length == 0 ) {

            $next = $('.plan-card:first');
        }

        // Make sure the next card is in the correct position
        $next.css('left', offset + 'px');

        $current.animate({ left: "-=" + width,}, 500).removeClass('current');
        $next.animate({ left: "-=" + width,}, 500).addClass('current');
    });

    $('#card-left-arrow').click(function(){

        var $current = $('.plan-card.current');
        var $next = $current.prev();
        var width = $(window).width();
        var offset = width + card_margin;

        // Check if this is the first card, if so, get the last card
        if ( $next.length == 0 ) {

            $next = $('.plan-card:last');
        }

        // Make sure the next card is in the correct position
        $next.css('left', '-' + width + 'px');

        $current.animate({ left: "+=" + offset,}, 500).removeClass('current');
        $next.animate({ left: "+=" + offset,}, 500).addClass('current');
    });

    // Slide swapping
    $('.slide-container .right-arrow').click(function(){

        var $current = $('.slide.current');
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

    $('.slide-container .left-arrow').click(function(){

        var $current = $('.slide.current');
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
        var padding = parseInt( $('.plan-card.current').css('padding-left') );
        card_margin = (width - $('.plan-card.current').width()) / 2 - padding;
        var i=0;

        $('.plan-card').each(function(){

            offset = (width * i) + card_margin;
            $(this).css('position', 'absolute');
            $(this).css('left', offset + 'px');

            i += 1;
        });

    } else if ( cards_moved = true ) {

        $('.plan-card').each(function(){
            $(this).css('position', 'static');
        });

        cards_moved = false;
    }
}

function moveSlides() {

    var slide_height = $('.slide').height();
    $('.slide-container').height(slide_height);
    var width = $(window).width();
    var i=0;

    $('.slide').each(function(){

        offset = width * i;
        $(this).css('position', 'absolute');
        $(this).css('left', offset + 'px');

        i += 1;
    });
}

function setUpGetStarted() {

    var width = $(window).width();

    $('#get-started #apps-add-ons').css('left', width);
}