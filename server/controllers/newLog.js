const LogModel = mongoose.model('Log');

module.exports = (req, res) => {
  let newLog = new LogModel({ content: req.body });

  newLog.save(function (err, newLog) {
    if (err) return console.error(err);
    return res.status(200).json({
      msg: newLog
    });
  });
};
