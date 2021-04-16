const Profile = require("../models/profile");
const { check , validationResult } = require("express-validator");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
const profile = require("../models/profile");




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

// exports.getProfileById = (req,res,next,profileId) => {

//     Profile.findById(profileId).exec((err,profile) => {

//         if(err || !profile){
//             console.log(profile+" profile not found !! "+err);
//             return res.status(400).json({error:profile+" profile not found !! "+err
//              });
//         }
//         req.profile = profile;
//         res.status(200).json({
//             profile});
//         next();
//     });
// };

// //find profile by id new way
exports.getProfileById = (req,res) => {

    Profile.findOne({ _id: req.profile._id }).exec((err,profile) => {

        if(err || !profile){
            console.log(profile+" profile not found !! "+err);
            return res.status(400).json({error:profile+" profile not found !! "+err
             });
        }
        req.profile = profile;
        res.status(200).json({
            profile});
        //next();
    });
};

//retive profile by user email 
// done checking working fine 10th  april
exports.getProfileBymailId = (req,res) => {

 Profile.findOne({uemail:req.params.mailid}).exec((err,profile) => {
   
    if(err||!profile)
    {
        console.log(profile+" profile not found !! "+err);
        return res.status(400).json({error:profile+" profile not found !! "+err});
    }
     req.profile = profile;
     res.status(200).json({
        profile});
    
 });
};






exports.getProfile = (req,res) => {

    return res.json(req.profile);

};


//update profile route

// update profile with email id 
//working fine 11Apr

exports.updateProfile =(req,res) => {

    Profile.findOneAndUpdate(
        {uemail:req.params.mailid},
        {$set: req.body },
         {new: true, useFindAndModify:false},

        (err,profile)=>{
            if(err){
                console.log(profile+" profile not found !!unable to update profile!! "+err);
        return res.status(400).json({error:profile+" profile not found !!unable to update profile!! "+err
                });
            }

           
             res.json(profile);
        }
    );
};

//old reference 

// exports.updateProfile =(req,res) => {

//     Profile.findByIdAndUpdate(
//         { _id: req.profile._id},
//         {$set: req.body },
//         {new: true, useFindAndModify:false},

//         (err,profile)=>{
//             if(err){
//                 return res.status(400).json({
//                     error:"unable to update the profile please try again later!!!"
//                 });
//             }

           
//              res.json(profile);
//         }
//     );
// };







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