/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();

function nextPlayer() {
    activePlayer ? activePlayer = 0 : activePlayer = 1;
    roundScore = 0;
    lastDice = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';                 // hide the dice image.
}

function init() {
    scores = [0, 0];                // global scores to 0
    roundScore = 0;                 // round score.
    activePlayer = 0;
    gamePlaying = true;
    lastDice = 0;

    document.querySelector('.dice').style.display = 'none';                 // hide the dice image.
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
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');

        // document.querySelector('#current-' + activePlayer).textContent = dice;  // can also use .innerHTML = '<em>'+dice+'</em>';
        diceDOM.style.display = 'block';                // re display dice.
        diceDOM.src = 'dice-' + dice + '.png';

        if (dice > 1) {
            if (dice === 6 && dice === lastDice) {
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                nextPlayer();
            } else {
                roundScore += dice;
                lastDice = dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
                document.querySelector('.dice').style.display = 'block';                 // hide the dice image.
                }
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
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
