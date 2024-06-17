const mongoose = require("mongoose");
const config = require("config");
const debug = require('debug')("development:mongoose")

mongoose
.connect(`${config.get("MONGODB_URI")}/bagsellingWebApp`)
.then(function(){
    debug("connected");
})
.catch(function(err){
    console.log(err);
})

const db = mongoose.connection;

module.exports = db;
// mongodb://localhost:27017/bagsellingWebApp