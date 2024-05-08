const mongoose = require("mongoose");
const Joi = require("joi");

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
  name: { type: String, default: "" },
  about: { type: String },
  map: { type: String },
  event: { type: String },

  option: [options],
});

const Temple = mongoose.model("temple", temples);

// JOI Validation -------------------------

const optionsSchema = Joi.object({
  virtualGuide: Joi.string().required(),
  panormicView: Joi.string().required(),
  threeDView: Joi.string().required(),
  sightSeeing: Joi.string().required(),
  NearBy: Joi.string().required(),
  tourGuide: Joi.string().required(),
  infoQuest: Joi.string().required(),
});

const validateTemple = (temple) => {
  const schema = Joi.object({
    name: Joi.string().default("").required(),
    about: Joi.string().required(),
    map: Joi.string().required(),
    event: Joi.string().required(),

    option: Joi.array().items(optionsSchema.required()).required(),
  });

  return schema.validate(temple);
};

module.exports.Temple = Temple;
module.exports.validateTemple = validateTemple;
