let score = JSON.parse(localStorage.getItem('score')) ||  {
  wins: 0,
  loses: 0,
  ties: 0
  };

  updateScoreElement();
  /*

if (!score){score ={
  wins: 0,
  loses: 0,
  ties: 0
  };}
  
*/

function playerMove(move){
const computerMove3 = pickComputerMove();
  

  let result3 ='';

  if (move === 'scissors') {if (computerMove3 === 'rock') {result3 = 'You lose.';}

  else if (computerMove3 === 'paper') {result3 = 'You win.';}

  else if (computerMove3 === 'scissors') {result3 = 'Tie.';}}

  

  else if (move === 'paper') {if (computerMove3 === 'rock') {result3 = 'You win.';}

  else if (computerMove3 === 'paper') {result3 = 'Tie.';}

  else if (computerMove3 === 'scissors') {result3 = 'You lose.';}}
  

 else if (move === 'rock') {if (computerMove3 === 'rock') {result3 = 'Tie.';}

  else if (computerMove3 === 'paper') {result3 = 'You lose.';}

  else if (computerMove3 === 'scissors') {result3 = 'You win.';}

 }

 if (result3 === 'You win.') {
  score.wins += 1;
 }
 else if(result3 === 'You lose.') {
  score.loses += 1;
 }
 else if (result3 === 'Tie.') {
  score.ties +=1;
 }

 localStorage.setItem('score', JSON.stringify(score));

 updateScoreElement();
 




  document.querySelector('.js-move')
    .innerHTML= `You
    <img class="emoji-image" src="images/${move}-emoji.png">
    <img class="emoji-image" src="images/${computerMove3}-emoji.png">
    Computer`;



  document.querySelector('.js-result')
    .innerHTML= `${result3}`


function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML= `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`
}



  function pickComputerMove() {
     const randomNumber3 = Math.random();

     let computerMove3 = '';

   if (randomNumber3 >= 0 && randomNumber3 <1/3){
     computerMove3 = 'rock';}

  else if (randomNumber3 >= 1/3 && randomNumber3 < 2/3){
    computerMove3 = 'paper';
  }

  else if (randomNumber3 >= 2/3 && randomNumber3 < 1) {
     computerMove3 = 'scissors';


  }


  return computerMove3;
        
  
}}