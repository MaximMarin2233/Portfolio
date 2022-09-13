import vars from '../_vars';

export function scrollAnim() {
  if(vars.fullPage) {
    function onEntry(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.classList.add('show');
        } else if(!change.isIntersecting) {
          change.target.classList.remove('show');
        }
      });
    }
    let options = { threshold: [0] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('[data-text]');

    for (let elm of elements) {
      observer.observe(elm);
    }
  }
}
