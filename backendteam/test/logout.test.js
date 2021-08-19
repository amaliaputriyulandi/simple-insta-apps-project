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

describe("Logout API", () => {
  it("Should Logout Successfully", (done) => {
    chai
      .request(server)
      .get("/api/logout")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("token");
        res.body.should.have.property("statusCode").eql(200);
        res.body.should.have.property("statusText").eql("OK");
        res.body.should.have.property("message").eql("Login Success");
        done();
      });
  });
});
