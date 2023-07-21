class Player {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill('.'));
  }

  placeShip(ship, startPosition, direction) {
    const { size } = ship;
    const [row, col] = this.parseStartPosition(startPosition);
    const shipCoordinates = this.generateShipCoordinates(size, row, col, direction);

    shipCoordinates.forEach(({ row, col }) => {
      this.board[row][col] = 'X';
    });
  }

  getBoard() {
    return this.board;
  }

  parseStartPosition(startPosition) {
    const [colStr, row] = startPosition.split('');
    const col = colStr.charCodeAt(0) - 'A'.charCodeAt(0);
    const rowIdx = parseInt(row, 10) - 1;
    return [rowIdx, col];
  }

  generateShipCoordinates(size, row, col, direction) {
    const shipCoordinates = [];

    if (direction === 'horizontal') {
      if (col + size > 10) {
        throw new Error('Ship placement out of bounds');
      }

      for (let i = 0; i < size; i++) {
        const coordinate = { row, col: col + i };
        shipCoordinates.push(coordinate);
      }
    } else if (direction === 'vertical') {
      if (row + size > 10) {
        throw new Error('Ship placement out of bounds');
      }

      for (let i = 0; i < size; i++) {
        const coordinate = { row: row + i, col };
        shipCoordinates.push(coordinate);
      }
    }

    return shipCoordinates;
  }
}

module.exports = Player;

