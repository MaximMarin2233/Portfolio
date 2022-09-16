import vars from '../_vars';
import Parallax from '../vendor/parallax.min.js'

export function parallax() {
  if(!vars.htmlEl.classList.contains('page--android') && !vars.htmlEl.classList.contains('page--ios')) {
    let parallaxElements = document.querySelectorAll('.js-parallax');
    if(parallaxElements.length > 0) {
      parallaxElements.forEach(item => {
        let parallaxInstance = new Parallax(item);
      });
    }
  }
}
