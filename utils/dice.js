const config = require('config');

const useDice = () => {
  let total = 0;
  for (let i = 0; i < config.diceNumber; i++) {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    total += diceValue;
  }
  return total;
};

module.exports = {
  useDice,
};
