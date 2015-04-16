(function($){
  $(function(){

    $('.button-collapse').sideNav({
      closeOnClick: true
    })

    $('.collapsible').collapsible();

    $('.scrollspy').scrollSpy();

    $('.powered-wrapper').pushpin({ top: $('.powered-wrapper').offset().bottom });

  }); // end of document ready
})(jQuery); // end of jQuery name space
