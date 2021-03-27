const Profile = require("../models/profile");
const { check , validationResult } = require("express-validator");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');




//profile creation done here 
//TODO: make validations and test working...9jan
//updating profile according to user need eg. retrive data using user id


exports.createProfile = (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        });
    }

    const profile = new Profile(req.body);

    //console.log(req.body)

    profile.save((error,profile) => {
        if(error){
            return res.status(500).json({
                err:"Error: Unable to create profile in Database!!!:-"+profile+" error: "+error
            });
        }

       res.status(200).json({
           profile});
       
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
//TODO: make validations and test //done 1
// TODO: update might require to change ref.sec 9.5

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


//testing get all user data
exports.getprofiles = (req,res) => {

    Profile.find().exec((err,profiles) => {

        if(err || !profiles){
            return res.status(400).json({
               error:"profiles  not found!, Data error!"
            });
    
       }
       res.json(profiles);
    });
};



exports.removeProfile =(req,res) => {

 const profile = req.profile;

 profile.remove((err,profile) => {
          if(err){
              return res.status(400).json({
                  error:"Failed to delete the profile."
              });
          }     
           res.json({
               message: "Profile deleted Successfully!!!"
           });
 });

};