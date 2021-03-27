import React from "react";
import "../styles.css";
import { NavBar } from "../core/NavBar";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { API } from "../backend";





export default function UserProfile() {

    return(
          <div>
             <NavBar />
           
             <div className="container bg-white">
       <div className="jumbotron bg-white text-dark center">
         <h2 className="display-4 ">My Profile</h2>
        
         <div class="d-flex justify-content-left">
        
        <a href="/user/createprofile"><span className="badge badge-success text-white left">Create Profile </span></a> 
        <br/><br/>        
        </div>

        <div class="d-flex justify-content-left">
        
        <a href="/user/manageprofile"><span className="badge badge-success text-white left">Edit Profile </span></a> 
        <br/><br/>        
        </div>
 
      
      
        </div>
 
         </div>
 

 
       </div>



        
    );
};