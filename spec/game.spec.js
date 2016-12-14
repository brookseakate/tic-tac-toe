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

      expect(game.play(0, '02')).toEqual(true);

      expect(game.board.grid[0][2]).toEqual(0);
      expect(game.board.grid[0][2]).not.toEqual(beginValue);
      expect(game.board.grid[0][2]).toBeDefined();

      expect(game.play(1, '02')).toEqual(false);

      expect(game.board.grid[0][2]).toEqual(0);

    });
    it('should only allow the player whose turn is True to play', function(){
      var game = new Game();
      //This will break once turn management works
      expect(game.playerOne.myTurn).toEqual(true);
      game.play(0, '00');
      expect(game.play(0, '01')).toEqual(false);
      expect(game.playerOne.myTurn).toEqual(false);
      expect(game.board.grid[0][1]).not.toBeDefined();
    });

    it('it should be able to check if someone has already won', function(){
      var game = new Game();
      //This will break once turn management works
      game.play(0, '00');
      game.play(1, '11');
      game.play(0, '01');
      game.play(1, '12');
      game.play(0, '02');
      expect(game.board.grid[0][2]).toBeDefined();
      expect(game.board.grid[0][1]).toEqual(0);
      expect(game.board.grid[0][0]).toEqual(0);
      expect(game.board.isWon).toEqual(true);
      expect(game.board.winner).toEqual(0);
    });
  });
  // Game over Function paused to do turn logic
  // describe('gameOver', function(){
  //   it('will clear the board once someone has won', function(){
  //     var game = new Game();
  //     //This will break once turn management works
  //     game.play(0, '00');
  //     game.play(0, '01');
  //     game.play(0, '02');
  //     expect(game.board.grid[0][0]).to
  //   });
  // });

  describe('updateTurn', function(){
  it("will have a true value if it is the player's turn", function(){
    var game = new Game();
    //This will break once turn management works
    expect(game.playerOne.myTurn).toEqual(true);
    game.play(0, '00');
    expect(game.playerOne.myTurn).toEqual(false);
  });
  });

  describe('whoseTurn', function(){
    it("will return whose turn it is ", function (){
      var game = new Game();
      //This will break once turn management works
      expect(game.playerOne.myTurn).toEqual(true);
      game.play(0, '00');
      expect(game.whoseTurn()).toEqual(game.playerTwo);
    });
  });
});
