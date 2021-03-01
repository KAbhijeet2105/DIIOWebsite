import React, { useState }from "react";
import "../styles.css";
import {Link} from "react-router-dom";
import { event } from "jquery";
import { signup } from "../auth/helper";
import { NavBar } from "../core/NavBar";



const Signup = () => 
{
  const [values,setValues] = useState({

   user_name:"",
   email:"",
   password:"",
   role:"admin",
   service:"profile",
   verified:false,
   error:"",
   success: false
  });

  const {user_name,email,password,role,service,verified,error,success} = values;

  const handleChanges = user_name => event => {
      setValues({...values,error:false,[user_name]:event.target.value});
  };

  const onSubmit = event =>  {

    event.preventDefault()
    setValues({...values, error:false})
    signup({user_name,email,password,role,service,verified})
    .then(data => {
      if(data.error){
        setValues({...values,error:data.error,success:false});
      }
      else{
         setValues({...values,
          user_name:"",
          email:"",
          password:"",
          role:"admin",
          service:"profile",
          verified:false,
          error:"",
          success: true
        
        });

      }
    })
    .catch(console.log("Error in signup!!!"))

  }


 //popup messsage

 const successMessage = () => {
    return(
      <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
  <div className = "alert alert-success"
    style={{display:success ? "": "none"}}>

      New account created successfully!! <Link to="/user/Signin"> Please login here </Link> !!
    </div>
    </div>
    </div>);

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
          <h2 className="display-4">Signup Page</h2>
          <p className="lead">user registration here</p>
          
         <div class="container">

          {/* here is form code */}

          <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field blue-text col s6">
          <input 
             value={user_name}
          onChange={handleChanges("user_name")}
          id="name" type="text" class="validate blue-accent"/>
          <label for="name" class="blue-text ">Name</label>
        </div>
       
      </div>
      
      <div class="row">
        <div class="input-field col s12">
          <input
              value={email}
              onChange={handleChanges("email")}
          id="email" type="email" class="validate"/>
          <label for="email" class="blue-text ">Email</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="password" 
            onChange={handleChanges("password")}
            value={password}
          type="password" class="validate"/>
          <label for="password" class="blue-text">Password</label>
        </div>
      </div>
      
      <div class="row">
        <div class="col s12">
        <p class="blue-text">Please choose your service:</p>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
        <div className="btn-group btn-group-toggle" data-toggle="buttons">

      <label className="btn  btn-primary ">
        <input name="service" type="radio" id="card" autocomplete="off" />
        Digital NoteCard
      </label>
      &emsp;
  
      <label className="btn btn-primary ">
        <input name="service" type="radio" id="profile" autocomplete="off"/>
        Digital Profile
      </label>

      {/* 
       for disable the choice disable radio btn
      <label className="btn  btn-primary ">
        <input name="service" type="radio" id="card" autocomplete="off" disabled="disabled"/>
        Digital NoteCard
      </label> */}


      {/* <label>
        <input class="with-gap text-blue" name="group1" type="radio" color="blue" />
        <span>Digital Profile</span>
      </label> */}

      </div>

        </div>
      </div>

      {successMessage()}
      {errorMessage()}

         <div class="row">
          <div class="col s12">
           <button onClick={onSubmit} class="btn blue waves-effect waves-light btn-large" type="submit" name="action">Register
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
  export default Signup;