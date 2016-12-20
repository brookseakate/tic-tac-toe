import Board from 'app/models/board';

describe('Board', function(){
  var board;
  beforeEach(function() {
    board = new Board({
    });
  });
  describe('won', function(){
    it('will return false if no one has played', function(){

      expect(board.won()).toEqual(false);
    });
    it('will return false if there is a tie', function(){
      board.set('grid', [[1, 0, 1], [0, 0, 1], [0, 1, 0]]);
      expect(board.won()).toEqual(false);
    });
    it('will return true if a row  is the same', function(){
      board.set('grid', [[1, 1, 1,], [0, 0, undefined], [undefined, undefined, undefined]]);
      expect(board.won()).toEqual(true);
    });
    it('will return true if a diagnol is the same', function(){
      board.set('grid', [[undefined, undefined, 0], [undefined, 0, 1], [0, 1, 0]]);
      expect(board.won()).toEqual(true);
    });
    it('will return true if a column is the same', function(){
      board.set('grid',[[1, undefined, 0], [1, 0, 1], [1, 1, 0]]);
      expect(board.won()).toEqual(true);
    });
    it('will return false if there is a tie', function(){
      board.set('grid', [[1, 0, 1], [undefined, undefined, undefined], [undefined, undefined, undefined]]);
      expect(board.won()).toEqual(false);
    });
    it('will have this winner to be 1', function(){
      board.set('grid', [[1, undefined, 0], [1, 0, 1], [1, 1, 0]]);
      board.won();
      expect(board.get('winner')).toEqual(1);
    });
    it('will return 0 as the winner', function(){
      board.set('grid', [[undefined, undefined, 0], [undefined, 0, 1], [0, 1, 0]]);
      board.won();
      expect(board.get('winner')).toEqual(0);
    });
  });

  describe('full', function() {
    it('should return true if the board is filled (no undefined spaces) & no winner', function() {
      board.set('grid',[[1, 0, 1], [0, 0, 1], [0, 1, 0]]);
      expect(board.full()).toEqual(true);
    });

    it('should return true if the board is filled (no undefined spaces) & there is a winner', function() {
      board.set('grid', [[0, 0, 1], [0, 0, 1], [0, 1, 0]]);
      expect(board.full()).toEqual(true);
    });

    it('should return false if the board is not filled (has undefined spaces)', function() {
      board.set('grid',[[1, undefined, 0], [1, 0, 1], [1, 1, 0]]);
      expect(board.full()).toEqual(false);
    });

    it('should return false if the board is all unfilled (all undefined spaces)', function() {
      board.set('grid', [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]]);
      expect(board.full()).toEqual(false);
    });
  });
});
