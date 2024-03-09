import $ from 'jquery';
function toggleMobMenuItems() {
  let button = $('.mob-menu__stepper');
  let container = $('.mob-menu__block');
  for (let i = 0; i < Array.from(button).length; i++) {
    $(button[i]).on('click', function () {
      let id = button[i].getAttribute('data-id');
      let block = $('.mob-menu__block[data-id="' + id + '"]');
      container.removeClass('active');
      button.removeClass('active');
      if (id == 'cruises-departures') {
        $('.mob-menu__year[data-id="2023"]').addClass('active');
      }
      $(block).attr('data-id', $(this).attr('data-id')).addClass('active');
      $(this).addClass('active');
    });
  }
}
toggleMobMenuItems();