const mongoose = require("mongoose");
const LogsModel = mongoose.model("Logs");

module.exports = (req, res) => {
  if (!req.body.req || !req.body.res) {
    return res.status(400).json({
      msg: "Invalid input"
    });
  }

  const log = {
    req: req.body.req,
    res: req.body.res
  };
  let newLog = new LogsModel(log);

  newLog.save(function(err, newLog) {
    if (err)
      return res.status(500).json({
        msg: err
      });
    return res.status(200).json({
      msg: newLog
    });
  });
};
