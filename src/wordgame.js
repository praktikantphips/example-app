// I really don't know if this is the right way of writing Javascript
// I think this is just Java code with Javascript syntax, and that's probably
// not a good thing

/**
 * Datastruct that represents a Word game, where you decipher anagrams
 * @constructor
 * @param {string} inputWord - gets turned to an anagram and the user guesses original input
 */
function Wordgame (inputWord) {
  // ----------------------------------------
  //               fields
  // ----------------------------------------
  this.word = validate(inputWord)
  this.shuffledWord = shuffle(inputWord)
  this.attempts = 0
  this.totalNrOfWords = 1
  this.solvedWords = 0
  this.hasAlreadyBeenSolved = false

  // ----------------------------------------
  //               methods
  // ----------------------------------------

  /**
   * Move the game state one step forward by starting a new word challenge
   * @param {string} aword - The new word that the user will have to guess
   */
  this.nextWord = function (aword) {
    // moves game state one step forward
    this.word = validate(aword)
    this.shuffledWord = shuffle(aword)
    this.totalNrOfWords += 1
    this.hasAlreadyBeenSolved = false
  }

  /**
   * Checks if a given solution is correct
   * @param {string} solution - The guess supplied by the user
   */
  this.isCorrect = function (solution) {
    // checks if given solution is correct
    // only count attempts if this particular word has not been solved before
    // same for num of solved words
    solution = solution.toUpperCase()
    var actual = this.word.toUpperCase()
    if (this.hasAlreadyBeenSolved) {
      if (actual === solution) {
        return true
      }
      else {
        return false
      }
    }
    else {
      this.attempts += 1
      if (actual === solution) {
        this.hasAlreadyBeenSolved = true
        this.solvedWords += 1
        return true
      }
      else {
        return false
      }
    }
  }

  this.reshuffle = function () {
    this.shuffledWord = shuffle(this.word)
  }

  /**
   * Returns current game score
   * @returns {Number} - current score
   */
  this.score = function () {
    // returns score in percentages
    if (this.attempts === 0) {
      return 0
    }
    else {
      return Math.floor((this.solvedWords / this.attempts) * 100)
    }
  }

  // ----------------------------------------------
  //          pseudo private methods
  function validate (aword) {
    // some simple 'typechecking' to avoid confusing debugging later on
    if (typeof aword !== 'string') {
      throw new Error('You tried to initialize Wordgame with a non-string value')
    }
    else if (aword.length === 0) {
      throw new Error('You tried to initialize Wordgame with an empty string')
    }
    else if (aword.match(/[^a-z]/i)) {
      throw new Error('You tried to initialize Wordgame with a string that contains non-alpha characters')
    }
    else {
      return aword
    }
  }

  function shuffle (aword) {
    // this function shuffles a word and returns a scrambled anagram
    // of its input word
    //
    // this is implemented with the fisher-yates shuffle
    var wordArray = aword.split('')
    // shuffle the char Arra randomly
    for (var i = wordArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = wordArray[j]
      wordArray[j] = wordArray[i]
      wordArray[i] = temp
    }
    // wordArrayay of chars -> string
    // now we've got our shuffled word
    return wordArray.join('')
  }
}

module.exports = Wordgame
