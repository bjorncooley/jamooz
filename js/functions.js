var card_margin=0;
var cards_moved = false;
var mobile = false;

$(window).load(function(){

    if ( $('body').css('position') == 'relative' ) {

        mobile = true;

        var plan_card_height = $('.plan-card').height();
        var container_height = $('.card-container').height();

        $('.card-container').height(container_height - plan_card_height * 2);

        movePlanCards();  
    }

      
});

$(window).resize(function(){

    if ( $('body').css('position') == 'relative' ) {

        mobile = true;
        
    } else {

        mobile = false;
    }

    movePlanCards();
});

$(function(){

    // Down arrow for Home Page

    $('#hero-down-arrow').click(function(){
        $('html, body').animate({ scrollTop: $('#intro').offset()['top']}, 800);
    });

    // Activate plan cards when selected
    $('#step-2 .plan-card').click(function(){

        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');

        $(this).find('img').attr('src', 'img/get-started/blue-check-icon-mobile.png');
        $(this).siblings().find('img').attr('src', 'img/get-started/yellow-plus-icon-mobile.png');
    });

    // Card swapping

    $('#step-2 .right-arrow, #discounts .right-arrow').click(function(){

        console.log("Clicked");

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

    $('#step-2 .left-arrow, #discounts .left-arrow').click(function(){

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