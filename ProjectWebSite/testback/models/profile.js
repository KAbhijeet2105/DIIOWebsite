const mongoose = require("mongoose");

var profileSchema = new mongoose.Schema({

  name:{
         type:String,
         required:true,
         maxlength: 60,
         trim:true
  },

    uemail:{
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
        type:String,
        default:"#",

        },
     //proile image
      profileImg:{
         type:String,
         default:"#",
         },
   //products

//    products:[
//         {
//             //product title
//               prodTitle:{
//                 type:String,
//                 maxlength:40
//             },
//             //product imgs
//             prodImg:{
//                 type:String,
//                 default:"#",                
//             },
//             prodDesc:{
//                 type:String,
//                 maxlength:400
//             },

//             prodLink:{
//                 type:String,
//                 default:"#",

//             },
//         }
//            //product descrip
//            //product link
//         ],

   //location

 location:{
        type:String,
         trim:true
   },

  //TODO: add boolean keys for social media eg. isIGUser = true/false;

   //social links
       IG:{//InstaGram
           type:String,
           trim:true,
           default:"#",
       },
       FB:{//FaceBook
        type:String,
        trim:true,
        default:"#",
       },
       YT:{//YouTube
        type:String,
         trim:true,
         default:"#",
        },
       LI:{ //LinkedIn
        type:String,
        default:"#",
        trim:true,
         },
       WEB:{//WebSite
        type:String,
        trim:true,
        default:"#"
        },
       
  

// maybe individual or company employee code here

},{timestamps:true}); 
 
module.exports = mongoose.model("Profile",profileSchema)