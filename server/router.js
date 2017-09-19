const express = require('express');
const router = express.Router();
const controller = require('./controller/events')

router.post('/', controller.createEvent);
router.get('/', controller.getEvents);

module.exports = router;
