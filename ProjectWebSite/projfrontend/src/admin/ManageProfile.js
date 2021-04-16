import React,{useState,useEffect} from "react";
import "../styles.css";
import { NavBar } from "../core/NavBar";
import { Redirect } from "react-router";
import { isAuthenticated } from "../auth/helper";
import {  updateProfile } from "./helper/adminapicall";
import { getprofilebyMailId } from '../admin/helper/adminapicall';



export default function ManageProfile({match}) {



//getting current user for user name and mail id to avoid conflicts

const {token} = isAuthenticated();

const {
  user:{ _id,user_name,email}
} = isAuthenticated();


const [values,setValues] =  useState({
  
name:user_name,
  uemail:email,
  whatsAppNumber:"",
  mobileNumber:"",
    address:"",
    
    coverImg:"",
  
    profileImg:"",
//  removed product need to make seprate pages
location:"",
     IG:"",
     FB:"",
     YT:"",
     LI:"",
     WEB:"",
     loading:false,
     error:"",
     createdProfile:"",
     getaRedirect:false,
    //  formData :""
    //  form data maybe FormData
});



//TODO: if form data wont work then try to use preload data

// const {name, uemail,whatsAppNumber,mobileNumber,address,coverImg,profileImg,location,IG,FB,YT,LI,WEB,loading, error,createdProfile,getaRedirect,formData}= values;
const {prof_id,name, uemail,whatsAppNumber,mobileNumber,address,coverImg,profileImg,location,IG,FB,YT,LI,WEB,loading, error,createdProfile,getaRedirect}= values;



const preload =(email)=>{

  getprofilebyMailId(email).then(data => {
     if(data.error)
     {
      setValues({...values,error:data.error})
     }
     else{
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




const handleChange = name => event => {
  
  setValues({...values,error:false,[name]:event.target.value});

  
};



 //popup messsage

 const successMessage = () => {
  return(
    <div className="row">
    <div className="col-md-6 offset-sm-3 text-left">
<div className = "alert alert-success"
  style={{display:loading ? performRedirectOnCreateProfile() : "none"}}>
  {/* <Redirect to="/admin/dashboard" />; */}
   {/* {createdProfile} New profile created successfully! */}
    {/* <Link to="/user/Signin"> Please login here </Link> !! */}
  </div>
  </div>
  </div>);

};

const performRedirectOnCreateProfile = () => {

  alert(" profile updated successfully!!")
  {window.location.href="/user/profile"}
};


const errorMessage = () => {
  return(
    <div className="row">
   <div className="col-md-6 offset-sm-3 text-left">
  <div className = "alert alert-danger"
    style={{display:loading ? "": "none"}}>
       {error} unable to update profile  !!
    </div>
    
    </div>
    </div>
    );

 };




//TODO: write update profile method



const onSubmit = (event) => {

  event.preventDefault();
 setValues({...values, error:false,loading:true,getaRedirect:true})

 updateProfile(email,values)
 .then(data => {
   if(data.error){
     setValues({...values,error:data.error});
   }
   else{
      setValues({...values,
      //  name:user_name,
      //  uemail:email,
      //  whatsAppNumber:"",
      //  mobileNumber:"",
      //  address:"",
      //  coverImg:"",
      //  profileImg:"",
      //  location:"",
      //  IG:"",
      //  FB:"",
      //  YT:"",
      //  LI:"",
      //  WEB:"",
       loading:false,
       error:"",
      //  createdProfile:"",
      //   getaRedirect:false,
       // formData:""
       
     });

   }
 })
 .catch(error => {
    console.log(error)
 })
 // console.log(formData)
 

}






// submit method end here ..........

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

        
 
      {/* inside main container aligned with upper body  */}
      
        </div>

{/* dessign updation form here */}

          {successMessage()}
         {errorMessage()}

{/* stat updation form  */}



<div class="row container">
    <form class="col s12">
      <div class="row">
        {/* user name */}
        <div class="input-field col s6 ">
          <input disabled    id="name" type="text"   value={name}/>
          <label class="active" for="name">User Name</label>
        </div>
        {/* email id */}
        <div class="input-field col s6 ">
          <input disabled id="uemail" type="email"   value={uemail}/>
          <label class="active" for="uemail">Email</label>
        </div>
      </div>
      {/* whatsapp no */}
      <div class="row">
        <div class="input-field col s6 ">
        <i class="material-icons prefix">phone</i>
          <input onChange={handleChange("whatsAppNumber")} type="tel" id="whatsAppNumber"  value={whatsAppNumber} class="validate "/>
          <label class="active" for="whatsAppNumber">Whatsapp Number</label>
        </div>
      
      {/* mobile number */}
      
        <div class="input-field col s6">
        <i class="material-icons prefix ">phone</i>
          <input onChange={handleChange("mobileNumber")} type="tel"  id="mobileNumber"  value={mobileNumber} class="validate "/>
          <label class="active" for="mobileNumber">Mobile Number</label>
        </div>
      </div>


 {/* address  */}
      <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">add_location</i>
          <textarea class="materialize-textarea " onChange={handleChange("address")} id="address" type="text"  value={address} />
          <label class="active" for="address">Address</label>
        </div>
      </div>
      
{/* cover image */}
<div class="row">
<div class="file-field input-field col s12 form-group">
      <div class="btn green">
        <span>File</span>
        <input type="file"/>
      </div>
      <div class="file-path-wrapper">
        <input id="coverImg" onChange={handleChange("coverImg")} class="file-path validate " placeholder="cover image" type="text"  value={coverImg}/>
      </div>
    </div>
 </div>

  {/* profile image  */}

  <div class="row">
<div class="file-field input-field col s12 ">
      <div class="btn green">
        <span>File</span>
        <input type="file"/>
      </div>
      <div class="file-path-wrapper">
        <input id="profileImg" onChange={handleChange("profileImg")} class="file-path validate " placeholder="profilel image" type="text"  value={profileImg}/>
      </div>
    </div>
 </div>

{/* location */}
<div class="row">
        <div class="input-field col s12 ">
        <i class="material-icons prefix">add_business</i>
          <input  onChange={handleChange("location")} id="location" type="text" class="validate" value={location}/>
          <label class="active" for="location">Your Business Location</label>
        </div>
    </div>

{/* IG */}

<div class="row">
        <div class="input-field col s12 ">
        <i class="material-icons prefix">switch_account</i>
          <input onChange={handleChange("IG")}  id="IG" type="text" class="validate "  value={IG} />
          <label class="active" for="IG">Your Instagram Account</label>
        </div>
    </div>
{/* FB */}
<div class="row">
        <div class="input-field col s12 ">
        <i class="material-icons prefix">facebook</i>
          <input  onChange={handleChange("FB")} id="FB" type="text" class="validate "  value={FB} />
          <label class="active" for="FB">Your Facebook Account</label>
        </div>
    </div>

{/* YT */}
<div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">live_tv</i>
          <input onChange={handleChange("YT")}  id="YT" type="text" class="validate" value={YT} />
          <label class="active" for="YT">Your Youtube Channel</label>
        </div>
    </div>

{/* LI */}
<div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">linkedin</i>
          <input onChange={handleChange("LI")}  id="LI" type="text" class="validate"  value={LI} />
          <label class="active" for="LI">Your LinkedIn profile</label>
        </div>
    </div>

{/* WEB */}
<div class="row">
        <div className="input-field col s12">
        <i class="material-icons prefix">cloud</i>
          <input onChange={handleChange("WEB")}  id="WEB" type="text" className="validate"  value={WEB} />
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

           {isAuthenticated() && <a href="/admin/dashboard"> <button onClick={onSubmit}  class="btn green waves-effect waves-light btn-large " type="submit" >Update Profile
              <i class="material-icons right">send</i>
            </button></a>} 

            {/* <p className="text-black text-center">{JSON.stringify(values)}</p> */}
        </div>
      </div>

    </form>
  </div>


{/* updation form end here   */}

 

 {/* inside container  */}
         </div>
 

 {/* outside of the container */}
       </div>



        
    );
};