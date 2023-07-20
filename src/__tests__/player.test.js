// src/__tests__/player.test.js

const Player = require('../player');

describe('Player', () => {
  it('can place a ship in a board location', () => {
    const player = new Player();

    // Place a ship of size 3 horizontally at location A1
    player.placeShip({ size: 3 }, 'A1', 'horizontal');

    // Verify that the ship is correctly placed
    expect(player.getBoard()[0][0]).toBe('X');
    expect(player.getBoard()[0][1]).toBe('X');
    expect(player.getBoard()[0][2]).toBe('X');
  });
});




