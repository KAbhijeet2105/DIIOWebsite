const User = require("../models/user");
const { check , validationResult } = require("express-validator");
const user = require("../models/user");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

//signup 
exports.signup = (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        });
    }

    const user = new User(req.body);

    user.save((err,user) => {
        if(err){
            return res.status(400).json({
                err:"Error: Unable to store the user in Database!!!"
            });
        }

       // res.json(user);
        res.json({
            id:user._id,
            name : user.user_name,
            email:user.email,
            role:user.role,
            selected_service: user.service,         
            verified: user.verified
        });
    });  
};


exports.signin = (req,res)=>{

    const { email, password } = req.body;

    const error =  validationResult(req);

    if(!error.isEmpty()){
        return res.status(422).json({
            error:error.array()[0].msg
        }); 
    }
    //

        User.findOne({ email }, (err, user ) => {

            if(err || !user ){
               return res.status(400).json({
                    err:"USER email does not exists!"
                })
            }


             if(!user.authenticate(password)){
                return res.status(401).json({
                     error:" Email and Password do not match!"
                 })
             }  

             //create token 
               const token =  jwt.sign({ _id: user._id},process.env.SECRET);

              //put token in cookie 

              res.cookie("token", token , {expire: new Date() + 9999 });
              
              //send response to front end 
              const { _id, user_name, email, role } = user; 
              
               return res.json({token, user:{ _id, user_name, email, role } });
      
        });
};

exports.signout = (req,res)=>{
    res.clearCookie("token");

    res.json({
        message:"User signout!!"
    });
};

//Protected routes 

exports.isSignedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty:"auth"
});


//custome middlewares 
//check user is logged in or not!
exports.isAuthenticated  = (req,res,next) => {

    let checker = req.profile && req.auth && req.profile._id == req.auth._id;
    if(!checker){
        return res.status(403).json({
            error:"ACCESSS DENIED!"
        });
    }

    next();
};



exports.isAdmin  = (req,res,next) => {
   if(req.profile.role === "admin"||req.profile.role === "superadmin")
   {
       return res.json({
           error:"ADMIN ACCESS REQUIRED!"
       });
   }

    next();
};



exports.isVerified  = (req,res,next) => {

    if(req.profile.verified === true)
    {
        return res.json({
            error:"USER NOT VERIFIED!"
        });
    }

    next();
}