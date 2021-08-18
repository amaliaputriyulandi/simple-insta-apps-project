const joi = require("joi");
const jwt = require('jsonwebtoken');
const cookiesMiddleware = {}

cookiesMiddleware.checkCookies = (req, res, next) => {
    const authToken = req.cookies['AuthToken']
    console.log("🧐 ~ file: cookiesMiddleware.js ~ line 5 ~ authToken", authToken)

    req.user = authTokens[authToken]

    next()
}

cookiesMiddleware.checkToken = (req, res, next) => {
    const token = req.header('Authorization');
    if(!token) return res.status(401).json({message: 'Failed to authenticate token'});

    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.token = verified;
        next();
    } catch (error) {
        res.status(400).json({message: 'No token provided.'});
    }
}

module.exports = cookiesMiddleware