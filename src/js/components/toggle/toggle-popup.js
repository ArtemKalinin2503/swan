import $ from 'jquery';
import { gsap } from "gsap";
import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from "scroll-lock";

function togglePopup() {
  const buttons = $('.popup-trigger');
  const popupWrappers = $('.popup__wrapper');
  const cardButtons = $('.card-suite__button');
  // $(window).on('resize', function() {
  //   if ($(window).outerWidth() > 768) {
  //     gsap.to(popupWrappers, { y: 0, duration: 0});
  //   } else {
  //     gsap.to(popupWrappers, { x: 0, duration: 0});
  //   }
  // });

  buttons.on('click', function() {
    let that = $(this);
    function openPopup() {
      const popupId = that.data('popup-button');
      const popup = $(`.popup[data-popup="${popupId}"]`);
      const bg = $('.popup__overlay');
      const wrapper = popup.find('.popup__wrapper');
      const close = $('.popup__close, .popup__close-mob');
      const scrollableElement = document.querySelectorAll('.popup__form, .popup__labels, .popup__block')

      $('.popup-select__button').find('.button__input').attr('data-selected', that.find('.button__input').attr('data-selected'));

      popup.addClass('active');
      bg.addClass('active');

      if (wrapper.length > 0) {
        if ($(window).outerWidth() > 768) {
          if (popup.hasClass('popup-faq') || popup.hasClass('popup-privacy-policy')) {
            gsap.to(wrapper, { y: 0, duration: 0.4, ease: "power2.out" });
          } else {
            gsap.to(wrapper, { x: 0, duration: 0.4, ease: "power2.out" });
          }
        } else {
          gsap.to(wrapper, { y: 0, duration: 0.4, ease: "power2.out" });
        }
      }

      disablePageScroll(scrollableElement);

      close.off('click');
      close.on('click', function() {
        if ($(window).outerWidth() > 768) {
          if (popup.hasClass('popup-faq') || popup.hasClass('popup-privacy-policy')) {
            gsap.to(wrapper, { y: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
              popup.removeClass('active');
              bg.removeClass('active');
            }});
          } else {
            gsap.to(wrapper, { x: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
              popup.removeClass('active');
              bg.removeClass('active');
            }});
          }
          clearQueueScrollLocks();
        } else {
          gsap.to(wrapper, { y: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
            popup.removeClass('active');
            bg.removeClass('active');
          }});
        }
        $('.popup-select__suite').removeClass('active').removeClass('selected');
        $('.popup-select__type').removeClass('active');
        $('.popup-select__types').removeClass('active');
        $('.popup-select__types[data-types="deck_5"]').addClass('active');
        $('.popup-select__deck').removeClass('active');
        $('.popup-select__deck[data-deck="deck_5"]').addClass('active');
        $('.popup-select__ship').removeClass('active');
        $('.popup-select__ship[data-ship="deck_5"]').addClass('active');
        $('.popup-select__button').addClass('button-disabled');

        $('.popup-select__preference-deck span').text('-');
        $('.popup-select__preference-type span').text('-');
        $('.popup-select__preference-stateroom span').text('-');
        $('.popup-select__preference-price span').text('-');

        $('.popup-select__button').find('.button__input').attr('data-selected', '');
        enablePageScroll();
      });

      bg.off('click');
      bg.on('click', function() {
        if ($(window).outerWidth() > 768) {
          if (popup.hasClass('popup-faq') || popup.hasClass('popup-privacy-policy')) {
            gsap.to(wrapper, { y: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
              popup.removeClass('active');
              bg.removeClass('active');
            }});
          } else {
            gsap.to(wrapper, { x: '100%', duration: 0.4, ease: "power2.out"});
            popup.removeClass('active');
            bg.removeClass('active');
          }
        } else {
          gsap.to(wrapper, { y: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
            popup.removeClass('active');
            bg.removeClass('active');
          }});
        }
        if (!$('.header__burger').hasClass('active')) {
          enablePageScroll();
        }
        $('.popup-select__button').find('.button__input').attr('data-selected', '');
      });

      function closePopupByTouch() {
        let startY = null;
        popup.on('touchstart', function(event) {
          startY = event.originalEvent.touches[0].clientY;
        });
        popup.on('touchend', function(event) {
          if (startY) {
            const endY = event.originalEvent.changedTouches[0].clientY;
            const deltaY = endY - startY;
            if (deltaY > 200) {
              gsap.to(wrapper, { y: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
                popup.removeClass('active');
                bg.removeClass('active');
              }});
              enablePageScroll();
              $('.popup-select__button').find('.button__input').attr('data-selected', '');
            }
            startY = null;
          }
        });
      }
      closePopupByTouch();

      function handleKeyDown(e) {
        if ($(window).outerWidth() > 1240) {
          if (e.key == 'Escape' && wrapper.length !== 0) {
            gsap.to(wrapper, { x: '100%', duration: 0.4, ease: "power2.out", onComplete: () => {
                popup.removeClass('active');
                bg.removeClass('active');
            }});
            enablePageScroll();
            $('.popup-select__button').find('.button__input').attr('data-selected', '');
            document.removeEventListener('keydown', handleKeyDown);
          }
        }
      }
      document.addEventListener('keydown', handleKeyDown);
    }

    if ($(this).hasClass('button__label')) {
      if ($(this).find('.button__input').prop('checked') == false) {
        openPopup();
      } else {
        cardButtons.find('.button__input').attr('checked', false);
        cardButtons.removeClass('selected');
      }
    } else {
      openPopup();
    }
  });

}

togglePopup();