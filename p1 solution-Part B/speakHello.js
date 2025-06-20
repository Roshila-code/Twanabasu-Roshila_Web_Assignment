(function (window) {
  // Step 1: 10 ways to say "Hello"
  var greetings = ["Hello", "Hola", "Bonjour", "Ciao", "Hallo", "Olá", "Hej", "Salam", "Namaste", "Konnichiwa"];

  // Step 2: Create helloSpeaker object
  var helloSpeaker = {};

  // Step 3: Add speak function to helloSpeaker
  helloSpeaker.speak = function (name) {
    for (var i = 0; i < greetings.length; i++) {
      console.log(greetings[i] + " " + name);
    }
  };

  // Step 4: Make helloSpeaker available globally
  window.helloSpeaker = helloSpeaker;
})(window);