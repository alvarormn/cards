'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = Schema({
  suit: String,
  num: Number,
  court: String
});

module.exports = mongoose.model('Cards', cardSchema);
