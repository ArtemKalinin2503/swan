import $ from 'jquery';
function toggleSearch() {
  let button = $('.header__search');
  let search = $('.search__form');
  button.on('click', function() {
    search.addClass('active');
    search.find('input').focus();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key == 'Escape') {
      search.removeClass('active');
      document.removeEventListener('keydown', arguments.callee);
    }
  });
  $(document).mouseup(function(e) {
    if (!search.is(e.target) && !$('.search__form input').is(e.target) && !$('.search__button').is(e.target)) {
      search.removeClass('active');
    }
  });
}
toggleSearch();