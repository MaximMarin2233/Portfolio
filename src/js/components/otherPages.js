export function otherPages() {
  const fullPage = document.querySelector('.full-page');

  const sectionWorks = document.querySelector('.works');
  const sectionAbout = document.querySelector('.about');

  if(!fullPage) {
    document.documentElement.style.overflow = 'visible';

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
          document.documentElement.classList.add('header-color');
        } else {
          document.documentElement.classList.remove('header-color');
        }
      });
    }
  }
}
