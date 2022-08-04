window.addEventListener('load', () => {
  document.addEventListener('mouseover', event => {
    if (ancestorWithClassName(event.target, 'each-header-button')) {
      const target = ancestorWithClassName(event.target, 'each-header-button');

      if (document.querySelector('.each-header-button-menu-wrapper-hovered') && document.querySelector('.each-header-button-menu-wrapper-hovered') != target.childNodes[1])
        document.querySelector('.each-header-button-menu-wrapper-hovered').classList.remove('each-header-button-menu-wrapper-hovered');

      target.childNodes[1].classList.add('each-header-button-menu-wrapper-hovered');
    } else if (document.querySelector('.each-header-button-menu-wrapper-hovered')) {
      document.querySelector('.each-header-button-menu-wrapper-hovered').classList.remove('each-header-button-menu-wrapper-hovered');
    }
  });
})
