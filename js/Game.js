/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


//constructor initializing Game class properties
class Game  {
    constructor () {
    this.missed = 0;
    this.phrases = [
    ('More to come'),
    ('Team work makes the dream work'),
    ('You wont break my soul'),
    ('It is what it is'),
    ('early bird gets the worm')
    ];
    this.activePhrase = null;
    
    }

    
//Creates selection of a random phrase 
getRandomPhrase(){
    let randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];    
    };



//Begins game by selecting a random phrase & displaying it to the user
startGame() {
    const ScreenOverlay = document.querySelector('#overlay');
    ScreenOverlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }



//removes a life if guess is wrong.
removeLife() {
    let lives = document.querySelectorAll('img');
    if (this.missed < 4) {
        lives[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
    } else {
        this.gameOver(false);
    }

}
//checks if all letters in the active phrase have been revealed.
checkForWin() {
    let hideLetters = document.querySelectorAll('.hide');
    if (hideLetters.length === 0) {
        return true;
    } else {
        return false;
    }
}



//Updates original start screen overlay depending on game outcome
gameOver(gameWon) {
        const screenOverlay = document.querySelector("#overlay");
        const message = document.querySelector("#game-over-message");
    
        if (gameWon) {
          screenOverlay.style.display = "";
          screenOverlay.className = "win";
          message.innerHTML = "You did it!";
        } else {
          screenOverlay.style.display = "";
          screenOverlay.className = "lose";
          message.innerHTML = "Better luck next time!";
        }
      }


handleInteraction(button) {
       
    button.disabled = true;
    if (this.activePhrase.checkLetter(button.innerHTML)) {
    this.activePhrase.showMatchedLetter(button.innerHTML);
    button.classList.add('chosen');
        if(this.checkForWin() === true) {
            this.gameOver(true);
        };
        } else {            
            button.classList.add('wrong');
           
            this.removeLife();
        }       
    };   

    
resetGame() {
    let removeLi = document.querySelector('#phrase ul');
        removeLi.innerHTML = '';
    let keyboard = document.querySelectorAll('.key');
        keyboard.forEach(button => {
        button.disabled = false;
        button.classList.add('key');
        button.classList.remove('chosen')
        button.classList.remove('wrong') 
        })

   
    let resetHearts = document.querySelectorAll('img');
        resetHearts.forEach(pic => {
            pic.src = 'images/liveHeart.png';
        })
    };
    
}