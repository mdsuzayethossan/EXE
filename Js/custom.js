$(function (){

  $('.service_facility_right').slick({
    vertical: true,
    arrows: false,
    autoplay:true,
   verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });

  // counter
  $('.counter').counterUp({
    delay: 30,
    time: 5000,
  });

  // slider
  
$('.banner_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows:false,
  speed:2500,
  arrows:true,
  prevArrow:'.h_left',
  nextArrow:'.h_right',
});












});