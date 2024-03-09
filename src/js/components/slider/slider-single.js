import $ from 'jquery';
import Splide from '@splidejs/splide';

function sliderSingle() {
  if ($('.single-slider').length !== 0) {
    new Splide('.single-slider', {
      arrows: false,
      pagination: true,
      perPage: 1,
      lazyLoad: 'nearby',
      drag: true,
      mediaQuery: 'min',
    }).mount();
  }
}
sliderSingle();