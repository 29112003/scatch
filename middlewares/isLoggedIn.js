const jwt = require('jsonwebtoken')
const usermodel = require('../models/user-models')

const isLoggedIn = async function(req,res,next){
    try{
        if(!process.env.JWT_SECRET){
            return res.send("Internal server error");
        }
        if(!req.cookies.token){
            req.flash("error","you need to login first")
            debug("cookie is not created")
            return res.send("login first")
            // return res.redirect("/")
        }
        const decoded = jwt.verify(req.cookies.token,process.env.JWT_SECRET)
        debug(decoded)
        let user = await usermodel
        .findOne({email : decoded.email})
        .select("-password")
        req.user = user;
        next();
    }catch{
        return res.send("Login first")
    }
}


module.exports = isLoggedIn