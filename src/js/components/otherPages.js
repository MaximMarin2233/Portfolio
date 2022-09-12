export function otherPages() {
  const fullPage = document.querySelector('.full-page');

  if(!fullPage) {
    document.documentElement.style.overflow = 'visible';
  }
}
