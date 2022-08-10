const { Schema, model } = require("mongoose");

const mySchema = Schema({
  email: { type: String, required: true },
});

const modelSchema = model("Newsletter", mySchema);

module.exports = modelSchema;
