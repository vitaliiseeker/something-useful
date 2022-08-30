(() => {
  const menuBtnOpen = document.querySelector('[data-menu-open]');
  const menuBtnClose = document.querySelector('[data-menu-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  // змінна body для блокування скролу
  const body = document.querySelector('body');

  menuBtnOpen.addEventListener('click', openMenu);
  menuBtnClose.addEventListener('click', openMenu);

  function openMenu() {
    const expanded = menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;
    menuBtnOpen.setAttribute('aria-expanded', !expanded);

    // відкриття-закриття мобільного меню
    mobileMenuRef.classList.toggle('is-open');

    // блокування скролу на body
    body.classList.toggle('no-scroll');
  }
})();