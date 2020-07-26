//importing library
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pizza-orders");

const db = mongoose.connection;
db.on("Error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to database using mongoose!!");
});