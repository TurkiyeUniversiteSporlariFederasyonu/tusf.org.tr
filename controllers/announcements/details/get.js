const Announcement = require('../../../models/announcement/Announcement');

module.exports = (req, res) => {
  Announcement.findAnnouncementById(req.query.id, (err, announcement) => {
    if (err) return res.redirect('/error?message=' + err);

    Announcement.findAnnouncementsByFilters({ limit: 5 }, (err, announcements) => {
      if (err) return res.redirect('/error?message=' + err);

      return res.render('index/template', {
        page: 'index/template',
        title: 'Hakkımızda',
        includes: {
          external: {
            css: ['general', 'header', 'page'],
            js: ['ancestorWithClassName', 'header', 'page', 'serverRequest']
          }
        },
        name: 'Duyuru',
        announcements,
        template: [
          {
            type: 'image',
            content: announcement.image
          },
          {
            type: 'title',
            content: announcement.title
          },
          {
            type: 'date',
            content: announcement.date
          },
          {
            type: 'text',
            content: announcement.text
          }
        ]
      });
    });
  })
}
