@@include('libs/slick.min.js', {});

$(function(){

  $('.slider__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.works__inner').slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="../img/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="../img/icons/arrow-right.svg" alt=""></button>',
  });

});