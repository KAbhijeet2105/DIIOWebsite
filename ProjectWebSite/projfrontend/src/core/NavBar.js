import React from "react";
import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import M from 'materialize-css/dist/js/materialize.min.js';
import { signout, isAuthenticated } from "../auth/helper";

export class NavBar extends Component{

    componentDidMount(){
      
     document.addEventListener('DOMContentLoaded', function() {
       var elems = document.querySelectorAll('.sidenav');
       var instances = M.Sidenav.init(elems, {});
     });
    }
    render(){
      return(
     <div>
      <nav>
       <div class="nav-wrapper blue">
       <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
   
         <div class="container">
         <a href="#" class="brand-logo">Logo</a>
         <ul id="nav-mobile" class="right hide-on-med-and-down">
           {/* <li><a href="sass.html">Sass</a></li>
           <li><a href="badges.html">Components</a></li>
           <li><a href="collapsible.html">JavaScript</a></li> */}
         </ul>
         </div>
       </div>
     </nav>
     
     <ul id="slide-out" class="sidenav">
       <li><div class="user-view">
         <div class="background">
           {/* <img src="images/office.jpg"/> */}
         </div>
         {/* <a href="#user"><img class="circle" src="images/yuna.jpg"/></a>
         <a href="#name"><span class="white-text name">User name here.</span></a>
         <a href="#email"><span class="white-text email">useremail@gmail.com</span></a> */}
       </div></li>
       {/* <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li> */}
       <li><a href="/">Home</a></li>
       <li><div class="divider"></div></li>
       {/* <li><a class="subheader">Subheader</a></li> */}
       {/* <li><a class="waves-effect" href="#!">Third Link With Waves</a></li> */}
       <li><a href="/admin/dashboard">Admin Dashboard</a></li>
       <li><a href="/user/dashboard">User Dashboard</a></li>
       <li><a href="#">Create Digital NoteCard</a></li>
       <li><a href="#">View Digital NoteCard</a></li>

      {/* signout here  */}
        {isAuthenticated() && (
           <li class="logout_op">
             <a href="/">
             <span
             className = "text-warning"
              onClick = {() => {
                signout(()=>{})
              }}
             >
              Signout
             </span>
             </a>
           </li>
        )
        } </ul> </div>); 
      };
};
