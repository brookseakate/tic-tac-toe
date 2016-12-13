import Board from 'board';

describe('Board', function(){
  describe('won', function(){
    it('will return false if no one has played', function(){
      var board = new Board();
      expect(board.won()).toEqual(false);
    });
    it('will return false if there is a tie', function(){
      var board = new Board();
      board.grid = [[1, 0, 1], [0, 0, 1], [0, 1, 0]];
      expect(board.won()).toEqual(false);
    });
    it('will return true if a row or diag has the same player', function(){
      var board = new Board();
      board.grid = [[1, 1, 1,], [0, 0, null], [null, null, null]];
      expect(board.won()).toEqual(true);
    });
  });
});
