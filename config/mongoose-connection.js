const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost:27017/bagsellingWebApp")
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})

const db = mongoose.connection;

module.exports = db;