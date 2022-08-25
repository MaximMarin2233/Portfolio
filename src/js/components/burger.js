import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

export function burger() {

  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');

  burger?.addEventListener('click', burgerClick);

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      menuItemsRemove();

      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('burger-menu--active');
      enableScroll();
    });
  });

  function burgerClick(e) {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('burger-menu--active');

    burger?.removeEventListener('click', burgerClick);

    setTimeout(() => {
      burger?.addEventListener('click', burgerClick);
    }, 600);


    let i = 0;

    if (menu?.classList.contains('burger-menu--active')) {
      let timer = setInterval(() => {
        menuItems[i].classList.add('burger-menu__link--active');
        i++;

        if(i >= menuItems.length) {
          clearInterval(timer);
        }
      }, 100);

      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      menuItemsRemove();

      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  }

  function menuItemsRemove() {
    menuItems.forEach(item => {
      item.classList.remove('burger-menu__link--active');
    });
  }
}
