const express = require("express");
const router = express.Router();
const Event = require("../models/events.models");

// add event
router.post("/events", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res
      .status(200)
      .send({ message: "Event added successfully", event: newEvent });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// get events
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    if (events) {
      res.status(200).send(events);
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// get event by id
router.get("/events/:eventId", async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const event = await Event.findById(eventId);
    if (event) {
      res.status(200).send(event);
    } else {
      res.status(404).send({ error: "Event not found." });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
