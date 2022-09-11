import './components/burger';
import './components/tooltip';
import './components/skill-bar';
import './components/scroll';
import './components/parallax';
import './components/scrollAnim';


import { burger } from "./components/burger";
import { tooltip } from "./components/tooltip";
import { skillBar } from "./components/skill-bar";
import { scroll } from "./components/scroll";
import { parallax } from "./components/parallax";
import { scrollAnim } from "./components/scrollAnim";


window.addEventListener('DOMContentLoaded', () => {
  burger();
  tooltip();
  skillBar();
  scroll();
  parallax();
  scrollAnim();
  // setTimeout(() => {
  //   document.querySelector('.about__illustration').classList.add('about__illustration--animation');
  // }, 2000);
});
