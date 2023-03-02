class Game {
  constructor() {
    this.playerOne = new Player(1, "😺")
    this.playerTwo = new Player(2, "🐕")
    this.currentPlayerTurn = 1 || 2
    this.gameData = []
    this.draw = false
    this.turns = 0
  }
  checkBoard() {
    var winConditions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ]
    for (var i = 0; i < winConditions.length; i++) {
      if (winConditions === winConditions[i]) {

      }
    }
  }

  checkDraw() {

  }

  changeTurn() {

  }
  
  clearBoard() {
    // use a timer to reset board .reload()?
      // clear innerHTML of every box
  }
}