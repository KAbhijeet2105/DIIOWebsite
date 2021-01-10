var express = require("express");
var router = express.Router();
const { check , validationResult } = require("express-validator");
const{ signout ,signup, signin, isSignedIn }= require("../controllers/auth");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');    

//sign up route // regisrer user 

router.post("/signup",[
    check("user_name","user name should be unique and more than 1 characters!").isLength({min:1}),
    check("email","Unique email id is required!").isEmail(),
    check("password","Password should be more than 5 characters!").isLength({min:5}),
    check("service","please select a service!!").notEmpty(),
],signup);


//sign In route


router.post("/signin",[

    check("email","Unique email id is required!").isEmail(),
    check("password","Password should be more than 5 characters!").isLength({min:5})
    .matches(/\d/).withMessage("must contain a Number!"),

],signin);

//signout route
router.get("/signout",signout);


// router.get("/testroute", isSignedIn,(req,res) => {
//     res.send("this is a Protected route!!")

// });



module.exports = router;