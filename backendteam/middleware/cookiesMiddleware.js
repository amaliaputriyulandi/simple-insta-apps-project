const joi = require("joi");
const jwt = require('jsonwebtoken');
const {User} = require("../database/model")
const cookiesMiddleware = {}

const authTokens = {}

cookiesMiddleware.checkCookies = async (req, res, next) => {
    const session_id = req.cookies['AuthToken']
    if(!session_id) return res.status(401).json({message: 'Failed to authenticate cookies'});

    try{
        const findUser = await User.findOneAndDelete({session_id: session_id})
        if(!findUser){
            return res.status(401).json({message: 'Failed user not have session_id'});
        }else{
            req.user = findUser
            next()
        }

    }catch(error){
        res.status(400).json({message: 'No token provided.'});
    }
}

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