import $ from 'jquery';
import Splide from '@splidejs/splide';

function sliderHero() {
  let slides = $('.hero__content .splide__slide').length;
  let total = $('.splide__number-total');
  let current = $('.splide__number-current');
  total.text(slides);
  if ($('.hero__images.splide').length !== 0) {
    let images = new Splide('.hero__images', {
      type: 'fade',
      rewind: true,
      pagination: false,
      arrows: false,
      perPage: 1,
      lazyLoad: 'nearby',
    });
    let content = new Splide('.hero__content', {
      type: 'fade',
      rewind: true,
      arrows: true,
      perPage: 1,
      drag: false,
      pagination: true,
    });
    images.sync(content);
    images.mount();
    content.mount();
    content.on('moved', function(slideIndex) {
      current.text(slideIndex + 1);
    });
  }
}
sliderHero();