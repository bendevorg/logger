var mongoose = require('mongoose');
// var logSchema = require('../models/Logs');

var logSchema = mongoose.Schema({
  content: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = (req, res) => {
  var Log = mongoose.model('Log', logSchema);
  var newLog = new Log({ content: req.body });

  newLog.save(function (err, newLog) {
    if (err) return console.error(err);
    return res.status(200).json({
      msg: newLog
    });
  });
};
