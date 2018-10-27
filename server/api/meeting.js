"use strict";
const express = require("express");
const router = express.Router();

const passport = require("passport");
require("../config/passport")(passport);

// Load Models:
const User = require("../models/User");
const Meeting = require("../models/Meeting");

const isEmpty = require("../validation/isEmpty");

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  const { patient, doctor, startTime, endTime } = req.body;

  User.findOne({ _id: patient })
    .then((foundPatient) => {
      if (isEmpty(foundPatient)) {
        return res.status(400).json({ error: "patient not found" });
      }
      User.findOne({ _id: doctor }).then((foundDoctor) => {
        if (isEmpty(foundDoctor)) {
          return res.status(400).json({ error: "doctor not found" });
        }

        const meeting = new Meeting({ patient, doctor, startTime, endTime });
        meeting
          .save()
          .then((theMeeting) => {
            res.json(theMeeting);
          })
          .catch((err) => res.status(500).json(err));
      });
    })
    .catch((err) => res.status(500).json(err));

  // const thePatient = await User.findOne({ _id: patient });
  // const theDoctor = await User.findOne({ _id: doctor });
  // if (isEmpty(thePatient) || isEmpty(theDoctor)) {
  //   return res.status(400).json({ error: "Patient or doctor not found" });
  // }

  // const meeting = new Meeting({ patient, doctor, startTime, endTime });

  // const savedMeeting = await meeting.save();
  // res.json(savedMeeting);
});

module.exports = router;
