const Announcement = require('../../../../models/announcement/Announcement');

module.exports = (req, res) => {
  Announcement.createAnnouncement(req.body, (err, id) => {
    if (err) {
      res.write(JSON.stringify({ error: err, success: false }));
      return res.end();
    }

    res.write(JSON.stringify({ success: true, id }));
    return res.end();
  });
}
