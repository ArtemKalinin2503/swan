import $ from 'jquery';
function toggleMobMenuYear() {
  let button = $('.mob-menu__button');
  let container = $('.mob-menu__year');
  for (let i = 0; i < Array.from(button).length; i++) {
    $(button[i]).on('click', function () {
      let id = button[i].getAttribute('data-id');
      let block = $('.mob-menu__year[data-id="' + id + '"]');
      container.removeClass('active');
      button.removeClass('active');
      $(block).attr('data-id', $(this).attr('data-id')).addClass('active');
      $(this).addClass('active');
    });
  }
}
toggleMobMenuYear();