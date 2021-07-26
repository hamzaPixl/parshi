const config = require('config');

const Pawn = require('./Pawn');

class Player {
  constructor(number) {
    this.basePosition = config.board.bases[number - 1];
    this.color = config.colors[number - 1];
    this.ready = true;
    this.name = '';
    this.pawns = [];

    for (let i = 0; i < config.players.pawns; i++) {
      const pawn = new Pawn(i + 1, this.color);
      this.pawns.push(pawn);
    }
  }

  getPawnPositionOnBoard() {
    return this.pawns.map((p) => p.getBoardPoisiton(this.basePosition)).sort((a, b) => a >= b);
  }

  getAvailablePawns() {
    return this.pawns.filter((p) => p.value >= 0 && !p.reachQuarEnd());
  }

  getOneFromHome() {
    return this.pawns.find((p) => p.value < 0);
  }

  hasPawnsAtHome() {
    return this.pawns.some((p) => p.value < 0);
  }

  hasQuarAtLeastOnePawn() {
    return this.pawns.some((p) => p.reachQuarEnd());
  }

  amIAtPosition(position) {
    return this.pawns.some((p) => p.getBoardPoisiton(this.basePosition) === position);
  }

  goOutFromBaseCamp() {
    this.updatePawnValue(this.getOneFromHome().number, 0);
  }

  updatePawnValue(pawnNumber, value) {
    this.pawns.forEach((p) => {
      if (p.number === pawnNumber) {
        p.value = value;
      }
      return p;
    });
  }
}

module.exports = Player;
