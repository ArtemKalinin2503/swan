import $ from 'jquery';
function toggleTags() {
  let button = $('.tag');
  let clear = $('.tags__clear');
  for (let i = 0; i < Array.from(button).length; i++) {
    $(button[i]).on('click', function () {
      let id = button[i].getAttribute('data-tag');
      let btn = $('.tag[data-tag="' + id + '"]');
      $(btn).attr('data-tag', $(this).attr('data-tag')).toggleClass('active');
    });
  }
  clear.on('click', function () {
    button.removeClass('active');
  });
}
toggleTags();