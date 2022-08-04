const Announcement = require('../../../models/announcement/Announcement');

module.exports = (req, res) => {
  Announcement.findAnnouncementsByFilters({ limit: 10 }, (err, announcements) => {
    if (err)
      return res.redirect('/error?message=' + err);

    return res.render('index/index', {
      page: 'index/index',
      title: 'Ana Sayfa',
      includes: {
        external: {
          css: ['general', 'header', 'page'],
          js: ['ancestorWithClassName', 'header', 'page', 'serverRequest']
        }
      },
      announcement: announcements[0],
      announcements
    });
  });
}
