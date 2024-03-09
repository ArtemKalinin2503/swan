import $ from 'jquery';

import { enablePageScroll } from "scroll-lock";

export default function successMessage(container) {
  let popup = $(`.${container}`);
  let bg = $('.popup__overlay');
  let timer;

  function closePopup() {
    popup.removeClass('active');
    bg.removeClass('active');
    enablePageScroll();
    clearTimeout(timer);
  }

  popup.addClass('active');
  bg.addClass('active');

  timer = setTimeout(closePopup, 4000);

  popup.on('click', function() {
    closePopup();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key == 'Escape') {
      closePopup();
    }
  });
}