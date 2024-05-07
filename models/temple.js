const mongoose = require("mongoose");

const options = new mongoose.Schema({
  virtualGuide: { type: String },
  panormicView: { type: String },
  threeDView: { type: String },
  sightSeeing: { type: String },
  NearBy: { type: String },
  tourGuide: { type: String },
  infoQuest: { type: String },
});

const temples = new mongoose.Schema({
  name: { type: String , default: ""},
  about: { type: String },
  map: { type: String },
  event: { type: String },

  option: [options],
});

const Temple = mongoose.model("temple", temples);

module.exports = Temple;
