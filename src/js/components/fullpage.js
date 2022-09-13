import vars from '../_vars';
import './scroll';
import { scroll } from "./scroll";

export function fullPage() {
  if(vars.fullPage) {
    scroll();
    setTimeout(() => {
      vars.fullPage.style.transition = 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)';
    }, 5);
  }
}
