import $ from 'jquery';
function toggleSuiteType() {
  let button = $('.suites__nav__button');
  let container = $('.suites__container');
  for (let i = 0; i < Array.from(button).length; i++) {
    $(button[i]).on('click', function () {
      let id = button[i].getAttribute('data-id');
      let block = $('.suites__container[data-id="' + id + '"]');

      container.removeClass('active');
      button.removeClass('active');

      $(block).attr('data-id', $(this).attr('data-id')).addClass('active');
      $(this).addClass('active');
    });
  }
}
toggleSuiteType();