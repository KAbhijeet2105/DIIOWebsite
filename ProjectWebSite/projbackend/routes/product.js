const express = require("express");
const router = express.Router();
const { check , validationResult } = require("express-validator");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');    

const {createProfile,getProfile,getProfileById,updateProfile,getprofiles,removeProfile} = require("../controllers/profile");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const {getUserById} = require("../controllers/user");
const { createProduct,getProductsBymailId, getProductById,getProducts,updateProductById,removeProduct } = require("../controllers/product");




//create product route 
//working ... //done working fine 
router.post("/product/createProduct/:usrMailId",createProduct);



//get product route //get specific product by product id
//TODO: done working fine ...
router.get("/product/:prodId",getProductById);


//get all products of the user //find products by user email 
//TODO: working fine 

router.get("/products/:mailid",getProductsBymailId);

//update product //find by product id 
//TODO: working fine tested.

router.put("/product/:prodId",updateProductById);

 
// delete product  //delete by product id //can add validations here in future ...
//TODO:

router.delete("/product/:prodId",removeProduct);

//get all products route ....// tested

//TODO: working fine....
router.get("/products",getProducts);

module.exports = router;