import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Base from "./core/Base";
import Home from "./core/Home";
import Dashboard from "../src/views/Dashboard";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";



//import Dashboard from "../views/Dashboard.js";
// import Icons from "views/Icons.js";
// import Map from "views/Map.js";
// import Notifications from "views/Notifications.js";
// import Rtl from "views/Rtl.js";
// import TableList from "views/TableList.js";
// import Typography from "views/Typography.js";
// import UserProfile from "views/UserProfile.js";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/base" exact component={Base} />
        <Route path="/user/signup" exact component={Signup} />
        <Route path="/user/signin" exact component={Signin} />
        <Route path="/admin/dashboard" exact component={AdminDashBoard} />
        <Route path="/user/dashboard" exact component={UserDashBoard} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
