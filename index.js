const Game = require('./models/Game');

const game = new Game();
console.log('\n**************************************\n');
console.log('Parshi game started\n');
console.log('**************************************\n');

game.playTurn();

console.log('\n**************************************\n');
console.log('Turn 2\n');
console.log('**************************************\n');
game.playTurn();
