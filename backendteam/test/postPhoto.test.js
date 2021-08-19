const User = require("../database/model/userModel");

const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const fs = require('fs')

chai.use(chaiHttp);
const server = require("../index");

const mockPhoto = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWQyMDk5YzJiNzIwNzBhMmUxNDg2OSIsInNlc3Npb25faWQiOiI5YjA0ZThmZC1iZjNlLTQ0OTYtYWVlZi1hYzIxZWQwODBkOGQiLCJpYXQiOjE2MjkzODI2OTZ9.gDGFB31xrvgkDkhVDRMmTDdTu-PdJcZS4FRGTP4QyH4",
    image: "test/a.png"
};

describe("Post Photo API", () => {
    it("Should Post Photo User Successfully", (done) => {
        chai
        .request(server)
        .post("/api/postPhoto")
        .set({
            "Authorization": `${mockPhoto.token}`
        })
        .attach('image', `${mockPhoto.image}`)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property("data");
            res.body.should.have.property("statusCode").eql(200);
            res.body.should.have.property("statusText").eql("success");
            res.body.should.have.property("message").eql(" Your request for Create Post successfully");
            done()
        })
    })

    it("Should Failed Post Photo User: No Image", (done) => {
        chai
        .request(server)
        .post("/api/postPhoto")
        .set({
            "Authorization": `${mockPhoto.token}`
        })
        .attach('image', ``)
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.have.property("statusCode").eql(400);
            res.body.should.have.property("statusText").eql("Failed");
            res.body.should.have.property("message").eql(" You must to upload file");
            done()
        })
    })
})