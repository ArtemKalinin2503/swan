import $ from 'jquery';

import SmoothScroll from "smooth-scroll";

function smoothScroll() {
  new SmoothScroll('a[href*="#"]', {
    speed: 800,
    after: function () {
      $("body").css("overflow", "");
    },
    offset: 100
  });
}
smoothScroll();