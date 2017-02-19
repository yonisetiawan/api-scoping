const getMeals = require('../models/data');
const express = require('express');
const router = express.Router()


router.get('/meals',function(req, res, next) {
  res.send(getMeals.choice())
})

module.exports = router;
