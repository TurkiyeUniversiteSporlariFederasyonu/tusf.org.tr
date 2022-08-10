const Announcement = require('../../../models/announcement/Announcement');

module.exports = (req, res) => {
  Announcement.findAnnouncementsByFilters(req.body, (err, announcements) => {
    if (err) {
      res.write(JSON.stringify({ error: err, success: false }));
      return res.end();
    }

    res.write(JSON.stringify({ announcements, success: true }));
    return res.end();
  })
}
