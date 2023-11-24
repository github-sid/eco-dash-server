const express = require("express");
var cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();

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

const greenHouseRouter = require("./router/greenHouse");
const ourPeopleRouter = require("./router/ourPeople");
const waterRouter = require("./router/water");

// Middleware
app.use(express.json()); // Enable JSON parsing middleware
app.use(cors());

// Use routers
app.use("/greenhouse", greenHouseRouter);
app.use("/our-people", ourPeopleRouter);
app.use("/water", waterRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
// app.use(require("./router/greenHouse"));
// app.use(require("./router/ourPeople"));
// app.use(require("./router/water"));

app.listen(2023, () => {
  console.log("Port 2023");
});
