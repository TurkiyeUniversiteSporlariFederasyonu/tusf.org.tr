const Announcement = require('../../../../models/announcement/Announcement');

module.exports = (req, res) => {
  Announcement.findAnnouncementById(req.query.id, (err, announcement) => {
    if (err)
      return res.redirect('/error?message=' + err);

    return res.render('admin/announcements/edit', {
      page: 'admin/announcements/edit',
      title: announcement.title,
      includes: {
        external: {
          css: ['confirm', 'fontawesome', 'general', 'page'],
          js: ['confirm', 'page', 'serverRequest', 'throwError']
        }
      },
      announcement
    });
  })
}
