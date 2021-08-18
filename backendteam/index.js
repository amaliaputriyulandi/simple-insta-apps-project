require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser")

const server = express();
const port = process.env.PORT || 3000;
require("./database/config")();

const postRoute = require('./route/post_route')

server.use(logger("dev"));
server.use(cors());
server.use(express.json());
server.use(
  express.urlencoded({
    extended: false,
  })
);
server.use(cookieParser())
server.use('/api',
  postRoute
)

server.get('/', (req, res) => {
  res.send('Simple Insta App')
});


server.all("*", (req, res) => {
  res.status(404).json({
    statusText: "Not Found",
    message: "You Have Trying Reaching A Route That Doesn't Exist",
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
