/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

function nextPlayer() {
    activePlayer ? activePlayer = 0 : activePlayer = 1;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-1').style.display = 'none';                 // hide the dice image.
    document.getElementById('dice-2').style.display = 'none';                 // hide the dice image.
}

function init() {
    scores = [0, 0];                // global scores to 0
    roundScore = 0;                 // round score.
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';                 // hide the dice image.
    document.getElementById('dice-2').style.display = 'none';                 // hide the dice image.
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
}

//added  section 4, lecture 49 -- 
document.querySelector('.btn-roll').addEventListener("click", function () {

    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var dice1DOM = document.getElementById('dice-1');
        var dice2DOM = document.getElementById('dice-2');

        // document.querySelector('#current-' + activePlayer).textContent = dice;  // can also use .innerHTML = '<em>'+dice+'</em>';
        dice1DOM.style.display = 'block';                // re display dice.
        dice1DOM.src = 'dice-' + dice1 + '.png';

        dice2DOM.style.display = 'block';                // re display dice.
        dice2DOM.src = 'dice-' + dice2 + '.png';

        if (dice1 > 1 && dice2 > 1) {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            dice1DOM.style.display = 'block';                 // hide the dice image.
            dice2DOM.style.display = 'block';                 // hide the dice image.
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {

    var input = document.querySelector('.final-score').value;
    var winningScore;

    if (input) winningScore = input; else winningScore = 100;

    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = "Winner";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);
