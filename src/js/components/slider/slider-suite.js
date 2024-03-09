import $ from 'jquery';
import Splide from '@splidejs/splide';

function sliderSuite() {
  if ($('.card-suite__wrapper').length !== 0) {
    const sliderContainers = document.querySelectorAll('.card-suite__wrapper');
    let i = 0;
    if (sliderContainers.length > 0) {
      sliderContainers.forEach((container, index) => {
        const mainSelector = `.${container.getAttribute('data-slider')}${i}__track`;
        let main = new Splide(mainSelector, {
          gap: 20,
          drag: true,
          speed: 800,
          arrows: false,
          perPage: 1,
          lazyLoad: 'nearby',
        });
        main.mount();
        i++;
      });
    }
  }
}
sliderSuite();