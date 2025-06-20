(function (window) {
  var farewell = ["Goodbye", "Adiós", "Au revoir", "Ciao", "Tschüss", "Adeus", "Hejdå", "Khuda Hafiz", "Namaste", "Sayonara"];

  var goodbyeSpeaker = {};
  goodbyeSpeaker.speak = function (name) {
    for (var i = 0; i < farewell.length; i++) {
      console.log(farewell[i] + " " + name);
    }
  };

  window.goodbyeSpeaker = goodbyeSpeaker;
})(window);