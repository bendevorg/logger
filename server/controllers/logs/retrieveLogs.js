const mongoose = require('mongoose');
const LogsModel = mongoose.model('Logs');

module.exports = (req, res) => {
  const { amount, offset } = req.query;

  LogsModel
    .find({})
    .sort({ 'req.date': -1 })
    .limit(isNaN(amount) ? 0 : Number(amount))
    .skip(isNaN(offset) ? 0 : Number(offset))
    .exec((err, logs) => {
      if (err) {
        return res.status(500).json({
          msg: err
        });
      }
      return res.status(200).json({
        msg: logs
      });
    });
};
