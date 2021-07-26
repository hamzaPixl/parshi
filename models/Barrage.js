const config = require('config');

class Barrage {
  constructor(pawn1, pawn2) {
    this.pawn1 = pawn1;
    this.pawn2 = pawn2;
  }

  isPlayerImpliedIn(player) {
    return this.pawn1.player.color === player.color;
  }

  isFromSamePlayer() {
    return this.pawn1.player.color === pawn2.player.color;
  }

  getPostion() {
    return pawn1.getPawnPositionOnBoard();
  }
}

module.exports = Pawn;
