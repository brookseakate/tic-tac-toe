import Game from 'game';

describe('Game', function() {
  describe('play', function() {
    it('should change the specified grid position to the specified player value', function() {
      var game = new Game();

      // save original value of position
      var beginValue = game.board.grid[0][2];

      game.play(0, '02');

      expect(game.board.grid[0][2]).toEqual(0);
      expect(game.board.grid[0][2]).not.toEqual(beginValue);
      expect(game.board.grid[0][2]).toBeDefined();

      game.play(1, '22');

      expect(game.board.grid[2][2]).toEqual(1);
      expect(game.board.grid[2][2]).toBeDefined();
    });

    it('should not reassign a space that has already been played', function() {
      var game = new Game();

      // save original value of position
      var beginValue = game.board.grid[0][2];

      game.play(0, '02');

      expect(game.board.grid[0][2]).toEqual(0);
      expect(game.board.grid[0][2]).not.toEqual(beginValue);
      expect(game.board.grid[0][2]).toBeDefined();

      game.play(1, '02');

      expect(game.board.grid[0][2]).toEqual(0);
    });

    // @TODO - add more tests for play
  });
});
