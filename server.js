
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const url = "mongodb+srv://sharm591:Db123@cluster0.fk4uxse.mongodb.net/";
mongoose.set("strictQuery", true);

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });



app.use(require("./router/cO2"));
app.use(require("./model/partTimeEmployee"));



app.listen(2023, () => {
  console.log("Port 2023");
});