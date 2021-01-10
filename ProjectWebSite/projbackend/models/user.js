const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

var userSchema = new mongoose.Schema({

  user_name:{
            type:String,
            unique:true,
            required:true,
            maxlength: 60,
            trim:true
  },

    email:{
        type:String,
         unique:true,
            required:true,
            maxlength: 60,
            trim:true
    },
 
    encry_password:{
        type:String,
       required:true,
    },

    salt: String,

    // superadmin,admin,user
    role:{
        type:String,
        default:"user"
    },

    //none, profile, notecard
  
    service:{
        type:String,
        required:true
    },

    //verified user 1 = yes,0 = not verified

  verified:{
      type:Boolean,
      default:false,
      
  },


},
{ timestamps:true}); 
 

userSchema.virtual("password")
.set(function(password){
    this._password = password
    this.salt = uuidv1();
    this.encry_password = this.getSecuredPassword(password)
})
.get(function(){
    return this._password
})



userSchema.methods = {

 authenticate: function(plainpass){
     return this.getSecuredPassword(plainpass) === this.encry_password

 },

    getSecuredPassword: function(plainpass){
        if(!plainpass) return "";

        try{
                return crypto.createHmac('sha256',this.salt)
                .update(plainpass)
                .digest('hex');
        }
        catch(err)
        {
            return "err: exception while creating the password!!";
        }
    }
}

module.exports = mongoose.model("User",userSchema)