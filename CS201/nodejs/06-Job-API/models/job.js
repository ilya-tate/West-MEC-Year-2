const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Provide a company"],
    maxLength: 50
  },

  position: {
    type: String,
    required: [true, "Provide a position"],
    maxLength: 100
  },

  status: {
    type: String,
    default: "Pending",
    enum: {
      values: ["Interview", "Declined", "Pending"],
      message: "{VALUE} is not a valid status"
    }
  },

  createdBy: {
    type: mongoose.Types.ObjectId,
    required: [true, "Provide a creator"]
  },

  timeStamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Job", schema);
