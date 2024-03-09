import $ from 'jquery';
import Splide from '@splidejs/splide';

function sliderNews() {
  if ($('.news-block').length !== 0) {
    new Splide('.news-block', {
      gap: 24,
      arrows: false,
      pagination: false,
      perPage: 1,
      padding: { right: 80 },
      lazyLoad: 'nearby',
      drag: true,
      mediaQuery: 'min',
      breakpoints: {
        768: {
          destroy: true,
        },
      }
    }).mount();
  }
}
sliderNews();