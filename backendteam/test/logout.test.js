const User = require("../database/model/userModel");
const jwt = require("jsonwebtoken");

const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);
const server = require("../index");

const mockUser = {
  email: "email10@gmail.com",
  password: "Password123",
};

const user = User.findOne({ email: mockUser.email }).exec();
const token = jwt.sign(
  { id: user._id, session_id: user.session_id },
  process.env.SECRET_KEY
);

describe("Logout API", () => {
  beforeEach(async () => {});

  it("Should Logout Successfully", (done) => {
    chai
      .request(server)
      .get("/api/logout")
      .set({
        Authorization: `${token}`,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("statusCode").eql(200);
        res.body.should.have.property("statusText").eql("OK");
        res.body.should.have.property("message").eql("Logout Success");
        done();
      });
  });
});
