//importing library
const mongoose = require("mongoose");

var url = process.env.MONGODB_URI || "mongodb://localhost/pizza-orders";

mongoose.connect(url);

const db = mongoose.connection;
db.on("Error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to database using mongoose!!");
});