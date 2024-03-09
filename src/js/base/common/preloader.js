import gsap from "gsap";
import $ from 'jquery';
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function renderPage() {
  disablePageScroll();
  let render = $(".render");
  let logo = $('.render__logo')
  let tlShow = gsap.timeline({
    delay: 0.3,
    onComplete: () => {
      tlHide.play();
    }
  });
  let tlHide = gsap.timeline({delay: 1.4});
  tlShow
    .to(logo, {opacity: 1, duration: 0.6 })
    .to(logo, {y: '100%', duration: 0.6, ease: "back.inOut(1.7)"});
  tlHide.to(render, {y: '-100%', duration: 0.5, onComplete: () => {
    render.remove();
    enablePageScroll();
    $('.header__top').addClass('active');
    $('.hero-filter').addClass('active');
    $('.splide__pagination').addClass('active');

    $('.header__link__inner').addClass('active');
    $('.hero__content .splide__arrows').addClass('active');

    $('.hero__title').addClass('active');
    if ($('.hero__tip').length > 0) {
      $('.hero__tip').addClass('active');
    }
    $('.hero__description').addClass('active');
    if ($('.hero__footer').length > 0) {
      $('.hero__footer').addClass('active');
    }

  }});
}
renderPage();