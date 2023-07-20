const Player = require('./src/player');
const util = require('util');

const player = new Player();
player.placeShip({ size: 3 }, 'A1', 'horizontal');

console.log(util.inspect(player.getBoard(), { showHidden: false, depth: null }));

