'use strict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  type: {type: String, required: true},
  material: {type: String, required: true}
});

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;
