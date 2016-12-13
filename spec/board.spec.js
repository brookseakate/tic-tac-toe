import Board from 'board';

describe('Board', function(){
  describe('won', function(){
    it('will return false if no one has played', function(){
      var board = new Board();
      expect(board.won()).toEqual(false);
    });
  });
});
