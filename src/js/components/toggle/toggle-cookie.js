import $ from 'jquery';
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import gsap from "gsap";

function toggleCookie() {
  let popupCookie = $('.cookie');
  let popup = $('.popup-cookie');
  let bg = $('.popup__overlay');
  let inputs = $('.popup-cookie .popup__input')
  let acceptAllCookies = $('.accept-all-cookies');
  let acceptChoosenCookies = $('.accept-choosen-cookies');
  let wrapper = $('.popup-cookie .popup__wrapper');
  let container = $('.popup-cookie .popup__container');

  let classView = localStorage.getItem('cookied');
  !!classView && popupCookie.show();
  classView && popupCookie.hide();

  acceptAllCookies.on('click', function() {
    Array.from(inputs).forEach(function(input) {
      $(input).attr('checked', true);
      localStorage.setItem(input.name, 'checked')
      localStorage.setItem('cookied', 'true');
    });
    closeCookie();
  });
  acceptChoosenCookies.on('click', function() {
    Array.from(inputs).forEach(function(input) {
      localStorage.removeItem(input.name);
      if ($(input).prop('checked') == true) {
        localStorage.setItem(input.name, 'checked')
        localStorage.setItem('cookied', 'true');
      }
    });
    closeCookie();
  });

  function closeCookie() {
    if ($(window).outerWidth() > 768) {
      gsap.to(wrapper, { x: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
        popup.removeClass('active');
        bg.removeClass('active');
        popupCookie.fadeOut(300);
      }});
    } else {
      gsap.to(wrapper, { y: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
        popup.removeClass('active');
        bg.removeClass('active');
        popupCookie.fadeOut(300);
      }});
    }
    clearQueueScrollLocks();
    enablePageScroll();
  }
}
toggleCookie();