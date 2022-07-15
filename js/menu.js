(() => {
    const refs = {
      openMenuBtn: document.querySelector('.open-menu-btn'),
      closeMenuBtn: document.querySelector('.mob-menu__close-btn'),
      menu: document.querySelector("[mob-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.mobMenuCloseBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();