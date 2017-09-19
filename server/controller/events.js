const Event = require('../model/event');
const mongoose = require('mongoose'); //

const createEvent = async (req, res) => {
  const title = req.body.title;
  const newEvent = Event({
    title: req.body.title,
    date: req.body.date,
    venue: req.body.venue
  });
  await newEvent.save();
  res.send(newEvent);
}

const getEvents = async (req, res) => {
  res.send(await Event.find());
}

module.exports = {createEvent, getEvents}; //
