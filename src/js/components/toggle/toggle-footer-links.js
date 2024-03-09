import $ from 'jquery';
import { gsap } from "gsap";

let isScriptActive = false;

function toggleFooterLinks() {
  let button = $('.footer__subtitle');
  button.on('click', function() {
    $(this).toggleClass('active');
    if ($(this).next().hasClass('active')) {
      $(this).next().removeClass('active');
      gsap.to($(this).next(), {height: 0, duration: 0.3});
    } else {
      $(this).next().addClass('active');
      gsap.to($(this).next(), {height: 'auto', duration: 0.3});
    }
  });
}

function activateScript() {
  if ($(window).outerWidth() < 768) {
    if (!isScriptActive) {
      toggleFooterLinks();
      gsap.to($('.footer__links'), {height: 0, duration: 0});
      isScriptActive = true;
    }
  } else {
    if (isScriptActive) {
      let button = $('.footer__subtitle');
      button.off('click');
      button.removeClass('active');
      $('.footer__links').removeClass('active');
      gsap.to($('.footer__links'), {height: 'auto', duration: 0});
      isScriptActive = false;
    }
  }
}

activateScript();

$(window).on('resize', activateScript);