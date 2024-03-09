import $ from 'jquery';
function togglePopupFields() {
  let button = $('.popup__label');
  let container = $('.popup__input');
  for (let i = 0; i < Array.from(button).length; i++) {
    $(button[i]).on('click', function () {
      let id = button[i].getAttribute('data-label');
      let block = $('.popup__input[data-input="' + id + '"]');
      container.removeClass('active');
      $(block).attr('data-input', $(this).attr('data-label')).addClass('active');
    });
  }
}
togglePopupFields();