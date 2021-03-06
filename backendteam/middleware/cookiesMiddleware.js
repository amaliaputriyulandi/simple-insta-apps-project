const joi = require("joi");
const jwt = require('jsonwebtoken');
const {User} = require("../database/model")
const cookiesMiddleware = {}


cookiesMiddleware.checkToken = (req, res, next) => {
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

module.exports = cookiesMiddleware