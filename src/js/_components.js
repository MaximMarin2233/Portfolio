import './components/burger';
import './components/circle';


import { burger } from "./components/burger";
import { circle } from "./components/circle";


window.addEventListener('DOMContentLoaded', () => {
  burger();
  circle();
  // setTimeout(() => {
  //   document.querySelector('.about__illustration').classList.add('about__illustration--animation');
  // }, 50);
});
