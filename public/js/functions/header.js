let isResponsiveHeaderOpen = false;

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

  document.addEventListener('click', event => {
    if (ancestorWithClassName(event.target, 'responsive-header-open-menu-button')) {
      const responsiveMenuOuterWrapper = document.querySelector('.all-header-responsive-menu-outer-wrapper');

      if (isResponsiveHeaderOpen)
        responsiveMenuOuterWrapper.style.display = 'none';
      else
        responsiveMenuOuterWrapper.style.display = 'flex';

      isResponsiveHeaderOpen = !isResponsiveHeaderOpen;
    }

    if (event.target.classList.contains('all-header-responsive-menu-outer-wrapper')) {
      event.target.style.display = 'none';
      isResponsiveHeaderOpen = false;
    }

    if (ancestorWithClassName(event.target, 'each-header-button-responsive')) {
      const target = ancestorWithClassName(event.target, 'each-header-button-responsive');

      if (target.classList.contains('each-header-button-responsive-opened')) {
        target.classList.remove('each-header-button-responsive-opened');
      } else {
        if (document.querySelector('.each-header-button-responsive-opened'))
          document.querySelector('.each-header-button-responsive-opened').classList.remove('each-header-button-responsive-opened');

        target.classList.add('each-header-button-responsive-opened');
      }
    }
  });
})
