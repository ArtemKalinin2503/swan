import $ from 'jquery';
function toggleContactUsBlocks() {
  let button = $('.contact-us__button');
  let block = $('.contact-us__block')
  button.on('click', function() {
    $(this).hide();
    block.removeClass('contact-us__block-hidden');
  });
}
toggleContactUsBlocks();