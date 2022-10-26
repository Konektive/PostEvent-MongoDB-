const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");

dotenv.config();

mongoose.connect(
  "mongodb+srv://brainHub:brainHub@cluster0.r6mkcmy.mongodb.net/usersDB",
  () => {
    console.log("database connected");
  }
);

app.use(express.json());
app.use(cors());

app.use("/", routesUrls);

//different port than react server
app.listen(3001, () => {
  console.log("server is working on port 3001");
});
