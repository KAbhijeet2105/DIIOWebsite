const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({

       

         prodTitle:{
           type:String,
           maxlength:40
         },
         
         prodImg:{
            type:String,
            default:"#",                
        },
        prodDesc:{
            type:String,
            maxlength:400
        },
        
       prodLink:{
           type:String,
           default:"#",
        },
       

         prod_usrname:{
           type:String,
           maxlength: 60,
        },
  
         prod_usremail:{
           type:String,  
        },
  
  
  },{timestamps:true}); 
   
  module.exports = mongoose.model("Product",productSchema)