class Player {
  constructor(token) {
    this.id = Date.now()
    this.token = token
    this.wins = 0
  }
  increaseWins() {
    this.wins ++
  }
}