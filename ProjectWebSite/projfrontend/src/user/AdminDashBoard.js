import React from "react";
import "../styles.css";
import { NavBar } from "../core/NavBar";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getAllProfiles } from "../admin/helper/adminapicall";
//import Menu from "./Menu";

export default function AdminDashBoard() {

  const {
     user:{ user_name,email,role}
  } = isAuthenticated();

  // const {
  //   profile: {
  //       name,
  //        uemail,
  //        whatsAppNumber,
  //        mobileNumber,
  //        address,
  //        location,
  //         IG:,
  //        FB,
  //         YT,
  //         LI,
  //        WEB
  //      },

  // } =get


  console.log(getAllProfiles());

  return (
    

    <div>
     
    <NavBar />

    <div className="container bg-white">
      <div className="jumbotron bg-white text-dark center">
        <h2 className="display-4 ">Dashboard</h2>
       

        <div class="d-flex justify-content-center">
       <span className="badge badge-success text-white  ">Welcome: {user_name} </span> 
       
       <br/><br/>
       
     
       </div>

       <div class="d-flex justify-content-center">
       
       <span className="badge badge-success text-white ">Email: {email} </span> 
     
       </div>

        </div>

        {/* dashboard data end here unaem and mail id */}


        <div className="jumbotron bg-white text-dark text-center">

            {/* dash grid top cards */}

              <div class="container card-group">
                    <div class="row">
                    <div class="col">         
                <div className="card border-primary ">
               {/* <div className="card-header bg-transparent border-success">Header</div> */}
               <div className="card-body text-primary">
                <h6 className="card-title">Profile Shared</h6>
                   <h3>360</h3>
                   </div>
                      </div>
                  {/*card span end here */}
                        </div>
                      <div class="col">
                       <div className="card border-success ">
                  {/* <div className="card-header bg-transparent border-success">Header</div> */}
                <div className="card-body text-success">
                   <h6 className="card-title">Profile Shared by other users </h6>
                    <h4>360</h4>
                       </div>
                        </div>
                  {/*card span end here */}

                    </div>
                    <div class="col">
                      <Link to= "/user/profile" style={{ textDecoration: 'none' }}>
                  <div className="card border-warning " >
                  {/* <div className="card-header bg-transparent border-success">Header</div> */}
              <div className="card-body text-warning">
                  <h6 className="card-title">My Profile</h6>
                  <h3>{'>'}</h3>
                     </div>
                      </div>
                  {/*card span end here */}
                  </Link>
                                    </div>
                            </div>     
                    </div>
                  {/* dash grid end here */}


                  {/* search bar */}

<div class="container">
          
            <form>
                <input type="text" id="filter" placeholder="Search for..."  />
            </form>
            {/* <div>
                {onChange={this.handleInputChange}
                    this.state.responseData.map((i) =>
                        <p>{i.name}</p>
                    )
                }
            </div> */}
        </div>
          </div>

      </div>
    </div> );
}
