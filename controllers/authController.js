const usermodel = require('../models/user-models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {generateToken} = require('../utils/generateToken')


module.exports.registerUser = async (req,res)=>{
    try{
        const { email , password , fullname } = req.body;

        const findUser = await usermodel.findOne({email});
        if(findUser){
            return res.status(401).send("user is already registered");
        }

        const salt = await bcrypt.genSalt(11);
        const hash = await bcrypt.hash(password,salt)

        const user = await usermodel.create({
            email,
            password:hash,
            fullname
        });
        const token = generateToken(user);
        res.cookie("token",token)
        res.send(user);
    }
    catch(err){
        debug(err)
        return res.send("internal server error")
    }
}