import Parallax from '../vendor/parallax.min.js'

export function parallax() {
  let parallaxElements = document.querySelectorAll('.js-parallax');
  if(parallaxElements.length > 0) {
    parallaxElements.forEach(item => {
      let parallaxInstance = new Parallax(item);
    });
  }
}
