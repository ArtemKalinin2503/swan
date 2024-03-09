import $ from 'jquery';

import { gsap } from "gsap";

function mousemoveCardCursor() {
  let imageContainers = document.querySelectorAll('.card__image');
  let bubbles = document.querySelectorAll('.card__bubble');
  imageContainers.forEach((container, index) => {
    let bubble = bubbles[index];
    container.addEventListener('mouseenter', () => {
      gsap.to(bubble, { opacity: 1, duration: 0.3, ease: "power2.out" });
    });
    container.addEventListener('mousemove', (e) => {
      let x = e.clientX - container.getBoundingClientRect().left - bubble.clientWidth / 2;
      let y = e.clientY - container.getBoundingClientRect().top - bubble.clientHeight / 2;
      gsap.to(bubble, { x, y, duration: 1, ease: "power2.out" });
    });
    container.addEventListener('mouseleave', () => {
      gsap.to(bubble, { opacity: 0, duration: 0.3, ease: "power2.out" });
    });
  });
}
mousemoveCardCursor();