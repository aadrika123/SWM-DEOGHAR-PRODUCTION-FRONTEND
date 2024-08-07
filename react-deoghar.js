// successfull react serve working code for react
const path = require("path");
const express = require("express");
const app = express(); // create express app

console.log('before hitt')
//home route will redirect to the citizen-pannel route
app.get("/", (req, res) => {
  console.log('home route hitted')
  res.redirect('/swm')
});

//middleware to server static files also
app.use(express.static("swm_build"));
app.use(express.static("deoghar_app_build"));


//actual routes
app.get("/swm", (req, res) => {
  res.sendFile(path.join(__dirname, "swm_build", "index.html"));
});
app.get("/swm/*", (req, res) => {
  res.sendFile(path.join(__dirname, "swm_build", "index.html"));
});
app.get("/deoghar-app", (req, res) => {
  res.sendFile(path.join(__dirname, "deoghar_app_build", "index.html"));
});
app.get("/deoghar-app/*", (req, res) => {
  res.sendFile(path.join(__dirname, "deoghar_app_build", "index.html"));
});

// start express server on port 80
app.listen(600, () => {
  console.log("server starting on port 500");
});
