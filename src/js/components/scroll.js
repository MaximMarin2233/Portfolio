import { throttle } from '../functions/throttle';

export function scroll() {
  function resizeVal () {
    sectionHash();
  };
  let func = throttle(resizeVal, 800);

  const fullPage = document.querySelector('.full-page');

  let anchors = document.querySelectorAll('[data-anchor]');
  let anchorsPos = {};
  let anchorsPosArr = [];

  let pagination = document.querySelectorAll('.pagination__link');

  let moonBg = document.querySelector('.moon-bg-wrapper');

  let footerMain = document.querySelector('.footer-main');

  if(fullPage) {
    setInert();
    anchors[0].inert = false;

    anchors.forEach((item, i) => {
      anchorsPos[item.dataset.anchor] = i;
      anchorsPosArr[i] = item.dataset.anchor;
    });

    window.addEventListener('resize', func);
  }

  if(fullPage) {
    window.addEventListener('wheel', pageScroll);

    let lastStage = anchorsPos[location.hash.slice(1)] || 0;

    function pageScroll(e) {
      // window.removeEventListener('wheel', pageScroll);
      // setTimeout(() => {
      //   window.addEventListener('wheel', pageScroll);
      // }, 500);

      if(!e.ctrlKey) {
        if(e.deltaY < 0) {
          if(location.hash) {
            let stage = anchorsPos[location.hash.slice(1)] - 1;
            if(stage >= 0) {
              location.hash = anchorsPosArr[stage];
              lastStage = stage;
            } else {
              console.log(lastStage);
              if(lastStage - 1 >= 0) {
                location.hash = anchorsPosArr[lastStage - 1];
              }
            }

            return;
          }

        } else if(e.deltaY > 0) {
          if(location.hash) {
            let stage = anchorsPos[location.hash.slice(1)] + 1;
            if(stage < 4) {
              location.hash = anchorsPosArr[stage];
              lastStage = stage;
            } else {
              console.log(lastStage);
              if(lastStage + 1 < 4) {
                location.hash = anchorsPosArr[lastStage + 1];
              }
            }

            return;
          }
          location.hash = anchorsPosArr[1];
        }
      }

    }

    window.addEventListener("hashchange", () => {
      sectionHash();
    });
  }

  function sectionHash() {
    if(fullPage) {
      let anchor = anchorsPos[location.hash.slice(1)];

      if(anchor || anchor === 0) {
        fullPage.style.transform = `translateY(-${anchor * document.body.offsetHeight}px)`;
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
