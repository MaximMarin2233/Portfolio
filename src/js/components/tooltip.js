import { createPopper, right} from '@popperjs/core';

export function tooltip() {
  const el = document.querySelector('[data-tooltip]');
  const tooltip = document.querySelector('#wcag-info');

  if (el) {
    createPopper(el, tooltip, {
      placement: 'top'
    });
  }
}
