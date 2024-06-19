const express = require("express");
const router = express.Router();
const Event = require("../models/events.models");

router.get("/events", (req, res) => {
  res.send("Event Routes Page");
});

module.exports = router;
