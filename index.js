// burger menu button animation for mobile

$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');

  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});


// home carousel transition speed

$(document).ready(function () {
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000
});