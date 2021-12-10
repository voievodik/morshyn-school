$(function(){
   $('.slider__inner').slick({
       autoplay: true,
       arrows: false,
       fade: true,
       speed: 400
   });
    
   $('.menu__btn').on('click', function(){
       $('.menu__list').toggleClass('menu__list-active')
   });
    
});