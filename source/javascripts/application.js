//= require_self
//= require _slider


var MOBILE_WIDTH = 610;

$(window).load(function() {
  $('body').animate({'opacity': '1'});
});


////////////// safari video bug fix ////////////////

$(window).on('beforeunload', function() {
  $(".videobg video").addClass('hidden');
});

$(".videobg video")[0].onplaying = function() {
  $(this).removeClass('hidden');
}

////////////////////////////////////////////////////


$(document).ready(function() {

  /////////////// NAV PAGE OPEN/CLOSE //////////////

  $("#nav-open").click(function(e) {
    var $np = $('#nav-page');
    e.stopPropagation();
    
    if($np.hasClass('open')) {
      $np.removeClass('open');
      $(this).removeClass('close');
      $('body').css('overflow', 'auto');
      $('.body-mask').animate({'opacity': '0'}, 'fast');
    } else {
      $np.addClass('open');
      $(this).addClass('close');
      $('body').css('overflow', 'hidden');
      $('.body-mask').animate({'opacity': '0.85'});
    }

  });

  // if the nav is open, close it when the body is clicked
  $("body").click(function() {
    if ($("#nav-page").hasClass("open")) {
      $("#nav-page").removeClass('open');
      $("#nav-open").removeClass('close');
      $('body').css('overflow', 'auto');
    }

    $(".hidden-list").animate({'opacity': '0'}, function() {
      $(".hidden-list").css('display', 'none');
    });
  });

  // but don't close it when the nav itself is clicked
  $("#nav-page").click(function(e) {
    e.stopPropagation();
  });

  //////////////////// HEADER //////////////////////

  $('#location-nav').hover(function(){
    var $hl = $(".hidden-list");

    if ($hl.css('display') == 'none') {
      $hl.css('display', 'block').animate({'opacity': '1'});
    } else {
      $hl.animate({'opacity': '0'}, function() {
        $hl.css('display', 'none');
      });
    }
  });

  $('.location-mobile').click(function(e){
    e.stopPropagation();
    var $hl = $(".hidden-list");

    if ($hl.css('display') == 'none') {
      $hl.css('display', 'block').animate({'opacity': '1'});
    } else {
      $hl.animate({'opacity': '0'}, function() {
        $hl.css('display', 'none');
      });
    }
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() > 100 && $('body').width() > MOBILE_WIDTH) {
      $('#nav-open').addClass('nav-open-scrolled');
      $('#header').addClass('header-scrolled');
    } else {
      $('#nav-open').removeClass('nav-open-scrolled');
      $('#header').removeClass('header-scrolled');
    }
  });

  $(window).resize(function(){
    $(window).trigger('scroll');
  });

  //////// PLACEHOLDER TEXT DISAPPEARS ON FOCUS ///////

  var placeText;
 
  $('.focus-hide').focus(function() {
    placeText = $(this).attr('placeholder');
    $(this).css('color', 'transparent');
    $(this).attr('placeholder','').delay('500').css('color', 'black');
  }).blur(function() {
    $(this).attr('placeholder', placeText);
  }).blur();

  ///////////////// BOX 4 ADJUSTMENT ON INDEX PAGE /////////////////////

  if ($("body").hasClass("index")) {
    // on mobile, adjusts box-04 to the height of box-03
    function adjustBox4 () {
      if ($('body').width() <= MOBILE_WIDTH) {
        $("#box-04").height($("#box-03").height());
      } else {
        $("#box-04").css('height', 'auto');
      }
    }

    adjustBox4();
    $(window).resize(adjustBox4);
  }

});
