const mongoose = require('mongoose');
const moment = require('moment-timezone');
const validator = require('validator');

const Image = require('../image/Image');

const MAX_DATABASE_TEXT_FIELD_LENGTH = 1e4;
const MAX_DATABASE_LONG_TEXT_FIELD_LENGTH = 1e5;
const MAX_ITEM_COUNT_PER_QUERY = 100;

const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
  image: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: MAX_DATABASE_TEXT_FIELD_LENGTH
  },
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: MAX_DATABASE_TEXT_FIELD_LENGTH
  },
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: MAX_DATABASE_LONG_TEXT_FIELD_LENGTH
  },
  date: {
    type: 'String',
    required: true,
    trim: true,
    minlength: 1,
    maxlength: MAX_DATABASE_TEXT_FIELD_LENGTH
  }
});

AnnouncementSchema.statics.findAnnouncementById = function (id, callback) {
  const Announcement = this;

  if (!id || !validator.isMongoId(id.toString()))
    return callback('bad_request');

  Announcement.findById(mongoose.Types.ObjectId(id.toString()), (err, announcement) => {
    if (err) return callback('database_error');
    if (!announcement) return callback('document_not_found');

    return callback(null, announcement);
  });
};

AnnouncementSchema.statics.createAnnouncement = function (data, callback) {
  const Announcement = this;

  if (!data || typeof data != 'object')
    return callback('bad_request');

  if (!data.title || typeof data.title != 'string' || !data.title.trim().length || data.title.trim().length > MAX_DATABASE_TEXT_FIELD_LENGTH)
    return callback('bad_request');

  if (!data.text || typeof data.text != 'string' || !data.text.trim().length || data.text.trim().length > MAX_DATABASE_LONG_TEXT_FIELD_LENGTH)
    return callback('bad_request');

  Image.findImageByUrl(data.image, (err, image) => {
    if (err) return callback(err);

    const newAnnouncementData = {
      image: image.url,
      title: data.title.trim(),
      text: data.text.trim(),
      date: moment().tz('Europe/Istanbul').format('DD[.]MM[.]YYYY[ - ]HH[.]mm')
    };

    Image.findImageByUrlAndSetAsUsed(image.url, err => {
      if (err) return callback(err);

      const newAnnouncement = new Announcement(newAnnouncementData);

      newAnnouncement.save((err, announcement) => {
        if (err) return callback('database_error');

        return callback(null, announcement._id.toString());
      });
    });
  });
};

AnnouncementSchema.statics.findAnnouncementsByFilters = function (data, callback) {
  const Announcement = this;

  const filters = {};
  const limit = data.limit && Number.isInteger(data.limit) && data.limit > 0 && data.limit < MAX_ITEM_COUNT_PER_QUERY ? data.limit : MAX_ITEM_COUNT_PER_QUERY;
  const skip = data.page && Number.isInteger(data.page) && data.page >= 0 ? data.page * limit : 0;

  if (data.title && typeof data.title == 'string' && data.title.trim().length)
    filters.title = {
      $regex: data.title.trim(),
      $options: 'ix'
    };

  if (data.text && typeof data.text == 'string' && data.text.trim().length)
  filters.text = {
    $regex: data.text.trim(),
    $options: 'ix'
  };

  Announcement
    .find(filters)
    .skip(skip)
    .limit(limit)
    .sort({ _id: -1 })
    .then(announcements => callback(null, announcements))
    .catch(err => callback('database_error'));
};

AnnouncementSchema.statics.findAnnouncementByIdAndUpdate = function (id, data, callback) {
  const Announcement = this;

  Announcement.findAnnouncementById(id, (err, announcement) => {
    if (err) return callback(err);

    Announcement.findByIdAndUpdate(announcement._id, {$set: {
      title: data.title && typeof data.title == 'string' && data.title.trim().length ? data.title.trim() : announcement.title,
      text: data.text && typeof data.text == 'string' && data.text.trim().length ? data.text.trim() : announcement.text
    }}, err => {
      if (err) return callback('database_error');

      return callback(null);
    });
  });
};

AnnouncementSchema.statics.findAnnouncementByIdAndDelete = function (id, callback) {
  const Announcement = this;

  Announcement.findAnnouncementById(id, (err, announcement) => {
    if (err) return callback(err);

    Announcement.findByIdAndDelete(announcement._id, err => {
      if (err) return callback('database_error');

      return callback(null);
    });
  });
};

AnnouncementSchema.statics.checkIfImageIsUsed = function (url, callback) {
  const Announcement = this;

  if (!url || typeof url != 'string')
    return callback('bad_request');

  Announcement.findOne({
    image: url.trim()
  }, (err, announcement) => {
    if (err)
      return callback('database_error');
    if (!announcement)
      return callback(null, false);
    return callback(null, true);
  });
};

AnnouncementSchema.statics.findAnnouncementByIdAndUpdateImage = function(id, data, callback) {
  const Announcement = this;

  Announcement.findAnnouncementById(id, (err, announcement) => {
    if (err) return callback(err);

    Image.findImageByUrl(data.image, (err, image) => {
      if (err) return callback(err);

      Announcement.findByIdAndUpdate(announcement._id, {$set: {
        image: image.url
      }}, err => {
        if (err) return callback('database_error');

        Image.findImageByUrlAndSetAsUsed(image.url, err => {
          if (err) return callback(err);

          Announcement.checkIfImageIsUsed(announcement.image, (err, res) => {
            if (err) return callback(err);
            if (res) return callback(null); // Another announcement is using the image

            Image.findImageByUrlAndDelete(announcement.image, err => {
              if (err) return callback(err);
      
              return callback(null); 
            });
          });
        });
      });
    });
  });
};

AnnouncementSchema.statics.getTotalAnnouncementCount = function (callback) {
  const Announcement = this;

  Announcement
    .find({})
    .countDocuments()
    .then(count => callback(null, count))
    .catch(err => callback(null, 'database_error'));
};

module.exports = mongoose.model('Announcement', AnnouncementSchema);
