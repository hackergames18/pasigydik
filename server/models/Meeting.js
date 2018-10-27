const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const MeetingSchema = new Schema(
  {
    patient: { type: ObjectId, ref: "User" },
    doctor: { type: ObjectId, ref: "User" },
    startTime: { type: Date },
    // reikia debugint šitą
    endTime: { type: Date, default: startTime.getTime() + 20 * 60 * 1000 },
  },
  { id: false }
);

module.exports = Meeting = mongoose.model("Meeting", MeetingSchema, "meetings", false);
