//import libraries
const express = require("express");
const mongoose = require('./configs/mongoose');

const app = express();

//defining port
var port = process.env.PORT || 8000;

app.use(express.urlencoded());

//setting the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router
app.use('/', require('./routers'));

//start server
app.listen(port, function(error){
    if(error)
        console.log("Error in starting server : ",error);
    else
        console.log("Server is running on Port : ",port);
});