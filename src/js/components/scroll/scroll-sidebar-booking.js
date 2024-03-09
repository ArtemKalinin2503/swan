import $ from 'jquery';

function scrollSidebarBooking() {
  function addActiveClass() {
    if ($('.sidebar-booking').length > 0) {
      const booking = $('.sidebar-booking')[0];
      const container = $('.grid-booking')[0];
      const bookingRect = booking.getBoundingClientRect();
      const isBookingVisible = bookingRect.top <= window.innerHeight && bookingRect.bottom >= 0;
      const isScrolledUpOrDown = window.scrollY < lastScrollY || window.scrollY > lastScrollY;
      if (isBookingVisible && isScrolledUpOrDown) {
        $(container).addClass('active');
      } else {
        $(container).removeClass('active');
      }
      lastScrollY = window.scrollY;
    }
  }
  let lastScrollY = 0;
  $(window).on('scroll', addActiveClass);
}
if ($(window).outerWidth() <= 1240) {
  scrollSidebarBooking();
}

$(window).on('resize', function() {
  if ($(window).outerWidth() <= 1240) {
  scrollSidebarBooking();
  }
});