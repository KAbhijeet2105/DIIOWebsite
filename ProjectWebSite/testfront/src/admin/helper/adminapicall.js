
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
 
//update profile 


export const updateProfile = async (profileId,userId,token,profile) => {

    try {
        const response = await fetch(`${API}/profile/${profileId}/${userId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: profile
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};