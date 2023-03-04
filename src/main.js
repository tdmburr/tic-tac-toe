var gameTurn = document.querySelector('.game-board-header')
var gameBoard = document.getElementById('game-board')
var playerOneWins = document.querySelector('.p1-win')
var playerTwoWins = document.querySelector('.p2-win')

var newGame = new Game()

window.addEventListener('load', displayTurn)
gameBoard.addEventListener('click', initiatePlay)

function displayTurn() {
  gameTurn.innerText = `It's your turn ${newGame.currentPlayerTurn.token}!`
}

function initiatePlay(event) {
  if (event.target.innerText === "" && newGame.winner === null) {
    var selectedID = parseInt(event.target.dataset.indexNumber)
    event.target.innerText = newGame.currentPlayerTurn.token
    newGame.takeTurn(selectedID)
    newGame.checkBoard()
  if (newGame.winner !== null || newGame.draw) {
      showResult()
    } else {   
      displayTurn()
    }
  } 
}

