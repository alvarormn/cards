'use sctrict'

var express = require('express');
var userController = require('../controllers/cards');

var api = express.Router();

//api.get('/findUser/:user', userController.findUser);
api.get('/createCards', userController.createCards);


module.exports = api;
