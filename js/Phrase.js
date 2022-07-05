/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//Constructor creating Phrase Class properties
class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }


//Displays phrase on game board
addPhraseToDisplay() {
    const phraseDisplay = document.querySelector('#phrase ul');
    
        for (let i = 0; i < this.phrase.length; i++) {
          if (this.phrase[i] === ' ') {
            phraseDisplay.innerHTML += `<li class="space"> </li>`;
          } else {
            phraseDisplay.innerHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
          }
        }
      }
    
      
//Checks to see if the letter selected by the player matches a letter in the phrase
checkLetter(letter) {
    if(this.phrase.includes(letter)){
         return true;  
        }else{
        return false; 
        
    }
}
    
    
//Reveals the letters on the board that match the player's selection
//For loop goes through li Element
    showMatchedLetter(letter) {
        const showLetter = document.getElementsByClassName(letter);
        for(let i = 0; i < showLetter.length; i++){
            showLetter[i].className = `show letter ${letter}`
    }
}
}