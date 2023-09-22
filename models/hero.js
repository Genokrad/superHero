const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const heroSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    real_name: {
      type: String,
      required: true,
    },
    origin_description: {
      type: String,
      required: true,
    },
    superpowers: {
      type: String,
      required: true,
    },
    catch_phrase: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

heroSchema.post("save", handleMongooseError);

const Hero = model("heroe", heroSchema);

module.exports = Hero;
