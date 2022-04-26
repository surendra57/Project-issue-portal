const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: [true, "Please enter Project Name"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Please enter Title"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please enter Product Description"],
    },
    priority: {
      type: Number,
      required: [true, "Please enter Priority"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
