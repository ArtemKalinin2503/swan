import $ from 'jquery';
import gsap from "gsap";
import { clearQueueScrollLocks, enablePageScroll } from "scroll-lock";

function togglePolicyAsideContent() {
  let button = $('.privacy-policy__link');
  let popup = $('.popup');
  let bg = $('.popup__overlay');
  let wrapper = $('.popup__wrapper');
  button.on('click', function() {
    button.removeClass('active');
    let id = $(this).attr('href');
    let block = $('.privacy-policy__link[href="' + id + '"]');
    $(block).attr('href', $(this).attr('href')).addClass('active');
    if ($(window).outerWidth() <= 1240) {
      if (popup.hasClass('popup-privacy-policy')) {
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
togglePolicyAsideContent();