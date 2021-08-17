const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const validate = {};

const complexityOptions = {
  min: 8,
  max: 30,
  lowercase: 1,
  upperCase: 1,
  numeric: 1,
};

validate.signUp = async (req, res, next) => {
  try {
    const Schema = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .lowercase()
        .required(),
      username: Joi.string().required(),
      password: passwordComplexity(complexityOptions),
    }).options({ abortEarly: false });

    const { value, error } = await Schema.validate(req.body);

    if (!error) next();
    if (error) {
      res.status(422).json({
        statusText: "Unprocessable Entity",
        message: error.details[0].message,
      });
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      statusText: "Internal Server Error",
    });
  }
};

validate.login = async (req, res, next) => {
  try {
    const Schema = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .lowercase()
        .required(),
      password: passwordComplexity(complexityOptions),
    }).options({ abortEarly: false });

    const { value, error } = await Schema.validate(req.body);

    if (!error) next();
    if (error) {
      res.status(422).json({
        statusText: "Unprocessable Entity",
        message: error.details[0].message,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};

module.exports = validate;
