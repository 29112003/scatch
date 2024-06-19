const usermodel = require('../models/user-models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {generateToken} = require('../utils/generateToken')
const debug = require('debug')('development:loginController')


module.exports.loginUser = async (req,res)=>{
    try{
        const { email , password } = req.body;

        const user = await usermodel.findOne({email});
        if(!user){
            return res.status(401).send("your email or password is incorrect");
        }
        var result = await bcrypt.compare(password,user.password)
        if(!result){
            return res.status(401).send("your email or password is incorrect");
        }
        const token = generateToken(user);
        res.cookie("token",token)
        debug(token)
        res.send("you can login");
    }
    catch(err){
        debug(err)
        return res.send("internal server error")
    }
}