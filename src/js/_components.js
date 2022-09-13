import vars from './_vars';

import './components/burger';
import './components/tooltip';
import './components/skillBar';
import './components/parallax';
import './components/scrollAnim';
import './components/fullpage';
import './components/pageLoading';
import './components/otherPages';


import { burger } from "./components/burger";
import { tooltip } from "./components/tooltip";
import { skillBar } from "./components/skillBar";
import { parallax } from "./components/parallax";
import { scrollAnim } from "./components/scrollAnim";
import { fullPage } from "./components/fullpage";
import { pageLoading } from "./components/pageLoading";
import { otherPages } from "./components/otherPages";

window.addEventListener('load', () => {
  setTimeout(() => {
    pageLoading();
  }, 100);
  setTimeout(() => {
    scrollAnim();
  }, 700);
  setTimeout(() => {
    vars.pageLoader.remove();
  }, 2000);
});

window.addEventListener('DOMContentLoaded', () => {
  fullPage();
  burger();
  tooltip();
  skillBar();
  parallax();
  otherPages();
});
