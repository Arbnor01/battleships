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

  it('can place ships of different sizes in board locations', () => {
    const player = new Player();

    // Place a ship of size 3 horizontally at location A1
    player.placeShip({ size: 3 }, 'A1', 'horizontal');

    // Place a ship of size 4 vertically at location E5
    player.placeShip({ size: 4 }, 'E5', 'vertical');

    // Verify that the ships are correctly placed
    expect(player.getBoard()[0][0]).toBe('X');
    expect(player.getBoard()[0][1]).toBe('X');
    expect(player.getBoard()[0][2]).toBe('X');

    expect(player.getBoard()[4][4]).toBe('X'); // E5 (new)
    expect(player.getBoard()[5][4]).toBe('X'); // F5 (new)
    expect(player.getBoard()[6][4]).toBe('X'); // G5 (new)
    expect(player.getBoard()[7][4]).toBe('X'); // H5 (new)
  });

});



