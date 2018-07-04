const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  req: {
    base: { type: String, required: true },
    url: { type: String, required: true },
    path: { type: String, required: true },
    method: { type: String, required: true },
    date: { type: Date, required: true },
    headers: { type: Schema.Types.Mixed, require: false },
    params: { type: Schema.Types.Mixed, require: false },
    query: { type: Schema.Types.Mixed, require: false },
    body: { type: Schema.Types.Mixed, require: false }
  },
  res: {
    statusCode: { type: Number, required: true },
    date: { type: Date, required: true },
    time: { type: Number, required: true },
    headers: { type: Schema.Types.Mixed, require: false },
    data: { type: Schema.Types.Mixed, require: false }
  },
  timestamp: { type: Date, default: Date.now }
});

mongoose.model('Logs', LogSchema);
