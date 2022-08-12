const Announcement = require('../../../models/announcement/Announcement');

module.exports = (req, res) => {
  const PAGE_LIMIT = 10; // Low to optimize loading time
  
  const limit = PAGE_LIMIT;
  const page = req.query.page && !isNaN(parseInt(req.query.page)) ? parseInt(req.query.page) : 0;

  req.query.limit = limit;
  req.query.page = page;

  Announcement.findAnnouncementsByFilters(req.query, (err, announcements) => {
    if (err) return res.redirect('/error?message=' + err);

    Announcement.getTotalAnnouncementCount((err, announcement_count) => {
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
        announcement_count,
        filter_title: req.query.title && typeof req.query.title == 'string' && req.query.title.trim().length ? req.query.title.trim() : null,
        limit,
        current_page: page,
        announcements,
      });
    });
  });
}
