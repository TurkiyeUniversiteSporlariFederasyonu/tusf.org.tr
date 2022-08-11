window.addEventListener('load', () => {
  const contentWrapper = document.querySelector('.announcements-outer-wrapper');
  const navigationWrapper = document.querySelector('.announcements-navigation-wrapper');

  document.querySelector('.all-content-outer-wrapper').addEventListener('scroll', event => {
    if (contentWrapper.offsetHeight > navigationWrapper.offsetHeight + event.target.scrollTop)
      navigationWrapper.style.marginTop = event.target.scrollTop + 'px';
    else
      navigationWrapper.style.marginTop = (contentWrapper.offsetHeight - navigationWrapper.offsetHeight) + 'px';
  });

  document.addEventListener('mouseover', event => {
    if (ancestorWithClassName(event.target, 'each-announcement-wrapper')) {
      const target = ancestorWithClassName(event.target, 'each-announcement-wrapper');

      if (document.querySelector('.each-announcement-image-hovered')) {
        const lastHoveredItem = document.querySelector('.each-announcement-image-hovered');

        if (lastHoveredItem.parentNode.parentElement == target)
          return;

        lastHoveredItem.classList.remove('each-announcement-image-hovered');
      }

      target.childNodes[0].childNodes[0].classList.add('each-announcement-image-hovered');
    } else if (document.querySelector('.each-announcement-image-hovered')) {
      const lastHoveredItem = document.querySelector('.each-announcement-image-hovered');
      lastHoveredItem.classList.remove('each-announcement-image-hovered');
    }
  });
});
