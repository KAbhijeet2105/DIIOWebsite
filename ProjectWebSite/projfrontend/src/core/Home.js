import React from "react";
import "../styles.css";
import { API } from "../backend";
//import Menu from "./Menu";


export default function Home() {
  console.log("API IS", API);
  return (
    <div>

    <div className="container">
      <div className="jumbotron bg-white text-dark text-center">
        <h2 className="display-4">Digital Profile</h2>
        <p className="lead">Signup to create account</p>
        <a  href="../user/Signin"class="waves-effect waves-light blue btn-large text-white">Login</a>
        <br/><br/>
        <a href="../user/Signup" class="waves-effect waves-light blue btn-large text-white">SignUp</a>

      </div>
     
    </div>
   
  </div>
  );
}