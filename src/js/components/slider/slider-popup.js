import $ from 'jquery';
import Splide from '@splidejs/splide';

function sliderPopup() {
  if ($('.popup-slider').length !== 0) {
    const sliderContainers = document.querySelectorAll('.popup-slider');
    let i = 0;
    sliderContainers.forEach((container, index) => {
      const mainSelector = `.${container.getAttribute('data-slider')}${i}__track`;
      let main = new Splide(mainSelector, {
        gap: 20,
        arrows: false,
        perPage: 1,
        drag: true,
        speed: 800,
        perMove: 1,
        mediaQuery: 'min',
        breakpoints: {
          768: {
            destroy: true,
          },
        }
      })
      main.mount();
      i++;
    });
  }
}
sliderPopup();