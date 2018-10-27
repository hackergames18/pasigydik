const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
// const mongoose = require("mongoose");
const User = require("../models/User");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = "s0m3r4nd0mk3y";

if (options.secretOrKey)
  module.exports = (passport) => {
    passport.use(
      new JwtStrategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload._id)
          .then((user) => {
            if (user) {
              return done(null, user);
            }
            return done(null, false);
          })
          .catch((err) => {
            throw err;
          });
      })
    );
  };
