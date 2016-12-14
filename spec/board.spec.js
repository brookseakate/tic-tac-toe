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
    it('will return true if a row  is the same', function(){
      var board = new Board();
      board.grid = [[1, 1, 1,], [0, 0, undefined], [undefined, undefined, undefined]];
      expect(board.won()).toEqual(true);
    });
    it('will return true if a diagnol is the same', function(){
      var board = new Board();
      board.grid = [[undefined, undefined, 0], [undefined, 0, 1], [0, 1, 0]];
      expect(board.won()).toEqual(true);
    });
    it('will return true if a column is the same', function(){
      var board = new Board();
      board.grid = [[1, undefined, 0], [1, 0, 1], [1, 1, 0]];
      expect(board.won()).toEqual(true);
    });
    it('will return false if there is a tie', function(){
      var board = new Board();
      board.grid = [[1, 0, 1], [undefined, undefined, undefined], [undefined, undefined, undefined]];
      expect(board.won()).toEqual(false);
    });
    it('will have this winner to be 1', function(){
      var board = new Board();
      board.grid = [[1, undefined, 0], [1, 0, 1], [1, 1, 0]];
      board.won();
      expect(board.winner).toEqual(1);
    });
    it('will return 0 as the winner', function(){
      var board = new Board();
      board.grid = [[undefined, undefined, 0], [undefined, 0, 1], [0, 1, 0]];
      board.won();
      expect(board.winner).toEqual(0);
    });
  });

  describe('full', function() {
    it('should return true if the board is filled (no undefined spaces) & no winner', function() {
      var board = new Board();
      board.grid = [[1, 0, 1], [0, 0, 1], [0, 1, 0]];
      expect(board.full()).toEqual(true);
    });

    it('should return true if the board is filled (no undefined spaces) & there is a winner', function() {
      var board = new Board();
      board.grid = [[0, 0, 1], [0, 0, 1], [0, 1, 0]];
      expect(board.full()).toEqual(true);
    });

    it('should return false if the board is not filled (has undefined spaces)', function() {
      var board = new Board();
      board.grid = [[1, undefined, 0], [1, 0, 1], [1, 1, 0]];
      expect(board.full()).toEqual(false);
    });

    it('should return false if the board is all unfilled (all undefined spaces)', function() {
      var board = new Board();
      board.grid = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];
      expect(board.full()).toEqual(false);
    });
  });
});
