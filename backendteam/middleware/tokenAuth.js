const User = require("../database/model/userModel");
const jwt = require("jsonwebtoken");

exports.userAuthorization = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token === null || token === undefined) return res.sendStatus(401);

    console.log(token);
    await jwt.verify(token, process.env.SECRET_KEY, async (err, data) => {
      if (err) {
        if (
          err.name === "JsonWebTokenError" ||
          err.name === "TokenExpiredError" ||
          err.name === "NotBeforeError"
        ) {
          return res.sendStatus(401);
        }
      }

      const userData = await User.findById(data.id);

      req.user = userData;
      next();
    });
    // next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
