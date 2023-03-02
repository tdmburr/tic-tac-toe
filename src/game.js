class Game {
  constructor() {
    this.playerOne = new Player(1, "😺")
    this.playerTwo = new Player(2, "🐕")
    this.boxID = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    this.draw = false
    this.winner = false
    this.turns = 0
    this.startPlayer = "😺"
    this.currentPlayerTurn = "😺"
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
          this.winner = true;
          this.playerOne.wins ++
      } else if (
          this.playerTwo.boardSpace.includes(winConditions[i][0]) && 
          this.playerTwo.boardSpace.includes(winConditions[i][1]) && 
          this.playerTwo.boardSpace.includes(winConditions[i][2])) 
      {
          this.winner = true;
          this.playerOne.wins ++
      }
    }
  }

  checkDraw() {
    if (this.turns === 9 && this.winner === false) {
      this.draw = true
    }
  }

  updateBoard(id) {
    this.boxID[id] = this.currentPlayerTurn
  }

  changeTurn() {
    if (this.currentPlayerTurn === "😺") {
      this.currentPlayerTurn = "🐕"
    } else {
      this.currentPlayerTurn = "😺"
    }
  }
  
  clearBoard() {
    this.boxID = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    this.draw = false
    this.winner = false
    this.turns = 0
    this.playerOne.boardSpace = []
    this.playerTwo.boardSpace = []
    if (this.startPlayer === "😺") {
      this.startPlayer = "🐕"
      this.currentPlayerTurn = "🐕"
    } else {
      this.startPlayer = "😺"
      this.currentPlayerTurn = "😺"
    }
  }
}