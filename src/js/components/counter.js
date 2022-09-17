export function counter() {
  const counters = document.querySelectorAll('[data-counter]');
  if(counters.length > 0) {
    counters.forEach((item, i) => {
      console.log(i);
      if(i < 9) {
        item.textContent = 0;
      }
    });
  }
}
