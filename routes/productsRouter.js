const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("from productRounter");
})


module.exports = router;