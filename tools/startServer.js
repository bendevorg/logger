const dotenv = require('dotenv');
dotenv.config();

const app =
  process.env.NODE_ENV == 'production'
    ? require('./serverProduction')
    : require('./serverDevelopment');
const PORT = process.env.PORT;

const setupSSL = require('./setupSSL');
const SSL = setupSSL();

if (SSL) {
  const https = require('https');
  https.createServer(SSL, app).listen(PORT, () => {
    console.info('🌎  Server is listening on port %s with SSL.', PORT);
  });
} else {
  app.listen(PORT, error => {
    if (error) console.log(error);
    else console.info('🌎  Server is listening on port %s.', PORT);
  });
}

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/logsDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  /*eslint-disable */
  console.log('Database connected.');
  /* eslint-enable */
  var logSchema = mongoose.Schema({
    content: String,
    timestamp: { type: Date, default: Date.now }
  });

  var Log = mongoose.model('Log', logSchema);

  var newLog = new Log({ content: 'teste3' });

  newLog.save(function (err, newLog) {
    if (err) return console.error(err);
    console.log(newLog.content);
  });

  Log.find(function (err, Log) {
    if (err) return console.error(err);
    console.log(Log);
  });
});
