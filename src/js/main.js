window.addEventListener('DOMContentLoaded', () => {
  const trigger = document.querySelector('.burger-menu-btn');
  const content = document.querySelector('.navigation__list');
  const links = document.querySelectorAll('.navigation__link');

  trigger.addEventListener('click', (e) => {
    trigger.classList.toggle('burger-menu-btn--active');
    content.classList.toggle('navigation__list--active');
  });

  links.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      toggleDisplay();
    })
  });

  const scrolling = () => {
    debugger
    const links = document.querySelectorAll('[href^="#"]');

    links.forEach((item) => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const hash = this.hash;
        const toBlock = document.querySelector(hash).getBoundingClientRect().top;
        let start = null;
        let speed = 0.5;
        requestAnimationFrame(step);

        function step(time) {
          if (start === null) {
            start = time;
          }

          let progress = time - start;
          let r = toBlock < 0 ? Math.max(progress / speed,toBlock) : Math.min(progress / speed,toBlock);

          document.documentElement.scrollTo(0, r);

          if (r !== toBlock) {
            requestAnimationFrame(step);
          } else {
            location.history = hash;
          }
        }
      });

    })
  };
  scrolling();
});