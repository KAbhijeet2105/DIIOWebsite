const express = require("express");
const router = express.Router();

const { isSignedIn, isAuthenticated, isAdmin, isVerified} = require("../controllers/auth");
const { getUserById, getUser , getAllUsers , updateUser} = require("../controllers/user");


router.param("userId",getUserById);

//get user by its id
router.get("/user/:userId",isSignedIn, isAuthenticated, getUser);
//update the user by id
router.put("/user/:userId",isSignedIn, isAuthenticated, updateUser);




//testng get all user data 
//TODO: remove this route
router.get("/users",getAllUsers);

module.exports  = router;