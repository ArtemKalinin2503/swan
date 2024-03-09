import $ from 'jquery';
import Splide from '@splidejs/splide';

function sliderNews() {
  if ($('.ship-introducing__bottom').length !== 0) {
    new Splide('.ship-introducing__slider', {
      arrows: true,
      gap: 24,
      pagination: false,
      perPage: 1,
      lazyLoad: 'nearby',
      drag: true,
      mediaQuery: 'min',
      breakpoints: {
        1240: {
          arrows: false,
          destroy: true,
        },
      }
    }).mount();
  }
}
sliderNews();