var boxOne = document.getElementById('boxOne')
var boxTwo = document.getElementById('boxTwo')
var boxThree = document.getElementById('boxThree')
var boxFour = document.getElementById('boxFour')
var boxFive = document.getElementById('boxFive')
var boxSix = document.getElementById('boxSix')
var boxSeven = document.getElementById('boxSeven')
var boxEight = document.getElementById('boxEight')
var boxNine = document.getElementById('boxNine')

var newGame = new Game()

var gameArray = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine]

boxOne.addEventListener('click', initiatePlay)
boxTwo.addEventListener('click', initiatePlay)
boxThree.addEventListener('click', initiatePlay)
boxFour.addEventListener('click', initiatePlay)
boxFive.addEventListener('click', initiatePlay)
boxSix.addEventListener('click', initiatePlay)
boxSeven.addEventListener('click', initiatePlay)
boxEight.addEventListener('click', initiatePlay)
boxNine.addEventListener('click', initiatePlay)

// document.getElementById('boxOne').innerHTML = ''
// document.getElementById("boxTwo").innerHTML = ''
// document.getElementById("boxThree").innerHTML = ''
// document.getElementById("boxFour").innerHTML = ''
// document.getElementById("boxFive").innerHTML = ''
// document.getElementById("boxSix").innerHTML = ''
// document.getElementById("boxSeven").innerHTML = ''
// document.getElementById("boxEight").innerHTML = ''
// document.getElementById("boxNine").innerHTML = ''

function initiatePlay(event, id) {
  if (newGame.gameInSession === true) {
    for (var i = 0; i < gameArray.length; i++) {
    if (newGame.currentPlayerTurn === "😺" && gameArray[i].id === event.target.id) {      
          gameArray[i].innerText = newGame.playerOne.token
          newGame.playerOne.boardSpace.push()
          newGame.checkBoard()        
    } else if (newGame.currentPlayerTurn === "🐕" && gameArray[i].id === event.target.id) 
          gameArray[i].innerText = newGame.playerTwo.token
          newGame.checkBoard()
    }      
  }
  newGame.changeTurn()
}
  


// function updateBox() {
// should update the DOM with the appropriate token based off of current player turn
// should update the ID based off of the current player turn
// should check the board for win conditions
// should update datamodel
// should check for draw
// should interpolate and increment where necessary
// }

