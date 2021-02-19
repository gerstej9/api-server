'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  type: {type: String, required: true},
  cuisine: {type: String, required: true}
});

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;

