const Profile = require("../models/profile");
const { check , validationResult } = require("express-validator");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');




//profile creation done here 
//TODO: make validations and test working...9jan


exports.createProfile = (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        });
    }

    const profile = new Profile(req.body);

    profile.save((err,profile) => {
        if(err){
            return res.status(400).json({
                err:"Error: Unable to create profile in Database!!!"
            });
        }

       res.json(profile);
        // res.json({
        //     id:user._id,
        //     name : user.user_name,
        //     email:user.email,
        //     roll:user.role,
        //     verified: user.verified
        // });
    });  
};


//get all profiles


exports.getAllProfiles = (req,res) => {

    Profile.find().exec((err,profiles) => {

        if(err || !profiles){
            return res.status(400).json({
               error:"Profiles not found!, Data error!"
            });
           
       }
       res.json(profiles);
       
    });

};


//get profile by id
//test req..

exports.getProfileById = (req,res,next,id) => {

    Profile.findById(id).exec((err,profile) => {

        if(err || !profile){
             return res.status(400).json({
                error:"Profile not found !!"
             });
        }
        req.profile = profile;
        next();
    });
};



exports.getProfile = (req,res) => {

    return res.json(req.profile);

};




//update profile route
//TODO: make validations and test

exports.updateProfile =(req,res) => {

    Profile.findByIdAndUpdate(
        { _id: req.profile._id},
        {$set: req.body },
        {new: true, useFindAndModify:false},

        (err,profile)=>{
            if(err){
                return res.status(400).json({
                    error:"You are not authorized user!!!"
                });
            }

           
             res.json(profile);
        }
    );
};
