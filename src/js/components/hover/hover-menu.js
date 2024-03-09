import $ from 'jquery';

function hoverMenu() {
  let button = $('.header-dropdown__nav__step1 .header-dropdown__nav__link');
  let button2 = $('.header-dropdown__nav__step2 .header-dropdown__nav__link');
  let container = $('.header-dropdown__nav__list');
  let results = $('.header-dropdown__result');
  let header = $('.header');
  for (let i = 0; i < Array.from(button).length; i++) {
    $(button[i]).on('mouseover', function () {
      let id = button[i].getAttribute('data-id');
      let block = $('.header-dropdown__nav__list[data-id="' + id + '"]');
      results.removeClass('active');
      button2.removeClass('active');
      container.removeClass('active');
      button.removeClass('active');
      $(block).attr('data-id', $(this).attr('data-id')).addClass('active');
      $(this).addClass('active');
    });
  }
  // header.on('mouseenter', function () {
  //   $(this).addClass('header-colorizer');
  // });
  // header.on('mouseleave', function () {
  //   $(this).removeClass('header-colorizer');
  // });
}
hoverMenu();

function hoverMenuResults() {
  let button = $('.header-dropdown__nav__step2 .header-dropdown__nav__link');
  let container = $('.header-dropdown__result');
  for (let i = 0; i < Array.from(button).length; i++) {
    $(button[i]).on('mouseover', function () {
      let id = button[i].getAttribute('data-id');
      let block = $('.header-dropdown__result[data-id="' + id + '"]');
      container.removeClass('active');
      button.removeClass('active');
      $(block).attr('data-id', $(this).attr('data-id')).addClass('active');
      $(this).addClass('active');
    });
  }
}
hoverMenuResults();