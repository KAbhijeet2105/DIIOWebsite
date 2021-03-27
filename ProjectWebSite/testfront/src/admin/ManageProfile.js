import React from "react";
import "../styles.css";
import { NavBar } from "../core/NavBar";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { API } from "../backend";






export default function ManageProfile() {

    return(
          <div>
             <NavBar />
           
             <div className="container bg-white">
       <div className="jumbotron bg-white text-dark center">
         <h2 className="display-4 ">ManageProfile</h2>
        
         <div class="d-flex justify-content-center">
        
        <a href="#"><span className="badge badge-success text-white ">Edit/Update Profile </span></a> 
        <br/><br/>        
        </div>

        
 
      
      
        </div>
 
         </div>
 

 
       </div>



        
    );
};