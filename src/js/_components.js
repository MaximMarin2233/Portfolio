import './components/burger';
import './components/tooltip';
import './components/skill-bar';
import './components/scroll';
import './components/parallax';


import { burger } from "./components/burger";
import { tooltip } from "./components/tooltip";
import { skillBar } from "./components/skill-bar";
import { scroll } from "./components/scroll";
import { parallax } from "./components/parallax";


window.addEventListener('DOMContentLoaded', () => {
  burger();
  tooltip();
  skillBar();
  scroll();
  parallax();
  // setTimeout(() => {
  //   document.querySelector('.about__illustration').classList.add('about__illustration--animation');
  // }, 2000);
});
