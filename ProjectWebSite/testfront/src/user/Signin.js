import React, { useState }from "react";
import "../styles.css";
import {Link, Redirect } from "react-router-dom";

import { signin, authenticate, isAuthenticated } from "../auth/helper/index";
import { data } from "jquery";
import { NavBar } from "../core/NavBar";



const Signin = () => {


    const [values,setValues] = useState({
  
      user_name:"",
      email:"",
      password:"",
      role:"admin",
      service:"profile",
      verified:false,
      error:"",
      loading:false,
      didRedirect :  false,
      success: false
     });
   
     const {user_name,email,password,role,service,verified,error, loading,didRedirect,success} = values;
  
       const { user } = isAuthenticated();
  
       const handleChanges = user_name => event => {
        setValues({...values,error:false,[user_name]:event.target.value});
    };
  
    const onSubmit = event => {
     event.preventDefault();
     setValues({...values, error:false})

     signin({email,password})
     .then(data => {
          if(data.error){
            setValues({...values, error: data.error, loading: false})
          }
          else{
            authenticate(data,() => {
              setValues({
                ...values,
                didRedirect:true,
              });
            });
            //performRedirect();
            //TODO:perform redirect and test it!
          }
          //redirecting code new add test...

     })
     .catch(console.log("signin request failed!!"))

    };
  

     var performRedirect = () => {
       if( didRedirect){
        if(user && user.role === "admin" ){
          alert("Login successful!")
          return <Redirect to="/admin/dashboard" />;

         
        }     
        else{
          return <Redirect to="/" />;
        }
      }

      if(isAuthenticated()){
        alert("Login successful!")
        return <Redirect to="/admin/dashboard" />;
      }
     };



  
   //popup messsage
  
   const loadingMessage = () => {
    return(
          loading &&(
                <div className = "alert alert-info">
                  <h2>Loading...</h2>
                </div>
          )
      );
  
  };
  
  
  const errorMessage = () => {
  return(

    <div className="row">
   <div className="col-md-6 offset-sm-3 text-left">
  <div className = "alert alert-danger"
    style={{display:error ? "": "none"}}>
       {error} !!
    </div>
    
    </div>
    </div>
    );
  
  };
  
  return(
  
    <div>
         <NavBar />

      <div className="container">
        <div className="jumbotron bg-white text-dark text-center">
          <h2 className="display-4">Digital Profile Login Page </h2>
          <p className="lead">Welcome back User...</p>
          
         <div class="container">

          {/* here is form code */}


          <div class="row">
    <form class="col s12">
      
      
      <div class="row">
        <div class="input-field col s12">
          <input onChange={handleChanges("email")}  value = {email} id="email" type="email" class="validate"/>
          <label for="email" class="blue-text ">Email</label>
        </div>
      </div>


      <div class="row">
        <div class="input-field col s12">
          <input onChange={handleChanges("password")} value={password} id="password" type="password" class="validate"/>
          <label for="password" class="blue-text">Password</label>
        </div>
      </div>

      {loadingMessage()}
      {errorMessage()}
      {  performRedirect()}

      <div class="row">
        <div class="col s12">
        <button onClick = {onSubmit} class="btn blue waves-effect waves-light btn-large" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
        
        </div>
      </div>
  <p className="text-black text-center">{JSON.stringify(values)}</p>
    </form>
  </div>

         </div>
        
        
        </div >
       
      </div>
     
    </div>
  )};
  
  export default Signin;
  
  

