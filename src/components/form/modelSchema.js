const { Schema, model } = require("mongoose");

const mySchema = Schema({
  fullName: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const modelSchema = model("Form", mySchema);

module.exports = modelSchema;
