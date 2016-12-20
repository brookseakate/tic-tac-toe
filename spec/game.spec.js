import Game from 'app/models/game';

describe('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });
  describe('play', function() {

    it('should change the specified grid position to the specified player value', function() {
      var beginValue = game.board.get('grid')[0][1];

      game.play(0, '01');
      expect(game.board.get('grid')[0][1]).toEqual(0);
      expect(game.board.get('grid')[0][1]).not.toEqual(beginValue);
      expect(game.board.get('grid')[0][1]).not.toEqual("");

      game.play(1, '20');

      expect(game.board.get('grid')[2][0]).toEqual(1);
      expect(game.board.get('grid')[2][0]).not.toEqual("");
    });

    it('should not reassign a space that has already been played', function() {
      // var game = new Game();
      // save original value of position
      var beginValue = game.board.get('grid')[0][2];

      expect(game.play(0,'02')).toEqual(true);

      expect(game.board.get('grid')[0][2]).toEqual(0);
      expect(game.board.get('grid')[0][2]).not.toEqual(beginValue);
      expect(game.board.get('grid')[0][2]).not.toEqual("");

      expect(game.play(1, '02')).toEqual(false);

      expect(game.board.get('grid')[0][2]).toEqual(0);

    });
    it('should only allow the player whose turn is True to play', function(){
      // var game = new Game();

      expect(game.playerOne.myTurn).toEqual(true);
      game.play(0, '00');
      expect(game.play(0, '01')).toEqual(false);
      expect(game.playerOne.myTurn).toEqual(false);
      expect(game.board.get('grid')[0][1]).toEqual("");
    });

    it('it should be able to check if someone has already won', function(){
      game.play(0, '00');
      game.play(1, '11');
      game.play(0, '01');
      game.play(1, '12');
      game.play(0, '02');
      expect(game.board.get('grid')[0][2]).not.toEqual("");
      expect(game.board.get('grid')[0][1]).toEqual(0);
      expect(game.board.get('grid')[0][0]).toEqual(0);
      expect(game.board.get('isWon')).toEqual(true);
      expect(game.board.get('winner')).toEqual(0);
    });

    it('should only allow a play if game is not over', function() {
      game.play(0, '00');
      game.play(1, '01');
      game.play(0, '10');
      game.play(1, '11');
      game.play(0, '20');
      expect(game.gameOver).toEqual(true);
      expect(game.board.get('isWon')).toEqual(true);
      expect(game.board.full()).toEqual(false);
      expect(game.play(1, '12')).toEqual(false);
      expect(game.board.get('grid')[1][2]).toEqual("");
    });
    it('will allow a player to play a valid space after trying an invalid space', function(){
      var game = new Game();
      game.play(0, '00');
      expect(game.play(1, '00')).toEqual(false);
      expect(game.board.get('grid')[0][0]).not.toEqual(1);
      expect(game.play(1, '01')).toEqual(true);
      expect(game.board.get('grid')[0][1]).not.toEqual("");
      expect(game.board.get('grid')[0][1]).toEqual(1);
    });
  });
  describe('gameOver', function(){
    it('should begin at false', function() {
      expect(game.gameOver).toEqual(false);
    });

    it('should return true if game is tied', function() {
      game.play(0, '00');
      game.play(1, '01');
      game.play(0, '02');
      game.play(1, '11');
      game.play(0, '10');
      game.play(1, '12');
      game.play(0, '22');
      game.play(1, '20');
      expect(game.gameOver).toEqual(false);
      expect(game.board.get('isWon')).toEqual(false);
      expect(game.board.full()).toEqual(false);
      game.play(0, '21');
      // console.log(">>>>>>>>" + game.board.grid);
      expect(game.gameOver).toEqual(true);
      expect(game.board.get('isWon')).toEqual(false);
      expect(game.board.full()).toEqual(true);
    });

    it('should return true if full and there is a winner', function() {
      game.play(0, '00');
      game.play(1, '01');
      game.play(0, '02');
      game.play(1, '11');
      game.play(0, '10');
      game.play(1, '12');
      game.play(0, '22');
      game.play(1, '21');
      expect(game.gameOver).toEqual(false);
      expect(game.board.get('isWon')).toEqual(false);
      expect(game.board.full()).toEqual(false);
      game.play(0, '20');
      // console.log(">>>>>>>>" + game.board.grid);
      expect(game.gameOver).toEqual(true);
      expect(game.board.get('isWon')).toEqual(true);
      expect(game.board.full()).toEqual(true);
    });

    it('should return false if board is not full & there IS a winner', function() {

      game.play(0, '00');
      game.play(1, '01');
      game.play(0, '10');
      game.play(1, '11');
      game.play(0, '20');
      expect(game.gameOver).toEqual(true);
      expect(game.board.get('isWon')).toEqual(true);
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
      expect(game.board.get('isWon')).toEqual(false);
      expect(game.board.full()).toEqual(false);
    });
  });

  describe('updateTurn', function(){
  it("will have a true value if it is the player's turn", function(){
    //This will break once turn management works
    expect(game.playerOne.myTurn).toEqual(true);
    game.play(0, '00');
    expect(game.playerOne.myTurn).toEqual(false);
  });
  });

  describe('whoseTurn', function(){
    it("will return whose turn it is ", function (){

      //This will break once turn management works
      expect(game.playerOne.myTurn).toEqual(true);
      game.play(0, '00');
      expect(game.whoseTurn()).toEqual(game.playerTwo);
    });
});
});
