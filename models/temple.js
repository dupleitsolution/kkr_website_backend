const mongoose = require("mongoose");
const Joi = require("joi");

const optionSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String },
  link: { type: String },
}, { _id: false }); // Exclude _id field from the schema

const templeSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String, default: "" },
  about: { type: String, default: "" },
  map: { type: String , default: ""},
  event: { type: String, default: "" },
  banner: { type: String , default: ""},
  options: [optionSchema], // Defining options as an array of optionSchema objects
});

const Temple = mongoose.model("temple", templeSchema);

// JOI Validation -------------------------
const optionSchemaJoi = Joi.object({
  title: Joi.string().required(),
  link: Joi.string().allow(""),
});

const validateTemple = (temple) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().default("").allow(""),
    about: Joi.string().allow(""),
    map: Joi.string().allow(""),
    event: Joi.string().allow(""),
    banner: Joi.string().allow(""),
    options: Joi.array().items(optionSchemaJoi).required(),
  });

  return schema.validate(temple);
};
module.exports.Temple = Temple
module.exports.validateTemple = validateTemple;
