import $ from 'jquery';

import gsap from "gsap";

function scrollHeader() {
  let header = $('.header');
  let menu = $('.header__menu')
  let items = $('.header__menu > .header__item > .header__link')
  let container = $('.wrapper');
  let logo = $('.header__bottom .header__logo__inner');
  let main = $('main');
  let containerWidth = container.width();
  let menuWidth = menu.width();

  $(window).on('resize', function() {
    containerWidth = container.width();
    menuWidth = menu.width();
    gsap.to(logo, 0, {x: -(containerWidth - menuWidth) / 2});
  });

  gsap.to(logo, 0, {x: -(containerWidth - menuWidth) / 2});

  if (window.pageYOffset > 0) {
    header.addClass('scrolled');
    logo.addClass('active');
    main.addClass('scrolled');
    gsap.to(items, 0.3, {x: (containerWidth - menuWidth) / 2});
  }

  $(window).on('scroll', function() {
    $('.header__languages').removeClass('active');
    $('.header__toggle').removeClass('active');
    if (window.pageYOffset > 0) {
      header.addClass('scrolled');
      logo.addClass('active');
      main.addClass('scrolled');
      gsap.to(items, 0.3, {x: (containerWidth - menuWidth) / 2});
    } else {
      header.removeClass('scrolled');
      logo.removeClass('active');
      main.removeClass('scrolled');
      gsap.to(items, 0.3, {x: 0});
    }
  });
}
scrollHeader();