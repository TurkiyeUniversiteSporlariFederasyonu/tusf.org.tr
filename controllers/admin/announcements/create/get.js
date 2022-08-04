module.exports = (req, res) => {
  return res.render('admin/announcements/create', {
    page: 'admin/announcements/create',
    title: 'Yeni Duyuru Ekle',
    includes: {
      external: {
        css: ['confirm', 'fontawesome', 'general', 'page'],
        js: ['confirm', 'page', 'serverRequest', 'throwError']
      }
    }
  });
}
