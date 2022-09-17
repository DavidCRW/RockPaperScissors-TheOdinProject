const playerScoreDOM= document.querySelector('.player-score');
const computerScoreDOM= document.querySelector('.computer-score');
const items = document.querySelectorAll('.item');

let player1Score = 0;
let player2Score = 0;
const itemsArray = ['rock', 'paper', 'scissor'];
items.forEach(e => e.addEventListener('click', () => {
    let player1Item = e.getAttribute('data-id');
    let player2Item = itemsArray[Math.floor(Math.random()*itemsArray.length)];

    if(player1Item == player2Item){
        player1Score+=0;
        player2Score+=0;
    }else if(
        player1Item == 'rock' && player2Item == 'scissor' ||
        player1Item == 'paper' && player2Item == 'rock' ||
        player1Item == 'scissor' && player2Item == 'paper'
    ){
        player1Score +=1;
    }else{
        player2Score +=1;
    }

    if(player1Score == 5){
        alert('You are winner!')
        player1Score = 0;
        player2Score = 0;
    }else if(player2Score == 5){
        alert('Computer is winner!')
        player1Score = 0;
        player2Score = 0;
    }


    playerScoreDOM.innerHTML = player1Score;
    computerScoreDOM.innerHTML = player2Score;
}))