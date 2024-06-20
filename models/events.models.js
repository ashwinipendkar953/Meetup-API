const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true,
  },
  eventImageUrl: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
    required: true,
  },
  eventStartDateTime: {
    type: Date,
    required: true,
  },
  eventEndDateTime: {
    type: Date,
    required: true,
  },
  eventType: {
    type: String,
    enum: ["Online", "Offline"],
    default: "Online",
  },
  eventTags: [
    {
      type: String,
      required: true,
    },
  ],
  isEventShareable: {
    type: Boolean,
    default: false,
  },
  eventDressCode: {
    type: String,
    enum: ["Smart Casual", "Formal", "Casual", "Business Casual"],
    default: "Smart Casual",
  },
  eventAgeRestriction: {
    type: String,
    enum: ["None", "18 and above"],
    default: "None",
  },
  eventAttendeeCount: {
    type: Number,
  },
  isEventFree: {
    type: Boolean,
    default: false,
  },
  eventCost: {
    type: Number,
  },
  eventAddress: {
    type: String,
    required: true,
  },
  hostedBy: {
    type: String,
    required: true,
  },
  speakers: [
    {
      name: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      designation: {
        type: String,
        required: true,
      },
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
