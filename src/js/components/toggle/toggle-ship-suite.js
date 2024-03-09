import $ from 'jquery';
import { gsap } from "gsap";
import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from "scroll-lock";

function setActive(element, selector) {
  element.removeClass('active');
  element.filter(selector).addClass('active');
}

function toggleShipSuite() {
  const deck = $('.popup-select__deck');
  const type = $('.popup-select__type');
  const room = $('.popup-select__suite');
  const typesContainer = $('.popup-select__types');
  const shipContainer = $('.popup-select__ship');
  const select = $('.popup-select__button');

  deck.on('click', function () {
    setActive(deck, this);
    typesContainer.removeClass('active');
    shipContainer.removeClass('active');
    const id = $(this).attr('data-deck');
    typesContainer.filter('[data-types="' + id + '"]').addClass('active');
    shipContainer.filter('[data-ship="' + id + '"]').addClass('active');
  });

  type.not('.popup-select__type-unavalible').on('click', function () {
    room.removeClass('active');
    type.removeClass('active');
    const id = $(this).attr('data-type');
    const rooms = $('.popup-select__suite[data-type="' + id + '"]');
    type.filter('[data-type="' + id + '"]').addClass('active');
    rooms.attr('data-type', $(this).attr('data-type')).addClass('active');
  });

  room.not('.popup-select__suite-unavalible').on('click', function () {
    room.removeClass('active selected');
    const id = $(this).attr('data-type');
    const rooms = $('.popup-select__suite[data-type="' + id + '"]');
    type.filter('[data-type="' + id + '"]').addClass('active');
    rooms.attr('data-type', $(this).attr('data-type')).addClass('active');
    $(this).addClass('selected');

    $('.popup-select__preference-deck span').text($('.popup-select__deck.active').text());
    $('.popup-select__preference-type span').text($('.popup-select__type.active .popup-select__type__content p').eq(0).text());
    $('.popup-select__preference-stateroom span').text($('.popup-select__deck.active').eq(0).text());
    $('.popup-select__preference-price span').text($('.popup-select__type.active .popup-select__type__content span').eq(0).text());

    select.removeClass('button-disabled');
  });

  const popup = $('.popup-select');
  const bg = $('.popup__overlay');
  const wrapper = popup.find('.popup__wrapper');
  const container = popup.find('.popup__container');

  select.on('click', function () {
    const width = $(window).outerWidth();
    const ease = "power2.out";
    const onComplete = () => {
      popup.removeClass('active');
      bg.removeClass('active');
    };

    if (width > 768) {
      gsap.to(wrapper, { x: '100%', duration: 0.4, ease });
    } else {
      gsap.to(wrapper, { y: '100%', duration: 0.4, ease });
    }

    $('.popup-select__suite, .popup-select__type, .popup-select__deck, .popup-select__ship').removeClass('active');
    typesContainer.filter('[data-types="deck_5"]').addClass('active');
    deck.filter('[data-deck="deck_5"]').addClass('active');
    shipContainer.filter('[data-ship="deck_5"]').addClass('active');
    select.addClass('button-disabled');

    $('.popup-select__preference-deck span, .popup-select__preference-type span, .popup-select__preference-stateroom span, .popup-select__preference-price span').text('-');

    const cardButtons = $('.card-suite__button');
    cardButtons.each(function () {
      const dataSelected = $(this).find('.button__input').attr('data-selected');
      if (dataSelected === select.find('.button__input').attr('data-selected')) {
        cardButtons.find('.button__input').attr('checked', false);
        $(this).find('.button__input').attr('checked', true);
        cardButtons.removeClass('selected');
        $(this).addClass('selected');
      }
    });

    enablePageScroll();
  });
}

toggleShipSuite();