/*console.log(document.querySelector('.message'). textContent);
document.querySelector('.message'). textContent = 'correct secretNumber🎉'
console.log(document.querySelector('.message'). textContent); 
document.querySelector('.
 textContent = 13;
)document.querySelector('.score'. textContent = 10;
document.querySelector('.guess'). value = 13;*/
//type of event: click, first argument we had passed into the function
//then we need to tell the event listener what to do, and to do this, we call a function
//and the function is going to be called the event handler

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //WHEN THERE IS NO NUMBER
  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER!';

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT NUMBER!🎉';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore'). textContent = highscore;
    }

    //WHEN GUESS IS WRONG
}else if (guess !== secretNumber) {
    if (score  > 0) {
      document.querySelector('.message').textContent = guess > secretNumber? '📈TOO HIGH!':'📉TOO LOW!'
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!';
    }
}})
    //WHEN GUESS IS TOO LOW
   /*else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉TOO LOW!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!';
    }
  }
});*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
});
