const User = require("../database/model/userModel");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);
const server = require("../index");

const mockUser = {
  email: "email_for_testing@gmail.com",
  username: "username_for_testing",
  password: "Password123",
};

describe("Signup API", () => {
  afterEach(async () => {
    await User.deleteOne({ email: mockUser.email });
  });

  it("Should Signup Successfully", (done) => {
    chai
      .request(server)
      .post("/api/signup")
      .send({
        email: mockUser.email,
        username: mockUser.username,
        password: mockUser.password,
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property("statusCode").eql(201);
        res.body.should.have.property("statusText").eql("Created");
        res.body.should.have.property("message").eql("Signup Success");
        done();
      });
  });

  it("Should Failed Signup: email already used", (done) => {
    chai
      .request(server)
      .post("/api/signup")
      .send({
        email: "email@gmail.id",
        username: mockUser.username,
        password: mockUser.password,
      })
      .end((err, res) => {
        res.should.have.status(422);
        done();
      });
  });

  it("Should Failed Validate Signup Input: email", (done) => {
    chai
      .request(server)
      .post("/api/signup")
      .send({
        email: "email10@gmail.com",
        username: mockUser.username,
        password: mockUser.password,
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property("statusCode").eql(400);
        res.body.should.have.property("statusText").eql("Bad Request");
        res.body.should.have.property("message").eql("Signup Failed");
        done();
      });
  });

  it("Should Failed Validate Signup Input: password", (done) => {
    chai
      .request(server)
      .post("/api/signup")
      .send({
        email: mockUser.email,
        username: mockUser.username,
        password: "Password",
      })
      .end((err, res) => {
        res.should.have.status(422);
        done();
      });
  });
});
