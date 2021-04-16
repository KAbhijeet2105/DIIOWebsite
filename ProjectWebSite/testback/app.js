require('dotenv').config()//environment variable importing

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");



//Connecting to the database
mongoose.connect(process.env.DATABASE,
{ useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
}).then(()=> {
    console.log("Database connected!!")
});

//Middlewares part here
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());




//My Routes importing 
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const productRoutes = require("./routes/product");




//My Routes

app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",profileRoutes);
app.use("/api",productRoutes);


// getting the  port
const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`our app is running on ${port}`);
})
