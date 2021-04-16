import React,{useState, useEffect} from "react";
import "../styles.css";
import { NavBar } from "../core/NavBar";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getprofilebyMailId } from '../admin/helper/adminapicall';
import UserProducts from './Product';



//show users profile here ..

export default function UserProfile() {

// get  basic user data

const {
  user:{ _id,user_name,email}
} = isAuthenticated();

//preload data and stuff

const [values,setValues] =  useState({

  name:user_name,
    uemail:email,
    whatsAppNumber:"",
    mobileNumber:"",
      address:"",
      
      // coverImg:"",
    
      // profileImg:"",
  //  removed product need to make seprate pages
 location:"",
       IG:"",
       FB:"",
       YT:"",
       LI:"",
       WEB:"",
       
       error:"",
     
});



//TODO: if form data wont work then try to use preload data

const {prof_id,name, uemail,whatsAppNumber,mobileNumber,address,location,IG,FB,YT,LI,WEB, error}= values;


const preload =(email)=>{
  
  getprofilebyMailId(email).then(data => {

    if(data.error)
    {
      setValues({...values,error:data.error})
    }
    else{

      //setValues(data)
      setValues({...values,
        prof_id:data.profile._id,
      whatsAppNumber:data.profile.whatsAppNumber,
      mobileNumber:data.profile.mobileNumber,
      address:data.profile.address,
      location:data.profile.location,
      IG:data.profile.IG,
      FB:data.profile.FB,
      YT:data.profile.YT,
      LI:data.profile.LI,
      WEB:data.profile.WEB,
      
       });



    }

  });





};

useEffect(()=>{
  preload(email);
},[]);





    return(
          <div>
             <NavBar />
           
             <div className="container bg-white">
       <div className="jumbotron bg-white text-dark center">
         <h2 className="display-4 ">My Profile</h2>
        
         <div class="d-flex justify-content-left">
        
     {isAuthenticated() && <a href="/user/createprofile"><span className="badge badge-success text-white left">Create Profile </span></a>}    
        <br/><br/>        
        </div>

        <div class="d-flex justify-content-left">
        
       {isAuthenticated() && <Link to={`/user/manageprofile/${prof_id}`}><span className="badge badge-success text-white left">Edit and Update Profile  </span></Link>}
         
        <br/><br/>        
        </div>
        <div class="d-flex justify-content-left">
        
        {isAuthenticated() && <a href="/user/createproduct"><span className="badge badge-success text-white left">Create Product </span></a>}    
           <br/><br/>        
           </div>
      
    
        </div>
          {/*here you have to show users profile   */}

{/* start showing form */}

<div class="row container">
    <form class="col s12">
      <div class="row">
        {/* user name */}
        <div class="input-field col s6 ">
          <input disabled    id="name" type="text"   value={user_name}/>
          <label  class="active" for="name">User Name</label>
        </div>
        {/* email id */}
        <div class="input-field col s6 ">
          <input disabled id="uemail" type="email"   value={email}/>
          <label  class="active" for="uemail">Email</label>
        </div>
      </div>
      {/* whatsapp no */}
      <div class="row">
        <div class="input-field col s6 ">
        <i class="material-icons prefix">phone</i>
          <input disabled id="whatsAppNumber"  value={whatsAppNumber} />
          <label class="active" for="whatsAppNumber">Whatsapp Number</label>
        </div>
      
      {/* mobile number */}
      
        <div class="input-field col s6">
        <i class="material-icons prefix ">phone</i>
          <input disabled type="tel"  id="mobileNumber"  value={mobileNumber} />
          <label class="active" for="mobileNumber">Mobile Number</label>
        </div>
      </div>


 {/* address  */}
      <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">add_location</i>
          <textarea disabled class="materialize-textarea "  id="address" type="text"  value={address} />
          <label class="active" for="address">Address</label>
        </div>
      </div>
      

{/* cover image */}
  {/* profile image  */}



{/* location */}
<div class="row">
        <div class="input-field col s12 ">
        <i class="material-icons prefix">add_business</i>
          <input disabled  id="location" type="text"  value={location}/>
          <label class="active" for="location">Your Business Location</label>
        </div>
    </div>


 {/* Integrate products here */}

 
 <UserProducts/>



{/* IG */}

<div class="row">
        <div class="input-field col s12 ">
        <i class="material-icons prefix">switch_account</i>
          <input disabled  id="IG" type="text"  value={IG} />
          <label class="active" for="IG">Your Instagram Account</label>
        </div>
    </div>
{/* FB */}
<div class="row">
        <div class="input-field col s12 ">
        <i class="material-icons prefix">facebook</i>
          <input  disabled id="FB" type="text"  value={FB} />
          <label class="active" for="FB">Your Facebook Account</label>
        </div>
    </div>

{/* YT */}
<div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">live_tv</i>
          <input disabled id="YT" type="text" value={YT} />
          <label class="active" for="YT">Your Youtube Channel</label>
        </div>
    </div>

{/* LI */}
<div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">linkedin</i>
          <input disabled  id="LI" type="text"   value={LI} />
          <label class="active" for="LI">Your LinkedIn profile</label>
        </div>
    </div>

{/* WEB */}
<div class="row">
        <div className="input-field col s12">
        <i class="material-icons prefix">cloud</i>
          <input  disabled id="WEB" type="text"   value={WEB} />
          <label class="active" htmlFor="WEB">Your Website/Blog</label>
        </div>
    </div>



      {/* submit button */}
      {/* row new line field */}
      <div class="row">
        <div className="col s12 center">
         {/* add txt field here */}
          
      {/* {successMessage()}
      {errorMessage()}
 */}

<p className="text-black text-center">{JSON.stringify(values)}</p>
            

        </div>
      </div>

    </form>
  </div>

{/* end showing form */}
         </div>
 

 
       </div>



        
    );
};

