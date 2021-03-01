import React from "react";
import "../styles.css";
import { API } from "../backend";
import { NavBar } from "../core/NavBar";
//import Menu from "./Menu";

export default function AdminDashBoard() {

  return (
    <div>
    <NavBar />
    <div className="container">
      <div className="jumbotron bg-white text-dark text-center">
        <h2 className="display-4">admin Dashboard</h2>
        <p className="lead">Hello admin </p>
        
      </div>
     
    </div>
   
  </div>
  );
}
