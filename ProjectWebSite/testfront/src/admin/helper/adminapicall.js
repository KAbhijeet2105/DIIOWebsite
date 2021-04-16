
import { API } from "../../backend"

//profile calls 
//create profile
export const createProfile = (userId,token,profile) => {
// error my occur here 1
  console.log(profile,JSON.stringify(profile))
    return (fetch(`${API}/profile/createProfile/${userId}`,{
       
        method:"POST",
       
        headers:{
            Accept: 'application/json',
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
         body: JSON.stringify(profile)
    }) .then(response => {
            return response.json()
    }).catch(err => console.log(err))
    );}


//get all profiles

export const getAllProfiles = async () => {

    try {
        const response = await fetch(`${API}/profiles`, {
            method: "GET"
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

//delete a profile 

export const deleteProfile = async (profileId,userId,token) => {

    try {
        const response = await fetch(`${API}/profile/${profileId}/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};


// get profile 

export const getProfile = async profileId => {

    try {
        const response = await fetch(`${API}/profile/${profileId}`, {
            method: "GET"
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};
 
//get profile using user email
export const getprofilebyMailId = async mailId => {

    try {
        const response = await fetch(`${API}/profile/${mailId}`, {
            method: "GET"
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};



//update profile using users mail id 

//working fine check  done  
export const updateProfile = async (mailId,profile) => {

    try {
        //console.log(profile,JSON.stringify(profile))

        const response = await fetch(`${API}/profile/${mailId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type":"application/json",

            },
           
            body: JSON.stringify(profile)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

// product calls ..........

//create product 





export const createProduct = (usrMailId,product) => {
    // error my occur here 1
      console.log(product,JSON.stringify(product))
        return (fetch(`${API}/product/createProduct/${usrMailId}`,{
           
            method:"POST",
           
            headers:{
                Accept: 'application/json',
                "Content-Type":"application/json",
               
            },
             body: JSON.stringify(product)
        }) .then(response => {
                return response.json()
        }).catch(err => console.log(err))
        );}
    

//update produc by producdt id


export const updateProduct = async (prodId,product) => {

    try {
        //console.log(product,JSON.stringify(product))

        const response = await fetch(`${API}/product/${prodId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type":"application/json",
            },
           
            body: JSON.stringify(product)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};




// get products by user email id // integrate in profile page

export const getProductByUsrMailId = async mailId => {

    try {
        const response = await fetch(`${API}/products/${mailId}`, {
            method: "GET"
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

//deleteProduct by product id


export const deleteProduct = async (productId) => {

    try {
        const response = await fetch(`${API}/product/${productId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",

            }
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

//get product by product id


export const getProductById = async prodId => {

    try {
        const response = await fetch(`${API}/product/${prodId}`, {
            method: "GET"
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};