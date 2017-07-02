var assert = require('assert');
var WordGame = require('../wordgame');

function gameSim(arr) {
  // simulate a game session
  // expects binary array
  // arr = [1, 0, 1, 0] means
  // first solution correct
  // second solution false
  // third solution correct
  // fourth solution false
  var actual = '';
  var wrong = '';
  var wgame = new WordGame('a');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      var mysolution = actual + 'a';
    } else {
      mysolution = wrong + 'b';
    }
    wgame.isCorrect(mysolution);
    if (i < arr.length - 1) {
      wgame.nextWord(actual + 'a');
    }
  }
  return wgame;
}

describe('WordGame', function () {

  describe('initialization', function () {
    it('it should not be possible to initialize with a non-string value', function () {
      assert.throws(
        function() {
          var wgame = new WordGame(123123);
        },
        Error
      );
    });

    it('it should not be possible to initialize with an empty string', function () {
      assert.throws(
        function() {
          var wgame = new WordGame('');
        },
        Error
      );
    });

    it('it should not be possible to initialize with a string containing special characters', function () {
      assert.throws(
        function() {
          var wgame = new WordGame('alkdf_akdf');
        },
        Error
      );
    });
  });


  describe('shuffle()', function () {

    it('shuffling should not affect original input word', function () {
      var game = new WordGame('someword');
      assert.equal('someword', game.word);
    });

    it('shuffled word should be the same length as actual word', function () {
      var game = new WordGame('arandomword');
      assert.ok(game.word.length === game.shuffledWord.length);
    });

    it('shuffled word must contain the same letters as actual word', function () {
      var game = new WordGame('someword');
      var inputLetters = game.word.split('').sort().join('');
      var shuffleLetters = game.shuffledWord.split('').sort().join('');
      assert.equal(inputLetters, shuffleLetters);
    });
  });


  describe('isCorrect()', function () {

    it('method is case insensitive', function () {
      var wgame = new WordGame('someword');
      var goodSolution = wgame.isCorrect('SomEWord');
      assert.ok(goodSolution);
    });

    it('checking solution increases num of attempts by 1', function () {
      var wgame = new WordGame('someword');
      wgame.isCorrect('wrongword');
      assert.equal(wgame.attempts, 1);
    });

    it('rechecking correct solution with the same word does not change num of attempts and num of solved words', function () {
      var wgame = new WordGame('someword');
      wgame.isCorrect('someword');
      wgame.isCorrect('someword');
      assert.equal(wgame.attempts, 1);
      assert.equal(wgame.solvedWords, 1);
    });

    it('checking wrong solution after it has already been solved previously does not change num of attempts', function () {
      var wgame = new WordGame('someword');
      wgame.isCorrect('someword');
      wgame.isCorrect('wrongword');
      assert.equal(wgame.attempts, 1);
    });

  });

  describe('nextWord()', function () {
    it('next word sets word value correctly', function () {
      var wgame = new WordGame('someword');
      wgame.nextWord('otherword');
      assert.equal('otherword', wgame.word);
    });
    it('next word increases total number of played words by 1', function () {
      var wgame = new WordGame('someword');
      wgame.nextWord('otherword');
      assert.equal(wgame.totalNrOfWords, 2);
    });
    it('next word does not change number of attempts and number of solved words', function () {
      var wgame = new WordGame('someword');
      wgame.nextWord('otherword');
      assert.equal(wgame.attempts, 0);
      assert.equal(wgame.solvedWords, 0);
    });
    it('next word resets value of hasAlreadyBeenSolved to false', function () {
      var wgame = new WordGame('someword');
      wgame.isCorrect('someword');
      wgame.nextWord('otherword');
      assert.equal(wgame.hasAlreadyBeenSolved, false);
    });
  });

  describe('score()', function () {

    it('initialy the score is 0', function () {
      var wgame = new WordGame('someword');
      var perf = wgame.score();
      assert.equal(perf, 0);
    });

    it('after not solving the first challenge the score is 0', function () {
      var wgame = new WordGame('someword');
      wgame.isCorrect('wrong');
      var perf = wgame.score();
      assert.equal(perf, 0);
    });

    it('after solving the first challenge the score is 100' , function () {
      var wgame = new WordGame('someword');
      wgame.isCorrect('someword');
      var perf = wgame.score();
      assert.equal(perf, 100);
    });

    it('solving in pattern [0, 0, 0, 0] results in score of 0', function () {
      var g = gameSim([0, 0, 0, 0]);
      assert.equal(g.score(), 0);
    });
    it('solving in pattern [0, 0, 0, 1] results in score of 25', function () {
      var g = gameSim([0, 0, 0, 1]);
      assert.equal(g.score(), 25);
    });
    it('solving in pattern [0, 0, 1, 0] results in score of 25', function () {
      var g = gameSim([0, 0, 1, 0]);
      assert.equal(g.score(), 25);
    });
    it('solving in pattern [0, 0, 1, 1] results in score of 50', function () {
      var g = gameSim([0, 0, 1, 1]);
      assert.equal(g.score(), 50);
    });
    it('solving in pattern [0, 1, 0, 0] results in score of 25', function () {
      var g = gameSim([0, 1, 0, 0]);
      assert.equal(g.score(), 25);
    });
    it('solving in pattern [0, 1, 0, 1] results in score of 50', function () {
      var g = gameSim([0, 1, 0, 1]);
      assert.equal(g.score(), 50);
    });
    it('solving in pattern [0, 1, 1, 0] results in score of 50', function () {
      var g = gameSim([0, 1, 1, 0]);
      assert.equal(g.score(), 50);
    });
    it('solving in pattern [0, 1, 1, 1] results in score of 75', function () {
      var g = gameSim([0, 1, 1, 1]);
      assert.equal(g.score(), 75);
    });
    it('solving in pattern [1, 0, 0, 0] results in score of 25', function () {
      var g = gameSim([1, 0, 0, 0]);
      assert.equal(g.score(), 25);
    });
    it('solving in pattern [1, 0, 0, 1] results in score of 50', function () {
      var g = gameSim([1, 0, 0, 1]);
      assert.equal(g.score(), 50);
    });
    it('solving in pattern [1, 0, 1, 0] results in score of 50', function () {
      var g = gameSim([1, 0, 1, 0]);
      assert.equal(g.score(), 50);
    });
    it('solving in pattern [1, 0, 1, 1] results in score of 75', function () {
      var g = gameSim([1, 0, 1, 1]);
      assert.equal(g.score(), 75);
    });
    it('solving in pattern [1, 1, 0, 0] results in score of 50', function () {
      var g = gameSim([1, 1, 0, 0]);
      assert.equal(g.score(), 50);
    });
    it('solving in pattern [1, 1, 0, 1] results in score of 75', function () {
      var g = gameSim([1, 1, 0, 1]);
      assert.equal(g.score(), 75);
    });
    it('solving in pattern [1, 1, 1, 0] results in score of 75', function () {
      var g = gameSim([1, 1, 1, 0]);
      assert.equal(g.score(), 75);
    });
    it('solving in pattern [1, 1, 1, 1] results in score of 100', function () {
      var g = gameSim([1, 1, 1, 1]);
      assert.equal(g.score(), 100);
    });

  });


});
