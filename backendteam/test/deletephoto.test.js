const User = require("../database/model/userModel");

const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);
const server = require("../index");

const mockPhoto = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWQyMDk5YzJiNzIwNzBhMmUxNDg2OSIsInNlc3Npb25faWQiOiI5YjA0ZThmZC1iZjNlLTQ0OTYtYWVlZi1hYzIxZWQwODBkOGQiLCJpYXQiOjE2MjkzODI2OTZ9.gDGFB31xrvgkDkhVDRMmTDdTu-PdJcZS4FRGTP4QyH4",
    oldId: "611e294e0d44392d4adacd70",
    id:"611e6a61f9de711e5d2cc419",
    image: "./a.png"
};


describe("Delete Photo API", () => {
    it("Should Delete Photo Successfully", (done) => {
        chai
        .request(server)
        .delete(`/api/deletePhoto/${mockPhoto.id}`)
        .set({
            "Authorization": `${mockPhoto.token}`
        })
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.property("statusCode").eql(200);
            res.body.should.property("statusText").eql("success");
            res.body.should.property("message").eql(" Photo Was Deleted Succesfully ")
            done()
        })
    })

    it("Should Failed Delete Photo User: Id Photo not Found", (done) => {
        chai
        .request(server)
        .delete(`/api/deletePhoto/${mockPhoto.oldId}`)
        .set({
            "Authorization": `${mockPhoto.token}`
        })
        .end((err, res)=> {
            res.should.have.status(400);
            done()
        })
    })
})