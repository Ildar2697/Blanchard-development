window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container-hero', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    speed: 1000,
    simulateTouch: false,
    touchRatio: 0,
    slideToClickedSlide: false,
  });
  const swiperProjects = new Swiper('.projects__partners-slider', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.projects__slider-right',
      prevEl: '.projects__slider-left',
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    // spaceBetween: 20,
  });
  
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 14,
        });
        myMap.controls.remove('searchControl');
        myMap.controls.remove('routeButton');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('rulerControl');
    }

  let callbackInputTel = document.querySelector('.contacts__left-tel');
  let inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(callbackInputTel);
})