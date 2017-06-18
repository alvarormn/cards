'use strict'

var Cards = require('../models/cards');

function createCards(req, res) {

  var court = ['Jack','Queen','King'];
  var num = [1,2,3,4,5,6,7,8,9,10];
  var suit = ['diamonds','club','spade','hearts'];

  for (var i = 0; i < suit.length; i++) {
    for (var x = 0; x < num.length; x++) {
      var newCard = new Cards();
      newCard.suit = suit[i];
      newCard.num = num[x];
      newCard.court = null;

      addCards(newCard);

      if (x == num.length - 1) {
        for (var y = 0; y < court.length; y++) {
          var newCard = new Cards();
          newCard.suit = suit[i];
          newCard.court = court[y];
          newCard.num = null;

          addCards(newCard);

        }
      }
    }
  }
  res.status(200).send('Baraja creada correctamente');
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
      if (cardStored.num) {
        console.log('el ' + cardStored.num + ' de ' + cardStored.suit + ' ha sido añadido');
      }
      if (cardStored.court) {
        console.log('el ' + cardStored.court + ' de ' + cardStored.suit + ' ha sido añadido');
      }

      //return cardStored;
    }
  });
}

module.exports = {createCards};
