export function skillBar() {
  const cards = document.querySelectorAll('[data-skill]');

  if (cards.length > 0) {
    cards.forEach(item => {
      let value = 100;
      item.querySelector('[data-bar]').style.width = `${value}%`;
    });
    function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.classList.add('skills-list__bar-content--active');
        }
      });
    }
    let options = { threshold: [0] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('[data-bar]');

    for (let elm of elements) {
      observer.observe(elm);
    }
  }
}
