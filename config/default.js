module.exports = {
  colors: ['red', 'green', 'yellow', 'blue'],
  players: {
    pawns: 4,
    min: 3,
    max: 4,
    keeper: false,
  },
  board: {
    start: 1,
    end: 68,
    bases: [1, 18, 35, 52],
    security: [1, 8, 13, 18, 25, 30, 35, 42, 47, 42, 59, 64],
  },
  bonus: {
    eating: 20,
    full: 12,
    quar: 10,
  },
  diceNumber: 1,
  outFromBase: 5,
  replay: 6,
  toQuar: 8,
};
