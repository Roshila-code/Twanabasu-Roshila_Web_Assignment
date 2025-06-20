(function () {
  var names = ["Java", "Steve", "JS", "python", "Sarah", "john", "Alice", "Smith", "jack", "Sun"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    var secondLetter = names[i].charAt(1).toLowerCase();

    if (firstLetter === 'j' && secondLetter === 's') {
      goodbyeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();