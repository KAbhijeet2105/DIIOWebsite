const express = require("express");
const router = express.Router();
const { check , validationResult } = require("express-validator");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');    

const {createProfile,getAllProfiles,getProfile,getProfileById,updateProfile} = require("../controllers/profile");



 // regisrer user profile creation route here
//TODO: add proper validation and test
router.post("/profile/createProfile",[
check("name","user name should be unique and more than 1 characters!").notEmpty(),
   check("email","Unique email id is required!").isEmail(),
    check("whatsAppNumber","whatsAppNumber should be of 10 Digits!").isLength({max:10}),
],createProfile);


//get profile id as param
router.param("profileId",getProfileById);

//get user by its id
router.get("/profile/:profileId", getProfile);




//profile updation route here
//TODO: add proper validation and test
router.put("/profile/:profileId",[
    check("name","user name should be unique and more than 1 characters!").notEmpty(),
       check("email","Unique email id is required!").isEmail(),
        check("whatsAppNumber","whatsAppNumber should be of 10 Digits!").isLength({max:10}),
    ],updateProfile);

//update the profile  by  user id
////router.put("/profile/:profileId",isSignedIn, isAuthenticated, isAdmin,isVerified,updateProfile);



//profile deleion route here

//TODO: add proper validation and test


//testng get all profiles  data (not working)
//TODO: remove this route

router.get("/profile/getallprofiles",getAllProfiles);

module.exports = router;