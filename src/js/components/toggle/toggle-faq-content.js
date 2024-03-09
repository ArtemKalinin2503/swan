import $ from 'jquery';
import gsap from "gsap";
import { clearQueueScrollLocks, enablePageScroll } from "scroll-lock";

function toggleFaqContent() {
  let button = $('.faq__header');
  button.on('click', function() {
    $(this).parent().toggleClass('active');
  });
}
toggleFaqContent();

function toggleFaqAsideContent() {
  let button = $('.faq__link');
  let popup = $('.popup');
  let bg = $('.popup__overlay');
  let wrapper = $('.popup__wrapper');
  button.on('click', function() {
    button.removeClass('active');
    $(this).addClass('active');
    let id = $(this).attr('href');
    let block = $('.privacy-policy__link[href="' + id + '"]');
    $(block).attr('href', $(this).attr('href')).addClass('active');
    if ($(window).outerWidth() <= 1240) {
      if (popup.hasClass('popup-faq')) {
        gsap.to(wrapper, { y: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
          popup.removeClass('active');
          bg.removeClass('active');
        }});
      }
      clearQueueScrollLocks();
      enablePageScroll();
    }
  });
  $(window).on('resize', function() {
    if ($(window).outerWidth() >= 1240) {
      if (popup.hasClass('popup-faq active')) {
        gsap.to(wrapper, { y: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
          popup.removeClass('active');
          bg.removeClass('active');
        }});
      }
      clearQueueScrollLocks();
      enablePageScroll();
    }
  });
}
toggleFaqAsideContent();