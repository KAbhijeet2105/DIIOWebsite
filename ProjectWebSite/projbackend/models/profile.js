const mongoose = require("mongoose");

var profileSchema = new mongoose.Schema({

  name:{
         type:String,
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

    whatsAppNumber:{
        type:String,
        maxlength:10,
    
    },
    mobileNumber:{
        type:String,
        maxlength:10,
    
    },
    
      address:{
          type:String,
          trim:true,
          maxlength:240,
      },
      //coverPic image
      coverImg:{
        type:String

        },
     //proile image
      profileImg:{
         type:String

         },
   //products

   products:[
        {
            //product title
              prodTitle:{
                type:String,
                maxlength:40
            },
            //product imgs
            prodImg:{
                type:Buffer,
                contentType:String,
            },
            prodDesc:{
                type:String,
                maxlength:400
            },

            prodLink:{
                type:String,
            },
        }
           //product descrip
           //product link
        ],

   //location

 location:{
        type:String,
         trim:true
   },

   //social links
       IG:{//InstaGram
           type:String,
           trim:true,
       },
       FB:{//FaceBook
        type:String,
        trim:true,
       },
       YT:{//YouTube
        type:String,
         trim:true,
        },
       Li:{ //LinkedIn
        type:String,
        trim:true,
         },
       WEB:{//WebSite
        type:String,
        trim:true,
        },
       
  

// maybe individual or company employee code here

},{timestamps:true}); 
 
module.exports = mongoose.model("Profile",profileSchema)