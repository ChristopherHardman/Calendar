'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: String,
  date: Date,
  venue: String
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;
