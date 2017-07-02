<template>
  <div>
    <div class="layout-padding">

        <div class="flex row justify-center wrap">
          <p class="text-red"> SORRY. DRAWING ON CANVAS NOT IMPLEMENTED YET.</p>
        </div>
        <div class="flex row justify-center wrap">
          <p class="caption" style="max-width: 400px">
          drag and press your mouse on the canvas to spawn new life.

          </br></br>
          All creatures are social. If there are too few of them around life
          dies.  If there are too many creatures they die through overcrowding.
          Find a happy medium
          </p>
        </div>

        <div class="flex row justify-center wrap">
          <canvas id="gol" width="250" height="250"></canvas>
        </div>
        <div class="flex row justify-center wrap" style="padding-top: 20px">
          <div class="button-row">
            <button class="primary" @click="start()">Start</button>
          </div>
          <div class="button-row">
            <button class="primary" @click="stop()">Stop</button>
          </div>
          <div class="button-row">
            <button class="primary" @click="renew()">New Game</button>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
import { PetriDish } from '../gameoflife'
export default {
  data () {
    return {
      backgroundcolor: '#e3e3e3',
      bacteriacolor: '#027be3',
      dimension: 250,
      game: {},
      ctx: {},
      interval: {}
    }
  },
  mounted: function () {
    this.renew()
  },
  methods: {
    start: function () {
      this.interval = setInterval(this.tick, 100)
    },
    stop: function () {
      clearInterval(this.interval)
    },
    renew: function () {
      this.game = new PetriDish(this.dimension, this.dimension)
      for (var i = 0; i < 6000; i++) {
        var randx = Math.floor(Math.random() * this.dimension)
        var randy = Math.floor(Math.random() * this.dimension)
        this.game.addCell(randx, randy)
      }
      var c = document.getElementById('gol')
      this.ctx = c.getContext('2d')
      this.clear()
      this.drawLife()
    },
    drawLife: function () {
      this.ctx.fillStyle = this.bacteriacolor
      for (let cell of this.game.living) {
        var vals = cell.split(',')
        var x = parseInt(vals[0])
        var y = parseInt(vals[1])
        this.ctx.fillRect(x, y, 1, 1)
      }
    },
    clear: function () {
      this.ctx.fillStyle = '#e3e3e3'
      this.ctx.fillRect(0, 0, this.dimension, this.dimension)
    },
    tick: function () {
      this.game.nextgen()
      this.clear()
      this.drawLife()
    }
  }
}
</script>

<style scoped>
  .button-row button{
    margin-left: 10px;
  }
</style>
