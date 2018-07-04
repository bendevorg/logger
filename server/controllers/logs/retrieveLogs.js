const mongoose = require('mongoose');
const LogsModel = mongoose.model('Logs');

module.exports = (req, res) => {
  LogsModel.find(function (err, LogsModel) {
    if (err) {
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      msg: LogsModel
    });
  });
};
