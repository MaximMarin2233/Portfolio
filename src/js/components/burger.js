import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

export function burger() {

  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const menuItemsInside = document?.querySelectorAll('.burger-menu__link-inside');

  const mainTag = document.querySelector('.main');
  const footerTag = document.querySelector('.footer');

  burger?.addEventListener('click', burgerClick);

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burgerClick();
    });
  });

  function burgerClick(e) {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('burger-menu--active');

    let i = 0;

    let timer = setInterval(() => {
      menuItemsInside[i].classList.toggle('burger-menu__link-inside--active');

      i++;
      if(i >= menuItemsInside.length) {
        clearInterval(timer);
      }
    }, 100);

    if (menu?.classList.contains('burger-menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();

      mainTag.inert = true;
      footerTag.inert = true;
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();

      mainTag.inert = false;
      footerTag.inert = false;
    }
  }
}
