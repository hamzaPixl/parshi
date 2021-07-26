const config = require('config');

const Player = require('./Player');
const Pawn = require('./Pawn');
const { useDice } = require('../utils/dice');
const colors = require('../utils/console/colors');

class Game {
  constructor() {
    this.start = true;
    this.ended = false;
    this.turn = 0;
    this.nextPlayer = 0;
    this.dicedValue = 0;
    this.players = [];
    this.barrages = [];
    this.history = [];

    for (let i = 0; i < config.players.max; i++) {
      const player = new Player(i + 1);
      this.players.push(player);
    }
  }

  addHistory(entry) {
    if (!this.history || !this.history.length) {
      this.history = [];
    }
    this.history.push(entry);
  }

  addBarrage(barrage) {
    if (!this.barrages || !this.barrages.length) {
      this.barrages = [];
    }
    this.barrages.push(barrage);
  }

  getCurrentPlayer() {
    return this.players[this.nextPlayer];
  }

  playTurn() {
    this.players.forEach((player) => {
      this.playTurnForPlayer(player);
      this.turn += 1;
      this.nextPlayer = (this.nextPlayer + 1) % this.players.length;
    });
  }

  playTurnForPlayer(player) {
    console.log(`\nCurrent player is ${player.color}`);

    this.dicedValue = useDice();
    let availablePawns = player.getAvailablePawns();

    console.log(colors.bg[player.color], colors.fg.white, `${player.color} diced a ${this.dicedValue}`, colors.reset);
    console.log(
      colors.bg[player.color],
      colors.fg.white,
      `Pawns are in this position before ${player.getPawnPositionOnBoard()}`,
      colors.reset
    );

    if (this.dicedValue === config.outFromBase) { // 5
      if (player.hasPawnsAtHome()) {
        player.goOutFromBaseCamp();
        availablePawns = [];
        console.log(
          colors.bg[player.color],
          colors.fg.white,
          `${player.color} goes out with in position ${player.basePosition} on board`,
          colors.reset
        );
      }
    }

    if (this.dicedValue === config.replay) { // 6
      if (!player.hasPawnsAtHome() && !player.hasQuarAtLeastOnePawn()) {
        this.dicedValue *= 2;
      }
      // can replay
    }

    if (availablePawns.length) {
      // choose pawn from the available from now take the first one
      player.updatePawnValue(availablePawns[0].number, this.dicedValue);
    }

    //

    // if i have a barrage on my position for my pawns
    // i cant go out

    // if there is someone from another color at this position
    // my pawn take his position
    // the opponent pawn should go to the base camp
    // i got a bonus of 20
    /*    if (pawn) {
      nextValue += pawn.value;
    }
    player.updatePawnPosition({ number: pawn.number, value: this.dicedValue });
*/
    console.log(
      colors.bg[player.color],
      colors.fg.white,
      `Pawns are in this position after ${player.getPawnPositionOnBoard()}`,
      colors.reset
    );
  }
}

module.exports = Game;
