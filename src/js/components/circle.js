export function circle() {
  const cards = document.querySelectorAll('[data-card]');

  if (cards.length !== 0) {
    cards.forEach(item => {
      let circle = item.querySelector('[data-circle]');
      let circleBg = item.querySelector('[data-circleBg]');
      let percent = item.querySelector('[data-percent]').textContent;

      circle.setAttribute('r', item.offsetWidth / 2);
      circleBg.setAttribute('r', item.offsetWidth / 2);
      draw(circle, percent);
    });
  }

  function draw(el, percent) {
    let length = 2 * Math.PI * el.getAttribute('r');

    el.setAttribute('stroke-dasharray', length);
    el.setAttribute('stroke-dashoffset', length - length * percent / 100);
  }
}
