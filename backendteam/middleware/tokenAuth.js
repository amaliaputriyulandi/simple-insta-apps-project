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

exports.checkToken = (req, res, next) => {
  const token = req.header('Authorization');
  if(!token) return res.status(401).json({message: 'Failed to authenticate token'});

  try {
      const verified = jwt.verify(token, process.env.SECRET_KEY);
      req.user = verified;
      next();
  } catch (error) {
      res.status(400).json({message: 'No token provided.'});
  }
}
