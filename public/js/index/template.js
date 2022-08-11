window.addEventListener('load', () => {
  const contentWrapper = document.querySelector('.template-content-wrapper');
  const announcementsWrapper = document.querySelector('.template-announcements-wrapper');

  document.querySelector('.all-content-outer-wrapper').addEventListener('scroll', event => {
    if (contentWrapper.offsetHeight > announcementsWrapper.offsetHeight + event.target.scrollTop)
      announcementsWrapper.style.marginTop = event.target.scrollTop + 'px';
    else
      announcementsWrapper.style.marginTop = (contentWrapper.offsetHeight - announcementsWrapper.offsetHeight) + 'px';
  });
});
