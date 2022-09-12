export function skillBar() {
  const cards = document.querySelectorAll('[data-skill]');

  if(cards.length > 0) {
    cards.forEach(item => {
      let value = item.querySelector('.skills-list__value').textContent;
      item.querySelector('[data-bar]').style.width = `${value}%`;
    });
  }
}
