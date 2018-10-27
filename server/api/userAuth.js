"use strict";
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// const { bcryptSaltRounds } = require("../../config/importantVariables");
const bcryptSaltRounds = 10;

// Load Models:
const User = require("../models/User");
// // const DeletedModel = require("../../models/DeletedModel");
// // const Profile = require("../../models/Profile");

// Load input validation:
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Passport Config:
require("../config/passport.js")(passport);

// @route   POST api/userAuth/register
// @desc    Register a new user
// @access  Public
router.post("/register", (req, res) => {
  // Validation:
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        // if (req.body.username === user.username) errors.username = "Username is already taken";
        if (req.body.email === user.email) errors.email = "Email is already taken";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          // username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        });

        bcrypt.genSalt(bcryptSaltRounds, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash; // turn the password into a hashed password.

            newUser
              .save()
              .then((user) => res.json(user))
              .catch((err) => {
                throw err;
                res.status(500).json({
                  save: "Failed @ newUser.save().<foo(<bar>)>",
                  err,
                });
              });
          });
        });
      }
    })
    .catch((err) => res.status(500).json({ findOne: "Errors in User.findOne() block", err }));
});

// @route   POST api/userAuth/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  // Check validation (using ../../validation/)
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) return res.status(400).json(errors);

  const email = req.body.email;
  // The password
  const password = req.body.password;
  // In order to avoid security risks, we do not specify the exact authentication error.
  const authError = "Incorrect email, username or password";
  // Same here with security (only make a variable so that I / other devs don't mix it up)
  const errStatus = 400;

  // Find User by loginKey:
  User.findOne({ email: email })
    .select("+password")
    .then((user) => {
      // Check for user:
      if (!user) {
        return res.status(errStatus).json({ authError: authError });
      } else {
        // User found - compare req.body.password to hashed user.password:
        bcrypt.compare(password, user.password).then((isMatch) => {
          if (isMatch) {
            // User matched - login successful - create a JWT Token:
            const payload = { _id: user._id, email: user.email };

            // Sign the JWT Token:
            jwt.sign(
              payload,
              // process.env.PASSPORT_SECRET_KEY,
              "s0m3r4nd0mk3y",
              { expiresIn: req.body.expiresIn || "1d" } /* #IMPROVEMENTS */,
              (err, token) => {
                if (err)
                  return res
                    .status(500)
                    .json({ jwt: "Failed to sign the jwt token", success: false, err });
                else return res.json({ token: "Bearer " + token, success: true });
              }
            );
          } else {
            // User did NOT match - login failed - send back the default authError to avoid security risks
            return res.status(errStatus).json({ authError: authError });
          }
        });
      }
    })
    .catch((err) => res.status(404).json(err));
});

// @route   DELETE api/profile
// @desc    Delete user & user's profile
// @access  Private
router.delete("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  User.findOne({ _id: req.user._id })
    .then((user) => {
      if (!user) {
        /*
         * this should never happen, because in order to access this route,
         * one must authenticate throught passport using jwt, where the req.user._id
         * is from.
        */
        return res
          .status(400)
          .json(
            "User doesn't exist - you shouldn't be able to access this route, what's going on!?"
          );
      }

      // store the deleted user in database's deleted_models collection muahahaha
      const deletedModel = new DeletedModel({
        data: user,
        deletedModelType: "User",
      });

      deletedModel
        .save()
        .then((delUserSaved) => {
          user
            .remove()
            .then((delUser) => {
              res.json({ success: true, deletedUser: delUser });
            })
            .catch((err) => res.status(500).json(err));
        })
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
