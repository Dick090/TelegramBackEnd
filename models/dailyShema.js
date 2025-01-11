const mongoose = require('mongoose');

const DailyShema = new mongoose.Schema({
  dailyId :{type:String,default:""},
  link1: { type: String, default: "" },
  link1note: { type: String, default: "" }, 
  link1amount: { type: String, default: "" }, 
  link2: { type: String, default: "" },
  link2note: { type: String, default: "" }, 
  link2amount: { type: String, default: "" }, 
  link3: { type: String, default: "" },
  link3note: { type: String, default: "" }, 
  link3amount: { type: String, default: "" }, 
  taksnumber: { type: String, default: "" }, 

});

module.exports = mongoose.model('dailytasks', DailyShema);


// {
//   dailyId :"72823828832i2",
//   link1: "shares.com",
//   link1note: "gjjisjdlskl", 
//   link1amount: "gjjisjdlskl", 
//   link2: "live.com",
//   link2note: "jdhhidjjskdskdk", 
//   link2amount: "jdhhidjjskdskdk", 
//   link3: "line.com",
//   link3note: "line thatbdfjksi", 
//   link3amount: "line thatbdfjksi", 
//   taksnumber:"1", 
// }

