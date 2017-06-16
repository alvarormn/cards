'use strict'

var Cards = require('../models/cards');

function createCards(req, res) {
  var newCard = new Cards();
  var court = ['Jack','Queen','King'];
  var num = [1,2,3,4,5,6,7,8,9,10];
  var suit = ['diamonds','club','spade','hearts'];
  var baraja = [];

  for (var i = 0; i < suit.length; i++) {

    newCard.suit = suit[i];
    for (var x = 0; x < num.length; x++) {
      newCard.num = num[x];
      newCard.court = null;
      console.log(newCard);

      addCards(newCard);

      if (x == num.length - 1) {
        for (var y = 0; y < court.length; y++) {
          newCard.court = court[y];
          newCard.num = null;
          console.log(newCard);

          addCards(newCard);

        }
      }
    }
  }
}

function addCards(newCard) {
  newCard.save((err, cardStored) => {
    if (err) {
      console.log('Error al añadir' + err);
    };
    if (!cardStored) {
      console.log('No se ha añadido una carta');
    }
    if (cardStored) {
      console.log(cardStored);
    }
  });
}

module.exports = {createCards};
