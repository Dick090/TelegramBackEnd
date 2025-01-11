const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  memeber: { type: String, default: "" },
  referby: { type: String, default: "" }, // "good man" will be stored here
  projectname: { type: String, default: "" },
  balance: { type: String , default: "" },
  referalcout: { type: String ,default: "" },
  referalCode: { type: String  , default: "" },
  dailtask: { type: String  , default: "" }

});

module.exports = mongoose.model('Data', DataSchema);
