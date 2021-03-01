import React from "react";
import "../styles.css";
import { API } from "../backend";
import { NavBar } from "../core/NavBar";
//import Menu from "./Menu";

export default function UserDashBoard() {

  return (
    <div>
    <NavBar />
    <div className="container">
      <div className="jumbotron bg-white text-dark text-center">
        <h2 className="display-4">User Dashboard</h2>
        <p className="lead">Hello user </p>
        
      </div>
     
    </div>
   
  </div>
  );
}
