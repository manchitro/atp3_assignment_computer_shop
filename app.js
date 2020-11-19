const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get("/", (req, res) => {
  res.render("customer/index");
});

//server startup
app.listen(5000, (error) => {
  console.log("express server started at 5000...");
});
