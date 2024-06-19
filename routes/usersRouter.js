const express = require('express');
const router = express.Router();
const debug = require('debug')('development:userRouter')
const {registerUser} = require('../controllers/authController')
const {loginUser} = require('../controllers/loginController')
const isLoggedIn = require('../middlewares/isLoggedIn')

router.get('/',(req,res)=>{
    res.send("from userrRounter");
})
router.post('/register', registerUser);

router.post('/login', loginUser);
router.get('/test', isLoggedIn ,(req,res)=>{
    res.send("clear all ");
});


module.exports = router;