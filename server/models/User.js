const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema:
const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, /*NOT A VALIDATOR*/ select: true },
    password: { type: String, required: true, select: false },
  },
  {
    id: false,
    timestamps: true,
    toObject: {
      getters: true,
      virtuals: true,
    },
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

module.exports = User = mongoose.model("User", UserSchema, "users", false);
