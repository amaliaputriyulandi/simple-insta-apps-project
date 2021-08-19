const User = require("../database/model/userModel");

const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();


chai.use(chaiHttp);
const server = require("../index");

const mockPhoto = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWQyMDk5YzJiNzIwNzBhMmUxNDg2OSIsInNlc3Npb25faWQiOiJkZWFhMjAzZS1iOTI4LTRiZWQtOGY4My1kYmM3ZDYwMGI5NTYiLCJpYXQiOjE2MjkzNjE5NTZ9.gXeh9S9-C6kn_329hgl99Zsq4BiE0PikfKVku_hMazM"
};

describe("Get All Photo By User API", () => {
    it("Should Get Photo User Successfully", (done) => {
        chai
        .request(server)
        .get("/api/getAllPhotoByUser")
        .set({
            "Authorization": `${mockPhoto.token}`
        })
        .end((err, res)=> {
            res.should.have.status(200);
            res.body.should.have.property("data");
            res.body.should.have.property("statusCode").eql(200)
            res.body.should.have.property("statusText").eql("success");
            res.body.should.have.property("message").eql(" Your request for Get All Photo by User successfully");
            done()
        })
    })

    it("Should Failed Get Photo User: No token", (done) => {
        chai
        .request(server)
        .get("/api/getAllPhotoByUser")
        .set({
            "Authorization": ``
        })
        .end((err, res) => {
            res.should.have.status(401);
            done()
        })
    })

    it("Should Failed Get Photo User: Incorrect token", (done) => {
        chai
        .request(server)
        .get("/api/getAllPhotoByUser")
        .set({
            "Authorization": `Incorrect_token`
        })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        })
    })
})