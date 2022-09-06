import './components/burger';
import './components/tooltip';


import { burger } from "./components/burger";
import { tooltip } from "./components/tooltip";


window.addEventListener('DOMContentLoaded', () => {
  burger();
  tooltip();
  // setTimeout(() => {
  //   document.querySelector('.about__illustration').classList.add('about__illustration--animation');
  // }, 50);
});
