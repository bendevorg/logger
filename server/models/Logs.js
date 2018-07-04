const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const LogSchema = new Schema({
  content: {type: Object, required: true},
  timestamp: { type: Date, default: Date.now }
});

mongoose.model('Log', LogSchema);
