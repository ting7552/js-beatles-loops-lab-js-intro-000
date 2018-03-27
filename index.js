const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musician, instrument) {
var array = [];
 for (var i = 0; i < musicians.length; i++) {
   array.push(musicians[i] + " plays " + instruments[i]);
}
 return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var i = 0;
    while (i < facts.length) {
       facts[i] += "!!!";
     i++;
    }
    return(facts);
  }



  function iLoveTheBeatles (x) {
  var myArray = [];
  var i = 0;
   do {
      myArray.push('I love the Beatles!');
      i++;
  } while (i <= x && x < 15);
  return myArray;
}
