const passport = require("passport");
require("../passport");

module.exports = {
  // AuthLogin middleware
  authLogin: (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
      // Checking for error
      if (err) return next(err);

      // if user not exist
      if (!user) return res.status(401).json({ error: info.error });

      // assigning a user in request object
      req.user = user;
      next();
    })(req, res, next);
  },

  //   Register middleware
  authReg: (req, res, next) => {
    passport.authenticate("jwt", function (err, user, info) {
      // Checking for error
      if (err) return next(err);

      // if user not exist
      if (!user) {
        // res.redirect()
        //   res.status(401)
        return res.status(401).json({ error: info.error });
      }

      // assigning a user in request object
      req.user = user;
      next();
    })(req, res, next);
  },
};
