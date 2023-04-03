const mongoose = require("mongoose");
const {nanoid} = require("nanoid");

mongoose.pluralize(null);
const image_data_schema = new mongoose.Schema(
  {
    uniqueId: {
      type: String,
      required: true,
      default: nanoid(7),
      index: { unique: true },
    },
    diceSore: {
      type: String,
    },
    filename: {
      type: String,
    },
    filepath: {
      type: String,
    },
    resolution : {
      type: String,
    },
    edgeCoverage: {
      type: String,
    },
    OrientationLoss: {
      type: String,
    },
    averageThickness: {
        type: String,
    },
    averageSeparation:{
        type: String,
    },
    distanceEntropy : {
        type: String,
    },
    contrast: {
      type: String,
    },
    focus: {
      type: String,
    },
    wd: {
      type: String,
    },
    magnification: {
      type: String,
    },
    fileType: {
      type: String,
    },
    status: {
      type: String,
      default : "Not analyzed"
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("imageMetaData", image_data_schema);
