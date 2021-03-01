//const user = require("../models/user");
const User = require("../models/user");

exports.getUserById = (req,res,next,id) => {

    User.findById(id).exec((err,user) => {

        if(err || !user){
             return res.status(400).json({
                error:"User not found !!"
             });
        }
        req.profile = user;
        next();
    });
};

exports.getUser = (req,res) => {

    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    return res.json(req.profile);

};


//update user route

exports.updateUser =(req,res) => {

    User.findByIdAndUpdate(
        { _id: req.profile._id},
        {$set: req.body },
        {new: true, useFindAndModify:false},

        (err,user)=>{
            if(err){
                return res.status(400).json({
                    error:"You are not authorized user!!!"
                });
            }

            user.salt = undefined;
            user.encry_password = undefined;
             res.json(user);
        }
    );
};



//testing get all user data
exports.getAllUsers = (req,res) => {

    User.find().exec((err,users) => {


        if(err || !users){
            return res.status(400).json({
               error:"Users not found!, Data error!"
            });
       
       }
   

       res.json(users);


    });

};