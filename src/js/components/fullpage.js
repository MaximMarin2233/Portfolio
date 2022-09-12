import './scroll';
import { scroll } from "./scroll";

export function fullPage() {
  const fullPage = document.querySelector('.full-page');

  if(fullPage) {
    scroll();
    setTimeout(() => {
      fullPage.style.transition = 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)';
    }, 5);
  }
}
