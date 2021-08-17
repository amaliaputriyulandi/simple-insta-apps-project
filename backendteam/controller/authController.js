require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const User = require("../database/model/userModel");

exports.signup = async (req, res) => {
  try {
    let { email, username, password } = req.body;

    const findUser = await User.findOne({ email }).exec();
    if (!findUser) {
      const hashedPassword = await bcrypt.hashSync(password, 10);

      const registerUser = await User.create({
        email,
        username,
        password: hashedPassword,
      });

      res.status(201).send({
        statusCode: 201,
        statusText: "Created",
        message: "Signup Success",
      });
    } else {
      res.status(400).send({
        statusCode: 400,
        statusText: "Bad Request",
        message: "Signup Failed",
      });
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      statusText: "Internal Server Error",
      message: "Signup Failed",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email }).exec();

    if (findUser) {
      const checkPassword = await bcrypt.compare(password, findUser.password);

      if (checkPassword) {
        const session_id = uuidv4();
        findUser.session_id = session_id;
        findUser.save();

        const generateToken = await jwt.sign(
          { id: findUser._id, session_id },
          process.env.SECRET_KEY
        );

        res.status(200).send({
          statusCode: 200,
          statusText: "OK",
          message: "Login Success",
          token: generateToken,
        });
      } else {
        res.status(401).json({
          statusCode: 401,
          statusText: "Unauthorized",
          message: "Incorrect Email Or Password",
        });
      }
    } else {
      res.status(401).json({
        statusCode: 401,
        statusText: "Unauthorized",
        message: "Incorrect Email Or Password",
      });
    }
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      statusText: "Internal Server Error",
      message: "Login Failed",
    });
  }
};

exports.logout = async (req, res) => {
  try {
    const destroySessionId = await User.findOneAndUpdate(
      { _id: req.user.id },
      { session_id: null }
    );

    res.status(200).json({
      statusCode: 200,
      statusText: "OK",
      message: "Logout Success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      statusText: "Internal Server Error",
      message: "Logout Failed",
    });
  }
};
