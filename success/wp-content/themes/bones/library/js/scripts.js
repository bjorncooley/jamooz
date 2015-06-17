/*
 * Bones Scripts File
 * Author: Eddie Machado

*/

function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


jQuery(document).ready(function($) {

  updateSidebarNavStyles();
  scrollToPost();

  //jQuery('a[title="Category 2"]').offset().top
}); /* end of as page load scripts */


function updateSidebarNavStyles() {

  var page_title = jQuery('.page-title').text();

  jQuery('.category h4').each(function(){

    console.log(jQuery(this).text());
    console.log(page_title);

    if ( jQuery(this).text() == page_title ) {

      jQuery(this).css({
        'background-color': 'rgb(56,165,221)',
        'color' : 'white',
      });

      jQuery(this).parent().siblings('.category-posts').css(
        'display', 'block');

      jQuery(this).parents('.category').prev('.category').css('border-bottom', 'none');
    }
  });
}


function scrollToPost() {

  jQuery('.category-posts a').click(function(e){

    e.preventDefault();
    console.log(jQuery(this));

    var post_title = jQuery(this).text();
    var scroll_target = jQuery('a[title="' + post_title + '"]').offset().top

    console.log(scroll_target);

    jQuery('html, body').animate({ 'scrollTop' : scroll_target });
  });
}
