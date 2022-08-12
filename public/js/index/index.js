let announcements = null;
let selectedAnnouncementId = null;

function updateSelectedAnnouncement(id) {
  const announcement = announcements.find(each => each._id.toString() == id.toString());

  if (!announcement)
    return;

  selectedAnnouncementId = id;

  document.querySelector('.announcement-image').style.backgroundImage = `url(${announcement.image})`;
  document.querySelector('.announcement-title').innerHTML = announcement.title;
  document.querySelector('.announcement-date').innerHTML = announcement.date;
  document.querySelector('.announcement-text').innerHTML = announcement.text;
  document.querySelector('.announcement-details-button').href = '/announcements/details?id=' + announcement._id.toString();
}

function smoothScroll(element, amount) {
  if (amount < 10)
    return;

  element.scrollBy(0, 10);

  setTimeout(() => {
    smoothScroll(element, amount - 10);
  }, 5);
}

window.addEventListener('load', () => {
  announcements = JSON.parse(document.getElementById('announcements').value);
  selectedAnnouncementId = announcements[0]._id.toString();

  document.querySelector('.all-content-outer-wrapper').addEventListener('scroll', event => {
    document.querySelector('.start-page-button').style.opacity = Math.max(0, 15 - event.target.scrollTop) / 15;
    if (event.target.scrollTop > 15)
      document.querySelector('.start-page-button').style.display = 'none';
    else
      document.querySelector('.start-page-button').style.display = 'flex';

    const headerHeight = parseInt(getComputedStyle(document.body).getPropertyValue('--header-height').replace('px', ''));
    const windowHeight = window.innerHeight - headerHeight;

    document.querySelector('.all-header-wrapper').style.backgroundColor = `rgba(137, 28, 29, ${Math.min(event.target.scrollTop, windowHeight) / windowHeight})`;
    document.querySelector('.all-header-wrapper').style.boxShadow = `0 0 8px rgba(5, 5, 5, ${Math.min(event.target.scrollTop, windowHeight) / windowHeight * 0.4})`;
    document.querySelector('.all-header-wrapper-responsive').style.backgroundColor = `rgba(137, 28, 29, ${Math.min(event.target.scrollTop, windowHeight) / windowHeight})`;
    document.querySelector('.all-header-wrapper-responsive').style.boxShadow = `0 0 8px rgba(5, 5, 5, ${Math.min(event.target.scrollTop, windowHeight) / windowHeight * 0.4})`;
  });

  document.addEventListener('mouseover', event => {
    if (ancestorWithClassName(event.target, 'each-other-announcement')) {
      const target = ancestorWithClassName(event.target, 'each-other-announcement');

      if (document.querySelector('.each-other-announcement-background-hovered')) {
        const lastHoveredItem = document.querySelector('.each-other-announcement-background-hovered');

        if (lastHoveredItem.parentNode == target)
          return;

        lastHoveredItem.classList.remove('each-other-announcement-background-hovered');
        lastHoveredItem.nextElementSibling.style.marginTop = 'calc(-1 * var(--other-announcement-height))';
      }

      target.childNodes[0].classList.add('each-other-announcement-background-hovered');
      target.childNodes[1].style.marginTop = 'calc(-1 * (var(--other-announcement-height) + 10px))';
    } else if (document.querySelector('.each-other-announcement-background-hovered')) {
      const lastHoveredItem = document.querySelector('.each-other-announcement-background-hovered');

      lastHoveredItem.classList.remove('each-other-announcement-background-hovered');
      lastHoveredItem.nextElementSibling.style.marginTop = 'calc(-1 * var(--other-announcement-height))';
    }
  });

  document.addEventListener('click', event => {
    if (ancestorWithClassName(event.target, 'each-other-announcement')) {
      const target = ancestorWithClassName(event.target, 'each-other-announcement');
      updateSelectedAnnouncement(target.id);
    }

    if (ancestorWithClassName(event.target, 'start-page-button')) {
      const headerHeight = parseInt(getComputedStyle(document.body).getPropertyValue('--header-height').replace('px', ''));
      smoothScroll(document.querySelector('.all-content-outer-wrapper'), window.innerHeight - headerHeight);
    }
  });
});
