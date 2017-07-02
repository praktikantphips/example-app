var assert = require('assert');
var pdish = require('../gameoflife');

describe('Game Of Life', function () {


  describe('initialization', function() {

    it('it should not be possible to initialize a game with non-numeric dimensions', function () {
      assert.throws(
        function() {
          var dish = new pdish(123123, 'nonsense');
        },
        /must be an integer/
      );
    });
    it('it should not be possible to initialize a game with negative dimensions', function () {
      assert.throws(
        function() {
          var dish = new pdish(-12, 32);
        },
        /must be a positive integer/
      );
    });
    it('new petridish should be dead', function () {
      var dish = new pdish(10, 10);
      assert.ok(dish.isDead());
    });
  });

  describe('getNeighbors()', function () {
    it('any non-edge cell should have 8 neighbors', function () {
      var dish = new pdish(10, 10);
      for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
          var n = dish.getNeighbors(1, 1);
          assert.equal(n.length, 8);
        }
      }
    });
    it('any corner cell should have 3 neighbors', function () {
      var dish = new pdish(10, 10);
      var n = dish.getNeighbors(0, 0);
      assert.equal(n.length, 3);
    });
    it('any edge cell should have 5 neighbors', function () {
      var dish = new pdish(10, 10);
      var n = dish.getNeighbors(0, 1);
      assert.equal(n.length, 5);
    });
    it('all cells should never have themselves as a neighbor', function () {
      var dish = new pdish(10, 10);
      for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
          var n = dish.getNeighbors(i, j);
          n.forEach(function (el) {
            assert.ok(el !== {xcoord: 0, ycoord: 1});
          });
        }
      }
    });
  });


  describe('addCell()', function () {
    it('it should not be possible to add cell that is out of bounds', function () {
      assert.throws(
        function () {
          var dish = new pdish(10, 10);
          dish.addCell(11, 3);
        },
        /coordinates out of bounds/
      );
    });
    it('adding non-edge-non-corner cell to empty dish increases count of living cells by 1 and candidates by 8', function () {
      var dish = new pdish(10, 10);
      dish.addCell(3, 3);
      assert.equal(dish.living.size, 1);
      assert.equal(dish.candidates.size, 8);
    });
    it('adding edge cell to empty dish increases count of living cells by 1 and candidates by 5', function () {
      var dish = new pdish(10, 10);
      dish.addCell(0, 3);
      assert.equal(dish.living.size, 1);
      assert.equal(dish.candidates.size, 5);
    });
    it('adding corner cell to empty dish increases count of living cells by 1 and candidates by 3', function () {
      var dish = new pdish(10, 10);
      dish.addCell(0, 0);
      assert.equal(dish.living.size, 1);
      assert.equal(dish.candidates.size, 3);
    });
    it('adding (0, 0) and (0, 1) to empty dish increases count of living cells by 2 and candidates by 4', function () {
      var dish = new pdish(10, 10);
      dish.addCell(0, 0);
      dish.addCell(1, 0);
      assert.equal(dish.living.size, 2);
      assert.equal(dish.candidates.size, 4);
    });
    it('adding (0, 1) and (1, 1) to empty dish increases count of living cells by 2 and candidates by 7', function () {
      var dish = new pdish(10, 10);
      dish.addCell(0, 1);
      dish.addCell(1, 1);
      assert.equal(dish.living.size, 2);
      assert.equal(dish.candidates.size, 7);
    });
    it('adding (1, 1) and (1, 2) to empty dish increases count of living cells by 2 and candidates by 9', function () {
      var dish = new pdish(10, 10);
      dish.addCell(1, 1);
      dish.addCell(1, 2);
      assert.equal(dish.living.size, 2);
      assert.equal(dish.candidates.size, 10);
    });
  });

  describe('evolution', function () {
    it('a petridish with only one cell dies in the next generation', function () {
      var dish = new pdish(10, 10);
      dish.addCell(3, 5);
      dish.nextgen();
      assert.ok(dish.isDead());
    });
    it('new petridish doesn\'t spawn new life in the next generation', function () {
      var dish = new pdish(10, 10);
      dish.nextgen();
      assert.ok(dish.isDead());
    });
    it('new petridish with 2 neighboring cells dies in the next generation', function () {
      var dish = new pdish(10, 10);
      dish.addCell(3, 5);
      dish.addCell(3, 6);
      dish.nextgen();
      assert.ok(dish.isDead());
    });
    it('new petridish with square arrangement of 4 cells remains the same in the next generation', function () {
      var dish = new pdish(10, 10);
      dish.addCell(3, 5);
      dish.addCell(3, 6);
      dish.addCell(4, 6);
      dish.addCell(4, 5);
      dish.nextgen();
      assert.equal(dish.living.size, 4);
      assert.ok(dish.living.has('3,5'));
      assert.ok(dish.living.has('3,6'));
      assert.ok(dish.living.has('4,5'));
      assert.ok(dish.living.has('4,6'));
    })
  });
});
