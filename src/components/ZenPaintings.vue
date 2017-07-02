<template>

  <div>
    <div class="layout-padding">

      <!--- CARD   -->
      <div class="card">



        <!-- title  -->
        <div class="card-title bg-primary text-white">
          Explore the Rijksmuseum
        </div>




        <div class="card-content">
          <div class="row flex justify-center wrap">
            <p class="caption">
              Take a random walk through the Rijksmuseum collection
            </p>
          </div>
          <div class="row flex justify-center wrap">
            <div style="max-width: 400px">
              <gwrapper></gwrapper>
            </div>
          </div>

          <div class="row flex justify-center wrap" style="margin-top: 20px">
            <p class="caption">
              this page uses the <a href="https://www.rijksmuseum.nl/en/api">Rijksmuseum API</a>
            </p>
          </div>

        </div>
        <!-- end card content -->






      </div>
      <!-- END OF CARD -->





    </div>
  </div>






</template>

<script>
import Gwrapper from './Gwrapper'

export default {
  components: {
    'gwrapper': Gwrapper
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
