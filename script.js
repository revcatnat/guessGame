'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// 12. O because no record yet
let highscore = 0;

// 15. TURN REPEATED ORDER INTO A FUNCTION
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number 🤡');
  } else if (guess === secretNumber) {
    displayMessage('CORRECT!🤩');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    // 13. CHECK HIGHSCORE
    if (score > highscore) {
      // careful, refresh page=record gone
      highscore = score;
      // replace the highscore
      // careful in picking cass name, replace the 0 not the label highscore
      document.querySelector('.highscore').textContent = highscore;
    }

    // 14. DRY CODE IMPORTANCE
    // Avoid repeating code so that if a modification needed
    // ---you won't have to replace a code at multiple places
    // REFACTORING: restructuring w/o function change
    // ---------
    // we had 2 potential events, guess < or > compared to secretnum
    // -- so basically, when guess !== secretnumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High📈' : 'Too Low📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game👻');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'darkred';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //code
  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
