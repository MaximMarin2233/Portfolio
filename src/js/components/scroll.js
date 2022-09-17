import vars from '../_vars';
import { throttle } from '../functions/throttle';
import 'swiped-events';

export function scroll() {
  function resizeVal () {
    sectionHash();
  };
  let resizeFunc = throttle(resizeVal, 800);

  const anchors = document.querySelectorAll('[data-anchor]');
  const anchorsPos = {};
  const anchorsPosArr = [];

  const pagination = document.querySelectorAll('.pagination__link');

  const moonBg = document.querySelector('.moon-bg-wrapper');

  const footerMain = document.querySelector('.footer-main');

  const aboutAnim = document.querySelector('.about__illustration');

  if(vars.fullPage) {
    setInert();
    anchors[0].inert = false;

    anchors.forEach((item, i) => {
      anchorsPos[item.dataset.anchor] = i;
      anchorsPosArr[i] = item.dataset.anchor;
    });

    window.addEventListener('resize', resizeFunc);

    window.addEventListener('wheel', pageScroll);

    window.addEventListener("hashchange", sectionHash);

    if(vars.htmlEl.classList.contains('page--android') || vars.htmlEl.classList.contains('page--ios')) {
      document.addEventListener('swiped', function(e) {
        if(e.detail.dir == 'up') {
          scrollDown();
        } else if(e.detail.dir == 'down') {
          scrollUp();
        }
      });
    }
  }

  let lastStage = anchorsPos[location.hash.slice(1)] || 0;

  function pageScroll(e) {
    window.removeEventListener('wheel', pageScroll);
    setTimeout(() => {
      window.addEventListener('wheel', pageScroll);
    }, 700);

    if(!e.ctrlKey) {
      if(e.deltaY < 0) {
        scrollUp();
      } else if(e.deltaY > 0) {
        scrollDown();
      }
    }
  }

  function scrollUp() {
    if(location.hash) {
      let stage = anchorsPos[location.hash.slice(1)] - 1;
      if(stage >= 0) {
        location.hash = anchorsPosArr[stage];
        lastStage = stage;
      } else {
        if(lastStage - 1 >= 0) {
          location.hash = anchorsPosArr[lastStage - 1];
        }
      }

      return;
    }
  }
  function scrollDown() {
    if(location.hash) {
      let stage = anchorsPos[location.hash.slice(1)] + 1;
      if(stage < 4) {
        location.hash = anchorsPosArr[stage];
        lastStage = stage;
      } else {
        if(lastStage + 1 < 4) {
          location.hash = anchorsPosArr[lastStage + 1];
        }
      }

      return;
    }
    location.hash = anchorsPosArr[1];
  }

  function sectionHash() {
    if(vars.fullPage) {
      let anchor = anchorsPos[location.hash.slice(1)];

      document.querySelector('.container--full-height').style.height = `${vars.htmlEl.clientHeight}px`;
      anchors.forEach(item => {
        item.style.height = `${vars.htmlEl.clientHeight}px`;
      });

      if(anchor || anchor === 0) {
        vars.fullPage.style.transform = `translate3d(0, -${anchor * vars.bodyEl.offsetHeight}px, 0)`;
        setInert();
        anchors.forEach(item => {
          if(item.dataset.anchor == location.hash.slice(1)) {
            item.inert = false;
          }
        });
        if(anchor === 3) {
          footerMain.inert = false;
        }

        paginationReset();
        pagination[anchorsPos[location.hash.slice(1)]].classList.add('pagination__link--active');

        if(anchor == 2 || anchor == 3) {
          moonBg.classList.add('moon-bg-wrapper--hidden');
        } else {
          moonBg.classList.remove('moon-bg-wrapper--hidden');
        }

        if(anchor == 3) {
          footerMain.classList.add('footer-main--active');
        } else {
          footerMain.classList.remove('footer-main--active');
        }

        if(anchorsPos[location.hash.slice(1)] == 2) {
          setTimeout(() => {
            aboutAnim.classList.add('about__illustration--animation');
          }, 2000);
        }
      }
    }
  }

  sectionHash();

  function paginationReset() {
    pagination.forEach(item => {
      item.classList.remove('pagination__link--active');
    });
  }

  function setInert() {
    anchors.forEach(item => {
      item.inert = true;
    });
    footerMain.inert = true;
  }
}
