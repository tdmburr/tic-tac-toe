class Game {
  constructor() {
    this.playerOne = new Player(1, "🐟")
    this.playerTwo = new Player(2, "🐡")
    this.draw = false
    this.winner = null
    this.turns = 0
    this.currentPlayerTurn = this.playerOne
    this.gameInSession = true
    this.startPlayer = 1
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
      if (this.playerOne.boardSpace.includes(winConditions[i][0]) && 
          this.playerOne.boardSpace.includes(winConditions[i][1]) && 
          this.playerOne.boardSpace.includes(winConditions[i][2])) 
      {
          this.winner = this.playerOne
          this.playerOne.wins += 1
          this.gameInSession = false;
      } else if (
          this.playerTwo.boardSpace.includes(winConditions[i][0]) && 
          this.playerTwo.boardSpace.includes(winConditions[i][1]) && 
          this.playerTwo.boardSpace.includes(winConditions[i][2])) 
      {
          this.winner = this.playerTwo
          this.playerTwo.wins += 1
          this.gameInSession = false;
      }
    }
    this.checkDraw()
  }

  checkDraw() {
    if (this.turns === 9 && this.winner === null) {
      this.draw = true
    }
  }

  takeTurn(selectedBox) {
    if (this.currentPlayerTurn === this.playerOne) {
      this.playerOne.boardSpace.push(selectedBox)
      this.currentPlayerTurn = this.playerTwo
    } else if (this.currentPlayerTurn === this.playerTwo) {
      this.playerTwo.boardSpace.push(selectedBox)
      this.currentPlayerTurn = this.playerOne
    }
    this.turns ++
  }
 
  clearBoard() {
    this.draw = false
    this.winner = null
    this.turns = 0
    this.gameInSession = true
    this.playerOne.boardSpace = []
    this.playerTwo.boardSpace = []
    if (this.startPlayer === 1) {
        this.currentPlayerTurn = this.playerTwo
        this.startPlayer = 2
    } else {
        this.currentPlayerTurn = this.playerOne
        this.startPlayer = 1
    }
  }
}