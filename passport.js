const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local");

const User = require("./model/UserModel");

// JWT Token Strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (payload, done) => {
      try {
        // Find user specifired in token
        const user = await User.findById(payload.id);

        // if user doesnt exist handle it
        if (!user)
          return done(null, false, { error: "Please register yourself " });

        // Otherwise handle it
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

// Local Strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        // Find the user specified in email
        const user = await User.findOne({ email });

        // if it is not found handle it
        if (!user)
          return done(null, false, {
            error: "Please register yourself first ",
          });

        // Check the password
        const match = await user.validPassword(password);

        // if not match handle it
        if (!match) return done(null, false, { error: "Invalid Credentials" });

        // Otherwise handle it
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
