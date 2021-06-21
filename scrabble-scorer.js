// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let word='';
let pointValue="";

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

let letterPoints = 0;

function oldScrabbleScorer(word) {
	word=word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }

	  }
	} console.log(letterPoints);
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  word=input.question("Let's play some scrabble! Enter a word to score:");
};


function simpleScore(word){
  word=word.toUpperCase();
  let onePointScore=0;
  
for (i=0; i<word.length; i++) {
onePointScore += 1; 
console.log(`'${word[i]}' is worth 1 point`); } 
return onePointScore[word[i]];
} 

let vowelScore = {
  3: ['A', 'E', 'I', 'O', 'U'],
  1: ['D', 'G','B','C', 'M', 'P', 'L', 'N', 'R','S', 'T', 'F', 'H', 'V', 'W', 'Y','K','J', 'X','Q', 'Z']
};


function vowelBonusScore(word) {
word=word.toUpperCase();
for (i=0; i < word.length; i++) {
  for (let vowelScore in vowelBonusScore){
    let vowelScore=0;
if (word[i].includes('A', 'E', 'I', 'O', 'U')) {
vowelScore+=3; }
else if (!word[i].includes('A', 'E', 'I', 'O', 'U')) {
vowelScore += 1
  }
  
}
console.log(`'${word[i]}' is worth ${word.length[i]} points`);}
};

let scrabbleScore="";

let oldScrabbleScoreOption = {
  name: "Scrabble Scoring",
  description: "The traditional scoring algorithm.",
  scorerFunction: oldScrabbleScorer(word, oldPointStructure)
};

let simpleScoreOption = {
  name: "Simple Scoring",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScore(word)
};

let vowelBonusScoreOption = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction: vowelBonusScore(word, vowelScore)
};

const scoringAlgorithms = [simpleScoreOption, vowelBonusScoreOption, oldScrabbleScoreOption];

let userSelection;
function scorerPrompt(userSelection) {
userSelection=input.question(`Which scoring algorithm would you like to use?

0 - Simple: One point per character
1 - Vowel Bonus: Vowels are worth 3 points
2 - Scrabble: Uses scrabble point system
Enter 0, 1, or 2:`);

if (userSelection[i] === 0) {
initialPrompt();
simpleScore(word);
} else if (userSelection[i] === 1) {
  initialPrompt();
  vowelBonusScore(word);
} else {
  initialPrompt();
  oldScrabbleScorer(word);
}
}

let newPointStructure="";

function transform() {
let newPointStructure="";


};




function runProgram() {
scorerPrompt(userSelection);
//initialPrompt(word);
//oldScrabbleScorer(word);
//simpleScore(word);
vowelBonusScore(word);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

