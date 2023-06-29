const express = require("express");
const usersModel = require("../model/users.model");
const usersRoute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
usersRoute.post("/", async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const hashPass = await bcrypt.hash(password, 6);
    const phone = await bcrypt.hash(phoneNumber, 7);
    const checkAuth = email.split(".");
    let role = "user";
    console.log(checkAuth);
    if (checkAuth[1] === "expense@gmail") {
      role = "admin";
    }
    const user = await usersModel.create({ name, email, password: hashPass, phoneNumber: phone, role });
    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = usersRoute;
