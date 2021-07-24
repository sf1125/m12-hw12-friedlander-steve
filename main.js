

//array

  var phrase = [
    "Hello there", 
    "How are you today?",
    "Its sunny today",
    "Hurricane season is here",
    "Would you like some coffee?",
    "The semester is almost over",
    "What is your favorite food?",
    "I really miss NY pizza",
    "The summer is very hot in Florida",
    "Turn up the A.C., please" 
  ];
    
document.getElementById("demo").innerHTML = phrase[0];

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
//   //var arr = [2, 11, 37, 42];
//   shuffle(arr);
//   console.log(arr);

function myFunction() {
phrase = shuffle(phrase);
document.getElementById("demo").innerHTML = phrase[1];
}