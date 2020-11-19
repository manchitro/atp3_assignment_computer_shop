const express = require("express");
const signup = require("./controllers/signup");
const login = require("./controllers/login");
const app = express();

app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));

app.use("/login", login);
app.use("/signup", signup);

app.get("/", (req, res) => {
  res.render("customer/index");
});

//server startup
app.listen(5000, (error) => {
  console.log("express server started at 5000...");
});
