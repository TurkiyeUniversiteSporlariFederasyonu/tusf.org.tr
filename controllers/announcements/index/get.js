const Announcement = require('../../../models/announcement/Announcement');

module.exports = (req, res) => {
  const PAGE_LIMIT = 10; // Low to optimize loading time

  Announcement.findAnnouncementsByFilters({
    limit: PAGE_LIMIT
  }, (err, announcements) => {
    if (err) return res.redirect('/error?message=' + err);

    return res.render('announcements/index', {
      page: 'announcements/index',
      title: 'Duyurular',
      includes: {
        external: {
          css: ['general', 'header', 'page'],
          js: ['ancestorWithClassName', 'header', 'page', 'serverRequest']
        }
      },
      announcements
    });
  });
}
