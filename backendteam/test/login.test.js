const User = require("../database/model/userModel");

const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);
const server = require("../index");

const mockUser = {
  email: "email10@gmail.com",
  password: "Password123",
};

describe("Login API", () => {
  it("Should Login Successfully", (done) => {
    chai
      .request(server)
      .post("/api/login")
      .send({
        email: mockUser.email,
        password: mockUser.password,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("token");
        res.body.should.have.property("statusCode").eql(200);
        res.body.should.have.property("statusText").eql("OK");
        res.body.should.have.property("message").eql("Login Success");
        done();
      });
  });

  it("Should Failed Login: Incorrect Email", (done) => {
    chai
      .request(server)
      .post("/api/login")
      .send({
        email: "incorrect_email@gmail.com",
        password: mockUser.password,
      })
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.have.property("statusCode").eql(401);
        res.body.should.have.property("statusText").eql("Unauthorized");
        res.body.should.have
          .property("message")
          .eql("Incorrect Email Or Password");
        done();
      });
  });

  it("Should Failed Login: Incorrect Password", (done) => {
    chai
      .request(server)
      .post("/api/login")
      .send({
        email: mockUser.email,
        password: "Incorrect_password123",
      })
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.have.property("statusCode").eql(401);
        res.body.should.have.property("statusText").eql("Unauthorized");
        res.body.should.have
          .property("message")
          .eql("Incorrect Email Or Password");
        done();
      });
  });

  it("Should Failed Validate Login Input", (done) => {
    chai
      .request(server)
      .post("/api/login")
      .send({
        email: mockUser.email,
        password: "Incorrect_password",
      })
      .end((err, res) => {
        res.should.have.status(422);
        done();
      });
  });
});
