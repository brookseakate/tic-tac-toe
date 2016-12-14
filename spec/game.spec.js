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

// // @TODO - write this!
  describe('gameOver', function(){
    it('should begin at false', function() {
      var game = new Game();
      expect(game.gameOver).toEqual(false);
    });

    it('should return true if game is tied', function() {
      var game = new Game();
      game.play(0, '00');
      game.play(1, '01');
      game.play(0, '02');
      game.play(1, '11');
      game.play(0, '10');
      game.play(1, '12');
      game.play(0, '22');
      game.play(1, '20');
      expect(game.gameOver).toEqual(false);
      expect(game.board.isWon).toEqual(false);
      expect(game.board.full()).toEqual(false);
      game.play(0, '21');
      // console.log(">>>>>>>>" + game.board.grid);
      expect(game.gameOver).toEqual(true);
      expect(game.board.isWon).toEqual(false);
      expect(game.board.full()).toEqual(true);
    });

    it('should return true if full and there is a winner', function() {
      var game = new Game();
      game.play(0, '00');
      game.play(1, '01');
      game.play(0, '02');
      game.play(1, '11');
      game.play(0, '10');
      game.play(1, '12');
      game.play(0, '22');
      game.play(1, '21');
      expect(game.gameOver).toEqual(false);
      expect(game.board.isWon).toEqual(false);
      expect(game.board.full()).toEqual(false);
      game.play(0, '20');
      // console.log(">>>>>>>>" + game.board.grid);
      expect(game.gameOver).toEqual(true);
      expect(game.board.isWon).toEqual(true);
      expect(game.board.full()).toEqual(true);
    });

    it('should return false if board is not full & there a no winner', function() {
      var game = new Game();
      game.play(0, '00');
      game.play(1, '01');
      game.play(0, '10');
      game.play(1, '11');
      game.play(0, '20');
      expect(game.gameOver).toEqual(true);
      expect(game.board.isWon).toEqual(true);
      expect(game.board.full()).toEqual(false);
    });

    it('should return false if board is not full & there is no winner', function() {
      var game = new Game();
      game.play(0, '00');
      game.play(1, '01');
      game.play(0, '02');
      game.play(1, '11');
      game.play(0, '10');
      game.play(1, '12');
      expect(game.gameOver).toEqual(false);
      expect(game.board.isWon).toEqual(false);
      expect(game.board.full()).toEqual(false);
    });

    // it('will clear the board once someone has won', function(){
    //   var game = new Game();
    //   game.play(0, '00');
    //   game.play(1, '11');
    //   game.play(0, '01');
    //   game.play(1, '12');
    //   game.play(0, '02');
    //   // expect(game.board.grid[0][0]).to
    // });
  });

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
