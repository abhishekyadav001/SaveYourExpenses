const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;
app.use(cors({ origin: "*" }));
app.use(express.json());

// app.use("/users");

app.get("/", (req, res) => {
  res.send("Hello This is Home Page");
});

app.listen(port, async () => {
  try {
    // await connection();
    // console.log("db connected");
    console.log("listeneing port", port);
  } catch (error) {
    console.log(error.message);
  }
});
