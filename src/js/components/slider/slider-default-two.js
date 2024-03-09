import $ from 'jquery';

import Splide from '@splidejs/splide';

function sliderDefaultTwo() {
  if ($('.default-slider-two').length !== 0) {
    const sliderContainers = document.querySelectorAll('.default-slider-two');
    let i = 0;
    if (sliderContainers.length > 0) {
      sliderContainers.forEach((container, index) => {
        const mainSelector = `.${container.getAttribute('data-slider')}${i}-two__track`;
        let main = new Splide(mainSelector, {
          mediaQuery: 'min',
          lazyLoad: 'nearby',
          gap: 20,
          drag: true,
          pagination: false,
          arrows: false,
          perPage: 1,
          padding: { right: 100 },
          speed: 800,
          perMove: 1,
          breakpoints: {
            1240: {
              gap: 40,
              perPage: 2,
              padding: { right: 0 },
              arrows: true,
            },
            768: {
              gap: 40,
              perPage: 2,
              padding: { right: 120 },
            },
          }
        });
        main.mount();
        i++;
      });
    }
  }

}
sliderDefaultTwo();