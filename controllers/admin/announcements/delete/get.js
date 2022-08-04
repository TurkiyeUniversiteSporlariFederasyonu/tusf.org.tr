const Announcement = require('../../../../models/announcement/Announcement');

module.exports = (req, res) => {
  Announcement.findAnnouncementByIdAndDelete(req.query.id, err => {
    if (err) {
      res.write(JSON.stringify({ error: err, success: false }));
      return res.end();
    }

    res.write(JSON.stringify({ success: true }));
    return res.end();
  });
}
