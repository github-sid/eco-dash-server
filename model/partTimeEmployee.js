const mongoose = require("mongoose");

const dataPointSchema = new mongoose.Schema({
  x: { type: String, required: true },
  y: { type: Number, required: true },
});

const genderDataSchema = new mongoose.Schema({
  id: { type: String, required: true },
  data: [dataPointSchema],
});

const GenderDataModel = mongoose.model("GenderData", genderDataSchema);

module.exports = GenderDataModel;
