"use strict";
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const passport = require("passport");
require("../config/passport")(passport);

// const { bcryptSaltRounds } = require("../../config/importantVariables");

// Load Models:
const User = require("../models/User");

// Validation
// // const updateUserSettings = require("../../validation/updateUserSettings");
// // const updateUserPassword = require("../../validation/updateUserPassword");

// @route   GET api/users
// @desc    Return current user
// @access  Private
router.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  User.findById(req.user._id)
    .select("+email")
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
});

// @route   GET api/users/all
// @desc    Return all users
// @access  Private
// @note    NOTE - this route must be defined BEFORE router.get(/:username),
//          because otherwise the 'all' will be interpreted as a username.
router.get("/all", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
});

// @route   GET api/users/:username
// @desc    Return a user by it's username
// @access  Private
router.get("/:username", (req, res) => {
  User.findOne({ username: req.params.username })
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
});

// // @route   PUT api/users
// // @desc    Update User's settings (NOT Password)
// // @access  Private
// router.put("/update", passport.authenticate("jwt", { session: false }), (req, res) => {
//   const { errors, isValid } = updateUserSettings(req.body);
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   const userData = {
//     username: req.body.username,
//     avatar: req.body.avatar,
//     email: req.body.email,
//   };

//   User.findOneAndUpdate({ _id: req.user._id }, { $set: userData }, { new: true })
//     .then((user) => res.json(user))
//     .catch((err) => res.status(500).json(err));
// });

module.exports = router;
