import $ from 'jquery';
function togglePartnerText() {
  let button = $('.partner-block__toggle');
  button.on('click', function() {
    $(this).prev().toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).text('Show more');
    } else {
      $(this).text('Show less');
    }
  });
}
togglePartnerText();