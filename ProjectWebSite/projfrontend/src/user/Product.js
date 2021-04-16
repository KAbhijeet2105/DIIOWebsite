import React,{useState, useEffect} from "react";
import "../styles.css";
import { NavBar } from "../core/NavBar";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { API } from "../backend";
import { getprofilebyMailId, getProductByUsrMailId, deleteProduct } from '../admin/helper/adminapicall';



// import required files ...

//show users profile here ..

export default function UserProducts() {

    // get  basic user data
    
    const {
      user:{ _id,user_name,email}
    } = isAuthenticated();
    
    //preload data and stuff
    
    const [products,setProducts] =  useState([]);
    
    
    
    //TODO: if form data wont work then try to use preload data
    
    
    
    const preload =(email)=>{
      

     getProductByUsrMailId(email).then(data => {
         if(data.error)
         {
             console.log(data.error);
         }
         else{
             setProducts(data);
             console.log(data);

         }
     });

    };
    
    useEffect(()=>{
      preload(email);
    },[]);
    
    //product deletion done here

const deleteThisProduct = productId => {

    deleteProduct(productId).then(data => {
        if(data.error)
        {
            console.log("error : "+data.error)
        }
        else
        {
            preload(email);
        }
    });
    
}

    
    
    
        return(
              <div>
                
               
                 <div className="container bg-white">
           <div className="jumbotron bg-white text-dark center">
             <h4 className="display-4 "> Products</h4>
            
          
     
          
        
            </div>

{/* ***************************************************** */}
              {/*here you have to show users product   */}
              <div class="row"> 
     <div class="col s12 m4">
{/* IMPORTANT */}
{/* iterating through products and showing it on profile screen ............... */}

       {products.map((product,index) => {

// cards iterating

return(

<div key={index} class="card sticky-action">
<div class="card-image waves-effect waves-block waves-light">
  <img src="https://www.nicepng.com/png/detail/304-3048415_business-advice-product-icon-png.png"/>
  {/* <span class="card-title grey-text text-darken-4">Card Title</span> */}
</div>

<div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{product.prodTitle}<i class="material-icons right">more_vert</i></span>

        {/* <p><a href="#!">This is a link</a></p> */}
        <p><span className="badge badge-success text-white left">buy now {product.prodLink}</span></p>

      </div>


      <div class="card-action">

     {isAuthenticated() &&  <Link to={`/user/manageproduct/${product._id}`}> <span className="badge badge-warning text-white left">Update </span></Link>}
    
     {isAuthenticated()&&
     <a href=""> <span onClick ={ ()=>{
          deleteThisProduct(product._id)
      } } className="badge badge-danger text-white left"> Remove  </span>  
      </a>}
     {/* <i class="material-icons postfix">delete</i>  */}
        {/* <a href="#">This is a link</a>
        <a href="#">This is a link</a> */}
      </div>

      <div class="card-reveal" >
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>

            {product.prodDesc}
        </p>
      </div>

</div>
);



//card iterationg done
       })
       }



    </div> 
  </div>


    
    {/* end showing form */}




             </div>
     
    
     
           </div>
    
    
    
            
        );
    };
    








{/* new card  template */}
{/* 
<div class="col s12 m7">
            <div class="card sticky-action">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="https://www.nicepng.com/png/detail/304-3048415_business-advice-product-icon-png.png"/>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>

                <p><a href="#!">This is a link</a></p>
              </div>

              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>

              <div class="card-reveal" >
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>

 */}
