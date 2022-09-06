import './components/burger';
import './components/tooltip';
import './components/skill-bar';


import { burger } from "./components/burger";
import { tooltip } from "./components/tooltip";
import { skillBar } from "./components/skill-bar";


window.addEventListener('DOMContentLoaded', () => {
  burger();
  tooltip();
  skillBar();
  // setTimeout(() => {
  //   document.querySelector('.about__illustration').classList.add('about__illustration--animation');
  // }, 50);
});
