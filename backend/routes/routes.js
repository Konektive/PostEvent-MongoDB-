// const { response } = require("express");
const express = require("express");
const router = express.Router();
const registerEventTemplateCopy = require("../models/registerEventModel");

router.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const date = req.body.date;

  const newEvent = new registerEventTemplateCopy({
    firstName,
    lastName,
    email,
    date,
  });
  newEvent.save();
});

module.exports = router;
