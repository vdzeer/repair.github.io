$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrow__left'),
        nextArrow: $('.arrow__right'),
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }   
            },
            {
            breakpoint: 786,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
  });