import React from 'react';
import { isAuthenticated } from '../auth/helper/index';
import { NavBar } from '../core/NavBar';
import { useState  } from 'react';
import "../styles.css";
import { Redirect } from 'react-router';
import { createProduct } from './helper/adminapicall';




const CreateProduct = () => {

//getting current user for user name and mail id to avoid conflicts

  const {token} = isAuthenticated();

  const {
    user:{ _id,user_name,email}
 } = isAuthenticated();


const [values,setValues] =  useState({

    prod_usrname:user_name,
    prod_usremail:email,
    prodTitle:"",
    prodImg:"",
    prodDesc:"",
      
    prodLink:"",
    
    
       loading:false,
       error:"",
       createdProduct:"",
       getaRedirect:false,
      //  formData :""
      //  form data maybe FormData
});



//TODO: if form data wont work then try to use preload data

const {prod_usrname, prod_usremail,prodTitle,prodImg,prodDesc,prodLink,loading, error,createdProduct,getaRedirect}= values;



const handleChange = name => event => {
  
  setValues({...values,error:false,[name]:event.target.value});

  
};


 const onSubmit = (event) => {

   event.preventDefault();
  setValues({...values, error:false,loading:true,getaRedirect:true})
 
  createProduct(prod_usremail,values)
  .then(data => {
    if(data.error){
      setValues({...values,error:data.error});
    }
    else{
       setValues({...values,
        prod_usrname:user_name,
        prod_usremail:email,
        prodTitle:"",
        prodImg:"",
        prodDesc:"",
          
        prodLink:"",
        
        
           loading:false,
           error:"",
           createdProduct:"",
           getaRedirect:false,
       
        
      });

    }
  })
  .catch(error => {
     console.log(error)
  })
  

 }



// helper messages here


 //popup messsage

 const successMessage = () => {
  return(
    <div className="row">
    <div className="col-md-6 offset-sm-3 text-left">
<div className = "alert alert-success"
  style={{display:loading ? performRedirectOnCreateProfile() : "none"}}>
  
  </div>
  </div>
  </div>);

};

const performRedirectOnCreateProfile = () => {

  alert(" product created successfully!!")
  {window.location.href="/user/profile"}

};


const errorMessage = () => {
  return(
    <div className="row">
   <div className="col-md-6 offset-sm-3 text-left">
  <div className = "alert alert-danger"
    style={{display:loading ? "": "none"}}>
       {error} unable to create product  !!
    </div>
    
    </div>
    </div>
    );

 };



// form method end here

  return (

      <div>
     
     <NavBar />
 
     <div className="container bg-white">
       <div className="jumbotron bg-white text-dark center">
         <h2 className="display-4 ">Create your Product</h2>
        
         <div class="d-flex justify-content-center">
        <span className="badge badge-success text-white  ">Welcome: {user_name} </span> 
        
        <br/><br/>
        
        </div>

        {/* <div class="d-flex justify-content-center">
        <span className="badge badge-success text-white  ">id: {_id} </span> 
        
        <br/><br/>
        
        </div> */}


        <div class="d-flex justify-content-center">
        
        <span className="badge badge-success text-white ">Email: {email} </span> 
      
        </div>
 
         </div>
 
         {/* dashboard data end here unaem and mail id */}

            {/* start taking inputs in input form  */}
              
         {successMessage()}
         {errorMessage()}

               <div class="row container">
    <form class="col s12">
      <div class="row">
        {/* user name */}
        <div class="input-field col s6 ">
          <input disabled    id="prod_usrname" type="text"   value={prod_usrname}/>
          <label for="prod_usrname">User Name</label>
        </div>
        {/* email id */}
        <div class="input-field col s6 ">
          <input disabled id="prod_usremail" type="email"   value={prod_usremail}/>
          <label for="prod_usremail">Email</label>
        </div>
      </div>
      {/* Product Name */}
      <div class="row">
        <div class="input-field col s12 ">
        <i class="material-icons prefix">switch_account</i>
          <input onChange={handleChange("prodTitle")}  id="prodTitle" type="text" class="validate "  value={prodTitle} />
          <label for="prodTitle">Product Name </label>
        </div>
    </div>
      
    
      
       

 {/* product description  */}
      <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">add_location</i>
          <textarea class="materialize-textarea " onChange={handleChange("prodDesc")} id="prodDesc" type="text"  value={prodDesc} />
          <label for="prodDesc">Product description</label>
        </div>
      </div>
      
{/* product image */}
<div class="row">
<div class="file-field input-field col s12 form-group">
      <div class="btn green">
        <span>File</span>
        <input type="file"/>
      </div>
      <div class="file-path-wrapper">
        <input id="prodImg" onChange={handleChange("prodImg")} class="file-path validate " placeholder="product Image" type="text"  value={prodImg}/>
      </div>
    </div>
 </div>

 
   {/* Product Link */}
   <div class="row">
        <div class="input-field col s12 ">
        <i class="material-icons prefix">linkedin</i>
          <input onChange={handleChange("prodLink")}  id="prodLink" type="text" class="validate "  value={prodLink} />
          <label for="prodLink">Product Buying Link</label>
        </div>
    </div>



      {/* submit button */}
      {/* row new line field */}
      <div class="row">
        <div className="col s12 center">
         {/* add txt field here */}
          
      {successMessage()}
      {errorMessage()}


{isAuthenticated() &&  <button onClick={onSubmit} class="btn green waves-effect waves-light btn-large " type="submit" >Create Product
              <i class="material-icons right">send</i>
            </button>}
            

            {/* <p className="text-black text-center">{JSON.stringify(values)}</p> */}
        </div>
      </div>

    </form>
  </div>

 {/* end form */}
       </div>

      </div>
  );
}

export default CreateProduct;