const express = require("express");
const router = express.Router();
const { check , validationResult } = require("express-validator");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');    

const {createProfile,getProfile,getProfileById,updateProfile,getprofiles,removeProfile} = require("../controllers/profile");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const {getUserById} = require("../controllers/user");


router.param("userId",getUserById);

//get profile id as param
router.param("profileId",getProfileById);


 // regisrer user profile creation route here
//TODO: add proper validation and test //create user profile by its id // validation added
router.post("/profile/createProfile/:userId",createProfile);
//router.post("/profile/createProfile/:userId",isSignedIn,isAuthenticated,createProfile);



//get profile by its id //maybe needs to change as per req ...
router.get("/profile/:profileId", getProfile);



//profile updation route here
//TODO: add proper validation and test
router.put("/profile/:profileId/:userId",isSignedIn,isAuthenticated,[
        check("whatsAppNumber","whatsAppNumber should be of 10 Digits!").isLength({max:10}),
    ],updateProfile);

//update the profile  by  user id
////router.put("/profile/:profileId",isSignedIn, isAuthenticated, isAdmin,isVerified,updateProfile);



//profile deleion route here

//TODO: add proper validation and test


//testng get all profiles  data (not working)

router.get("/profiles",getprofiles);


//delete route***********************new

router.delete("/profile/:profileId/:userId",isSignedIn,isAuthenticated,removeProfile);


module.exports = router;