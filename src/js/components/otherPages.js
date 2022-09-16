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

      const tooltipTxt = document.querySelector('.tooltip__txt');
      const tooltipBtn = document.querySelector('.tooltip__btn');
      if(vars.htmlEl.classList.contains('page--android') || vars.htmlEl.classList.contains('page--ios')) {
        tooltipBtn.addEventListener('click', (e) => {
          tooltipTxt.classList.toggle('tooltip__txt--mobile-active');
        });
      }

      if(vars.htmlEl.offsetWidth < 575.98) {
        setTimeout(() => {
          document.querySelector('.about__illustration').style.transform = 'translateY(-40%) translateX(50%)';
        }, 500);
      } else if (vars.htmlEl.offsetWidth >= 575.98) {
        setTimeout(() => {
          document.querySelector('.about__illustration').style.transform = 'translateY(-40%)';
        }, 500);
      }
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
