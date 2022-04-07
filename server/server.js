const express = require("express");
const app = express();

// easily access some something  outside of our server form our server.
const cors = require("cors");

// helps us to connect to MongoDB
const mongoose = require("mongoose");

// it loads enviroment variables form a .env file into process.env
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors()); // cors middleware
app.use(express.json()); // For parsing JSON

// Connection to DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established Successfully!");
}); // once Connection is oppened -> log ...

app.get("/", (req, res) => res.send("Hello Coachync!"));

// Starts the server by start to Listning on a certain port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
