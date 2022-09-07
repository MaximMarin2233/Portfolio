export function scroll() {
  const fullPage = document.querySelector('.full-page');

  if(fullPage) {
    let valScroll = 0;
    let pagination = 0;
    let anchors = document.querySelectorAll('[data-anchor]');

    window.addEventListener('wheel', pageScroll);

    function pageScroll(e) {
      let bodyHeight = document.body.offsetHeight;

      if(e.deltaY < 0) {
        console.log('scrollTop');
      } else if(e.deltaY > 0) {
        console.log('scrollBottom');

        valScroll += document.body.offsetHeight;

        if(valScroll <= anchorsLength) {
          fullPage.style.transform = `translateY(-${valScroll}px)`;

        }

      }

    }

    window.addEventListener("hashchange", () => {
      console.log(location.hash);
      location.hash = 'about';
    });
  }
}
