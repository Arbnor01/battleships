// src/player.js

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
        for (let i = 0; i < size; i++) {
          shipCoordinates.push({ row, col: col + i });
        }
      } else if (direction === 'vertical') {
        for (let i = 0; i < size; i++) {
          shipCoordinates.push({ row: row + i, col });
        }
      }
  
      return shipCoordinates;
    }
  }
  
  module.exports = Player;
  
  
  
  
  