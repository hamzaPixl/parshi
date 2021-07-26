const config = require('config');

class Pawn {
  constructor(number, color) {
    this.value = -1;
    this.number = number;
    this.color = color;
  }

  reachEndBoard() {
    return this.value === config.board.end;
  }

  reachQuarEnd() {
    return (config.board.end + config.toQuar) === this.value;
  }

  getBoardPoisiton(basePosition) {
    if (this.value < 0 || this.reachQuarEnd()) {
      return this.value;
    }

    return (this.value + basePosition) % config.board.end;
  }

  isFromPlayer(player) {
    return player.color === this.color;
  }

  isAtPosition(player, position) {
    return player.color === this.color && position === this.getBoardPoisiton(player.basePosition);
  }
}

module.exports = Pawn;
