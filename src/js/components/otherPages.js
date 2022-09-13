import vars from '../_vars';

export function otherPages() {
  const sectionWorks = document.querySelector('.works');
  const sectionAbout = document.querySelector('.about');

  if(!vars.fullPage) {
    vars.htmlEl.style.overflow = 'visible';

    if(sectionWorks) {
      setColor(sectionWorks);
    } else if(sectionAbout) {
      setColor(sectionAbout);
    }
  }

  function setColor(el) {
    if(el) {
      window.addEventListener('scroll', () => {
        if(window.scrollY >= el.offsetHeight) {
          vars.htmlEl.classList.add('header-color');
        } else {
          vars.htmlEl.classList.remove('header-color');
        }
      });
    }
  }
}
