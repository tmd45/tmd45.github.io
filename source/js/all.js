//= require bootstrap
//= require_tree .

$(document).ready(function() {
  var heroImage = $('header .hero-image');
  if(heroImage.length > 0) {
    $(window).scroll(function() {
      var $this = $(this);
      var top = $this.scrollTop();
      heroImage.css('transform', 'translateY(' + (top/2) + 'px)');
    });
  }

  $('.carousel').carousel({ interval: 0 });
  $('#activity-carousel').load(function() {
    $(this).carousel('pause');
  });
});

$(window).load(function() {
  // Hero image + navbar
  var $navbar = $('.navbar-inner');
  $navbar.waypoint('sticky', {
    wrapper: '<span class="sticky-wrapper" />',
    stuckClass: 'navbar-fixed-top',
    direction: 'down right',
    target: '.navbar'
  });

// $navbar.parent().waypoint('sticky', { stuckClass: 'navbar-fixed-bottom', offset: 'bottom-in-view', direction: 'up', target: '.home' });
// if($navbar.is(':below-the-fold')) $navbar.toggleClass('navbar-fixed-bottom', true); 
});
