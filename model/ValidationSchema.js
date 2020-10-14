const joi = require("joi");

module.exports = {
  Schemas: {
    // Register Schema
    register: joi.object({
      name: joi.string().required().max(15),
      email: joi.string().email().required(),
      password: joi.string().min(6).max(20).required(),
      confirmPassword: joi.string().required().valid(joi.ref("password")),
    }),

    // Login Schema
    login: joi.object({
      email: joi.string().email().required(),
      password: joi.string().min(6).max(20).required(),
    }),
  },

  Validation: {
    //  Registration Validator
    validationBody: (schema) => {
      return (req, res, next) => {
        const result = schema.validate(req.body);

        // if there's any error
        if (result.error) {
          if (result.error.details[0].path == "confirmPassword")
            return res.status(400).json({ error: "Password do not match " });

          return res
            .status(400)
            .json({ error: result.error.details[0].message });
          //   return res.status(400).json(result.error);
        }

        if (!req.value) {
          req.value = {};
        }

        req.value["body"] = result.value;

        next();
      };
    },
  },
};
