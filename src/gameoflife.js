// Again.. this is probably just Java code with Javascript syntax
// it's way more convoluted than it needs to be
// for now all i care is that it works. sorry
// TODO: CLEAN THIS UP

/**
 * Represents the Petridish for Conways game of life
 * @constructor
 * @param {Number} - width of the dish
 * @param {Number} - height of the dish
 */
function PetriDish (width, height) {
  this.width = validate(width)
  this.height = validate(height)
  this.living = new Set()
  this.candidates = new Set()

  /**
   * Determines if the game has ended
   * @returns {Boolean} - true if game is over ie. all cells are dead
   */
  this.isDead = function () {
    return this.living.size === 0
  }

  /**
   * Moves the game of life one generation forward
   */
  this.nextgen = function () {
    this.newliving = new Set()
    this.newcandidates = new Set()
    var newgeneration = []

    // update all living cells
    for (let cell of this.living) {
      var num = this.getNumOfLivingNeighbors(cell)
      if (survives(num)) {
        newgeneration.push(cell)
      }
    }
    // update all spawn candidates
    for (let cell of this.candidates) {
      num = this.getNumOfLivingNeighbors(cell)
      if (isSpawned(num)) {
        newgeneration.push(cell)
      }
    }
    this.living = new Set()
    this.candidates = new Set()
    var ref = this
    newgeneration.forEach(function (cell) {
      var vals = cell.split(',')
      var x = parseInt(vals[0])
      var y = parseInt(vals[1])
      ref.addCell(x, y)
    })
  }

  /**
   * adds living cell at (x, y) to petridish
   * @param {Number} - x coordinate
   * @param {Number} - y coordinate
   */
  this.addCell = function (x, y) {
    var nx = validate(x)
    var ny = validate(y)
    // creating string representation of this point
    // i'm doing this because javascripts equality testing is
    // completely mad and i need to use a primitive datatype for the set
    // object to work
    var newcell = nx + ',' + ny
    if (!this.withinBounds(nx, ny)) {
      throw new Error('cell coordinates out of bounds')
    }
    this.living.add(newcell)

    if (this.candidates.has(newcell)) {
      this.candidates.delete(newcell)
    }

    var neighbors = this.getNeighbors(nx, ny)
    var ref = this
    neighbors.forEach(function (item) {
      if (!ref.living.has(item)) {
        ref.candidates.add(item)
      }
    })
  }

  /**
   * Returns list of neighbor points of point at (x, y) (8-neighborhood)
   * @param {Number} - x coordinate
   * @param {Number} - y coordinate
   * @returns {Array} - Array of Points ['x,y', ...]
   */
  this.getNeighbors = function (x, y) {
    var neighbors = []
    var xstart = x - 1
    var xstop = x + 1
    var ystart = y - 1
    var ystop = y + 1
    for (var xn = xstart; xn <= xstop; xn++) {
      for (var yn = ystart; yn <= ystop; yn++) {
        if (this.withinBounds(xn, yn) && !(xn === x && yn === y)) {
          neighbors.push(xn + ',' + yn)
        }
      }
    }
    return neighbors
  }

  /**
   * Returns number of living neighbors of point 'x,y'
   * @param {String} - string representation of a point (x, y) = 'x,y'
   * @return {Number} - number of living neighbors
   */
  this.getNumOfLivingNeighbors = function (cell) {
    var vals = cell.split(',')
    var x = parseInt(vals[0])
    var y = parseInt(vals[1])
    var n = this.getNeighbors(x, y)
    var total = 0
    var ref = this
    n.forEach(function (strRep) {
      if (ref.living.has(strRep)) {
        total += 1
      }
    })
    return total
  }

  /**
   * natural selection applied to spawn candidates
   * @access private
  */
  function isSpawned (numofNeighbors) {
    if (numofNeighbors === 3) {
      return true
    }
    else {
      return false
    }
  }

  /**
   * natural selection applied  to living cells
   * @access private
  */
  function survives (n) {
    if (n === 2 || n === 3) {
      return true
    }
    else {
      return false
    }
  }

  /**
   * make sure input is a number
   * @access private
  */
  function validate (x) {
    // simple type checking
    if (typeof x !== 'number') {
      throw new Error('dimension must be an integer')
    }
    else {
      if (x < 0) {
        throw new Error('dimension must be a positive integer')
      }
      else {
        // make sure we have an int
        return Math.floor(x)
      }
    }
  }

  /**
   * checks if coordinates are out of bounds
   * @param {Number} - x coordinate
   * @param {Number} - y coordinate
   * @returns {Boolean} - true if within the bounds of petridish
   */
  this.withinBounds = function (x, y) {
    return (x >= 0 && x < this.width) && (y >= 0 && y < this.height)
  }
}

export {PetriDish}
