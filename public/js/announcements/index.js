let currentPage = null;
let limit = null;

window.addEventListener('load', () => {
  currentPage = JSON.parse(document.getElementById('current-page').value);
  limit = JSON.parse(document.getElementById('limit').value);

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

  document.addEventListener('click', event => {
    if (ancestorWithClassName(event.target, 'announcement-search-input-button')) {
      const search = document.querySelector('.announcement-search-input').value.trim();

      if (!search || !search.length)
        window.location = `/announcements?limit=${limit}&page=0`
      else
        window.location = `/announcements?limit=${limit}&page=0&title=${search}`;
    }
  });

  document.querySelector('.announcement-search-input').addEventListener('keyup', event => {
    if (event.key == 'Enter') {
      if (!event.target.value || !event.target.value.length)
        window.location = `/announcements?limit=${limit}&page=0`
      else
        window.location = `/announcements?limit=${limit}&page=0&title=${event.target.value}`; 
    }
  })
});
