const Product = require("../models/product");
const { check , validationResult } = require("express-validator");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');





exports.createProduct = (req,res)=>{

    const product = new Product(req.body);

    //console.log(req.body)

    product.save((error,product) => {
        if(error){
            return res.status(500).json({
                err:"Error: Unable to create product in Database!!!:-"+product+" error: "+error
            });
        }

       res.status(200).json({
        product});
       
   });  
};



//retive product by user email 
// done checking working fine 10th  april
exports.getProductsBymailId = (req,res) => {

    Product.find({prod_usremail:req.params.mailid}).exec((err,product) => {
       if(err||!product)
       {
           console.log(product+" product not found !! "+err);
           return res.status(400).json({error:product+" profile not found !! "+err});
       }
       // req.product = product;
        // res.status(200).json({
        //     product});

            res.json(product);
       
    });
   };
   
// get a specific product by its id
   exports.getProductById = (req,res) => {

    Product.findById(req.params.prodId).exec((err,product)=> {
        if(err||!product)
        {
            console.log(product+" product not found !! "+err);
            return res.status(400).json({error:product+" profile not found !! "+err});
        }
        //  req.product = product;
        //  res.status(200).json({ product });

         res.json(product);

    });

   };

//update product by  products id ...


exports.updateProductById = (req,res) => {

 Product.findByIdAndUpdate(
     req.params.prodId, 
    {$set: req.body },
    {new: true, useFindAndModify:false},).exec(

        (err,product)=>{
            if(err){
                console.log(product+" product not found !!unable to update product!! "+err);
        return res.status(400).json({error:product+" product not found !!unable to update product!! "+err
                });
            }
           
        //     req.product = product;
        //  res.status(200).json({ product });

         res.json(product);


 });

};


//delete product by products id

exports.removeProduct = (req,res) => {

 Product.findByIdAndRemove(req.params.prodId,{useFindAndModify:false}).exec((err,product)=>{
  
    if(err){
        console.log(product+" product not found !!unable to delete product!! "+err);
         return res.status(400).json({error:product+" product not found !!unable to delete the product!! "+err
        });
    }
//     req.product = product;
//  res.status(200).json({ product  });

 res.json(product);


 });
};


   //get all products of evey user



exports.getProducts = (req,res) => {

    Product.find().exec((err,products) => {

        if(err || !products){
            return res.status(400).json({
               error:"products are not found!, Data error!"
            });
    
       }
       res.json(products);
    });
};