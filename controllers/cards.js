'use strict'

var Cards = require('../models/cards');

function createCards(req, res) {
  var newCard = new Cards();
  var court = ['Jack','Queen','King'];
  var num = [1,2,3,4,5,6,7,8,9,10];
  var suit = ['diamonds','club','spade','hearts'];

  for (var i = 0; i < suit.length; i++) {
    console.log('bucle 1');
    newCard.suit = suit[i];
    for (var x = 0; x < num.length; x++) {
      console.log('bucle 2');
      newCard.num = num[x];
      newCard.court = null;
      //console.log(newCard);

      addCards(newCard).then(function(){
        console.log(newCard);
      });

      if (x == num.length - 1) {
        for (var y = 0; y < court.length; y++) {
          console.log('bucle 3');
          newCard.court = court[y];
          newCard.num = null;
          //console.log(newCard);

          //addCards(newCard);
          addCards(newCard).then(function(){
            console.log(newCard);
          });

        }
      }
    }
  }
}

function addCards(newCard) {
  var promise = new promise(function(resolve, reject) {
    setTimeout(function() {
      newCard.save((err, cardStored) => {
        console.log(newCard);
        if (err) {
          console.log('Error al añadir' + err);
        };
        if (!cardStored) {
          console.log('No se ha añadido una carta');
        }
        if (cardStored) {
          console.log('Exito');
          resolve(cardStored);
        }
      });
    }, 1000);
  })
  return promise;
}



/*function addCards(newCard) {
  newCard.save((err, cardStored) => {
    console.log(newCard);
    if (err) {
      console.log('Error al añadir' + err);
    };
    if (!cardStored) {
      console.log('No se ha añadido una carta');
    }
    if (cardStored) {
      console.log('Exito');;
    }
  });
}*/

module.exports = {createCards};
