const mongoose = require("mongoose");
const { isString } = require("util");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  eventImageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDateTime: {
    type: Date,
    required: true,
  },
  endDateTime: {
    type: Date,
    required: true,
  },
  isOnline: {
    type: Boolean,
    default: false,
    required: true,
  },
  eventTags: [
    {
      type: String,
      required: true,
    },
  ],
  isShareable: {
    type: Boolean,
    default: false,
  },
  dressCode: {
    type: String,
    enum: ["Smart Casual"],
    default: "Smart Casual",
  },
  ageRestriction: {
    type: String,
    enum: ["18 and above"],
    default: "18 and above",
  },
  attendeeCount: {
    type: Number,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
  cost: {
    type: Number,
  },
  location: {
    type: String, // Corrected typo from 'typr' to 'type'
    required: true,
  },
  organization: {
    orgName: {
      type: String,
      required: true,
    },
    orgImageUrl: {
      type: String, // Corrected type to 'String'
      required: true,
    },
    hosts: [
      {
        hostName: {
          type: String,
          required: true,
        },
        hostImageUrl: {
          type: String,
          required: true,
        },
        position: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
