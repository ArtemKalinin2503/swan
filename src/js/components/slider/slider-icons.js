import $ from 'jquery';
import Splide from '@splidejs/splide';

function sliderIcons() {
  if ($('.icons-block').length !== 0) {
    new Splide('.icons-block', {
      arrows: false,
      rewind: true,
      autoWidth: true,
      perPage: 1,
      focus: 'center',
      lazyLoad: 'nearby',
      perMove: 1,
      updateOnMove : true,
      mediaQuery: 'min',
      breakpoints: {
        1240: {
          destroy: true,
        },
        768: {
          perPage: 2,
          perMove: 2,
        },
      }
    }).mount();
  }
}
sliderIcons();