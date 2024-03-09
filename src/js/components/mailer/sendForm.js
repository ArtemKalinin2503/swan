import $ from 'jquery';

import sendMail from "./sendMail.js"
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import gsap from "gsap";
import Inputmask from 'inputmask';

function sendForm() {

  let closeAlertPopup = $('.popup-alert__button');
  let bg = $('.popup__overlay');
  let popupAlert = $('.popup-alert')
  closeAlertPopup.on('click', function() {
    popupAlert.removeClass('active');
    bg.removeClass('active');
    enablePageScroll();
  });

  function sendPopupForm() {
    $('button[type="submit"]').closest('form').on('submit', function(e) {
      $('.popup__overlay').addClass('active');
      disablePageScroll();
      let that = $(this);
      e.preventDefault();
      sendMail(that).then(function() {
        $('.popup').removeClass('active');
        $('#datepicker').removeClass('selected');
        $('.hero-filter__input span').removeClass('selected');
        $('.hero-filter__item').removeClass('active');
        $('.hero-filter__label-destination .hero-filter__input span').text('Select destination');
        $('.hero-filter__label-guests .hero-filter__input span').text('Select guests');
        $('.hero-filter__label-ship .hero-filter__input span').text('Select ship');
        if ($('.sidebar-cruises').length > 0) {
          gsap.to($('.sidebar-cruises'), {y: '100%', opacity: 1, duration: 0.4, ease: "power2.out"});
        }
        that.get(0).reset();
      });
    });
  }
  sendPopupForm();

}
setTimeout(function() {
  sendForm();
}, 100);

function inputMask() {
  let input =  $('input[type="tel"]');
  Array.from(input).forEach(function(element) {
    let mask = new Inputmask('+7 (999) 999-99-99');
    mask.mask(element);
  });
}
inputMask();