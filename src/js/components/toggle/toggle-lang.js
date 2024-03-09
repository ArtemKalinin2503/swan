import $ from 'jquery';
function toggleLang() {
  let button = $('.header__toggle');
  let menu = $('.header__languages');
  let items = $('.select-language');
  button.on('click', function() {
    $(this).toggleClass('active');
    menu.toggleClass('active');
  });
  for (let i = 0; i < Array.from(items).length; i++) {
    $(items[i]).on('click', function () {
      let id = items[i].getAttribute('data-id');
      let block = $('.select-language[data-id="' + id + '"]');
      items.removeClass('active');
      button.removeClass('active');
      $(block).attr('data-id', $(this).attr('data-id')).addClass('active');
      $(this).addClass('active');
      menu.removeClass('active');
      $(".header__burger").removeClass('active')
      $(".mob-menu").removeClass('active');
      $('.mob-menu__block').removeClass('active');
    });
  }
  $(document).mouseup(function(e) {
    if (!menu.is(e.target) && !button.is(e.target) && button.has(e.target).length === 0) {
      menu.removeClass('active');
      button.removeClass('active');
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key == 'Escape') {
      button.removeClass('active');
      menu.removeClass('active');
      document.removeEventListener('keydown', arguments.callee);
    }
  });
}
toggleLang();