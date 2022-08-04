const Announcement = require('../../../../models/announcement/Announcement');

module.exports = (req, res) => {
  Announcement.findAnnouncementsByFilters(req.query, (err, announcements) => {
    if (err)
      return res.redirect('/error?message=' + err);

    return res.render('admin/announcements', {
      page: 'admin/announcements',
      title: 'Duyurular',
      includes: {
        external: {
          css: ['confirm', 'fontawesome', 'general', 'page'],
          js: ['confirm', 'page', 'serverRequest', 'throwError']
        }
      },
      announcements
    });
  })
}
