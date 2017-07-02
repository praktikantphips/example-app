<template>
<div>
  <div class="layout-padding">
      <div class="card">

        <q-parallax src="../statics/dracula-light.jpg" :height="150">
          <div slot="loading">Loading...</div>
        </q-parallax>

        <div class="card-content">
          <div v-if="disaster">
            <!-- disaster case where user is offline and there is nothing in localStorage -->
            <p class="caption">
              It appears that you are offline. We were not able to find any remaining
              data from you last visit. Please try again when you are back online
            </p>
          </div>
          <div v-else>
            <div v-if="hasStarted">
              <q-collapsible label="Now What?">
                <div>
                  <p class="caption">
                    Unscramble this word. All words are German and all words
                    are Hauptwörter. Some of the words are really weird, so
                    don't hesitate to check duden. Lots of practice will
                    guarantee that you ace your MedAT entrance exam. Shuffling
                    letters around is apparently a vital skill that every
                    doctor needs.
                  </p>
                </div>
              </q-collapsible>
              <div class="worddisplay">
                <h3>{{shuffledWord}}</h3>
                <div v-if="usersolution === ''">
                  <h3>{{placeholderSolution}}</h3>
                </div>
                <div v-else>
                  <h3>{{usersolution.toUpperCase()}}</h3>
                </div>

                <div style="padding-bottom: 30px">
                  <input v-model="usersolution" placeholder="Enter your solution" @keyup.enter="check()">
                </div>

                <div class="row flex justify-center wrap" style="padding-bottom: 30px">
                  <div class="button-row">
                    <button class="primary" @click="reshuffle()">
                      Reshuffle
                    </button>
                  </div>
                  <div class="button-row">
                    <button class="primary" @click="check()">
                      Check
                    </button>
                  </div>
                  <div class="button-row">
                    <button class="primary" @click="nextw()">
                      Next Word
                    </button>
                  </div>
                </div>

                <div>
                  <p>Word length: {{wordlength}}</p>
                  <q-range v-model="wordlength" :min="5" :max="8" :step="1" markers labelAlways> </q-range>
                    <p>Your score is: {{userscore}}% </p>
                  <q-progress :percentage="userscore"></q-progress>
                </div>

              </div>
            </div>
            <!-- end of hasStarted -->
            <div v-else>
              <p class="caption">
                So you want to become a Doctor! You will have to take the MedAT
                entrance exam. In this exam there is a silly section where you must
                decipher anagrams. Not sure why a doctor needs that skill.
                </br>
                Start the Game to practice your anagram skills
              </p>
              <button class="primary" @click="hasStarted=true">
                Start Game
              </button>
            </div>
          </div>

        </div>
        <q-modal ref="minimizedModalCorrect" class="minimized" :content-css="{padding: '50px'}">
          <h4> Correct! </h4>
          <p>You are a genius!!!</p>
          <button class="green" @click="closeCorrect()">Close Me</button>
        </q-modal>
        <q-modal ref="minimizedModalWrong" class="minimized" :content-css="{padding: '50px'}">
          <h4> Wrong </h4>
          <p>try again.</p>
          <button class="red" @click="closeWrong()">Close Me</button>
        </q-modal>
        <q-modal ref="modalLimitedFeature" class="minimized" :content-css="{padding: '50px'}">
          <h4>It appears you are offline</h4>
          <p>
            The app will continue to work with limited features.
            The app currently has fewer words to choose from for the
            game.
          </p>
          <button class="green" @click="closeLimited(this)">OK</button>
        </q-modal>

        </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Lockr from 'lockr'
import { Toast } from 'quasar'
var Wgame = require('../wordgame')
export default {
  data () {
    return {
      baseURL: 'https://raw.githubusercontent.com/praktikantphips/wlist-pseudo-rest/master/wlist',
      words: {},
      wordlength: 5,
      game: {},
      hasStarted: false,
      usersolution: '',
      disaster: false,
      availableLength: 20
    }
  },
  created: function () {
    // get words from the pretend rest api
    var pagenr = Math.floor(Math.random() * 3)
    var randindex = Math.floor(Math.random() * 100)
    var url = this.baseURL + pagenr + '.json'
    var ref = this
    axios.get(url).then(function (response) {
      // throw new Error('I SCREWED UP')
      ref.words = response.data
      ref.availableLength = 100
      ref.game = new Wgame(ref.words['5'][randindex])
      // save some of it to local storage
      // get 20 words of each length
      var nlimit = 20
      var offlineWords = {
        '5': response.data['5'].slice(0, nlimit),
        '6': response.data['6'].slice(0, nlimit),
        '7': response.data['7'].slice(0, nlimit),
        '8': response.data['8'].slice(0, nlimit)
      }
      Lockr.set('dracula-words', offlineWords)
    })
    .catch(function (error) {
      // something went wrong in our request
      // use localStorage from previous visit to setup the game
      console.log(error)
      console.log('connection error... looking for data in localStorage')
      var result = Lockr.get('dracula-words')
      var offlineIndex = Math.floor(Math.random() * 20)
      // check if we've gotten something
      if (typeof result !== 'undefined') {
        // success
        ref.words = result
        ref.availableLength = 20
        ref.game = new Wgame(result['5'][offlineIndex])
        // notify user of limited functionality
        ref.$refs['modalLimitedFeature'].open()
      }
      else {
        // we are screwed
        ref.disaster = true
      }
    })
  },
  methods: {
    reshuffle: function () {
      this.game.reshuffle()
    },
    check: function () {
      var c = this.game.isCorrect(this.usersolution)
      if (c) {
        this.$refs['minimizedModalCorrect'].open()
      }
      else {
        this.$refs['minimizedModalWrong'].open()
      }
    },
    nextw: function () {
      if (!this.game.hasAlreadyBeenSolved) {
        this.answerToast()
      }
      var len = this.wordlength.toString()
      var randindex = Math.floor(Math.random() * this.availableLength)
      this.game.nextWord(this.words[len][randindex])
      this.usersolution = ''
    },
    closeCorrect: function () {
      this.$refs['minimizedModalCorrect'].close()
    },
    closeWrong: function () {
      this.$refs['minimizedModalWrong'].close()
    },
    closeLimited: function () {
      this.$refs['modalLimitedFeature'].close()
    },
    answerToast: function () {
      Toast.create['negative']({
        html: 'the answer was: ' + this.game.word.toUpperCase(),
        timeout: 6000
      })
    }
  },
  computed: {
    actualWord: function () {
      return this.game.word.toUpperCase()
    },
    shuffledWord: function () {
      return this.game.shuffledWord.toUpperCase()
    },
    userscore: function () {
      return this.game.score()
    },
    placeholderSolution: function () {
      return this.game.word.replace(/./g, '.')
    }
  }
}
</script>

<style>
  .worddisplay {
    text-align: center;
    max-width: 500px;
    margin: auto;
  }
  .button-row {
    margin-left: 15px;
    margin-top: 15px;
  }
</style>
