const fullPage = document.querySelector('.full-page');

let anchors = document.querySelectorAll('[data-anchor]');
let anchorsPos = {};
let anchorsPosArr = [];

if(fullPage) {
  anchors.forEach((item, i) => {
    anchorsPos[item.dataset.anchor] = i;
    anchorsPosArr[i] = item.dataset.anchor;
  });
}

export function scroll() {
  if(fullPage) {
    window.addEventListener('wheel', pageScroll);

    let lastStage;

    function pageScroll(e) {
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
            } else if(!lastStage) {
              location.hash = anchorsPosArr[1];
            }
          }

          return;
        }
        location.hash = anchorsPosArr[1];
      }

    }

    window.addEventListener("hashchange", () => {
      sectionHash();
    });
  }
}

export function sectionHash() {
  if(fullPage) {
    let anchor = anchorsPos[location.hash.slice(1)];

    if(anchor || anchor === 0) {
      fullPage.style.transform = `translateY(-${anchor * document.body.offsetHeight}px)`;
    }
  }
}
