const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const fileUploadRouter = require('./routes/fileUploadRouter');
const app = express();//common code, if we use mongo db
require("dotenv").config();

const PORT = process.env.PORT || 8070; //8070 0r available port address will be assigned.

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{      //create a connection with db.
  
});

const connection = mongoose.connection;     //open the connection that we created.
connection.once("open",() => {
    console.log("Mongodb Connection success!");
})

const registerRouter = require("./routes/register.js"); //import routerfile
app.use("/register",registerRouter);

app.use('/api', fileUploadRouter);

app.listen(PORT, () => {
    console.log('Server is up and running on port number: ${PORT}')
})