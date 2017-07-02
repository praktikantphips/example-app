<template>
  <div>

    <div v-if="disaster">
      <p class="caption">
        It appears that you are offline. We have not stored any of the images
        you looked at on your last visit, because the Rijksmuseum API serves
        high quality images. The files are huge.</br>
        Please try again when you are back online
      </p>
    </div>

    <div v-else>
      <div v-show="gallery.length !== 0">
        <p class="caption">{{title}}</p>
        <q-gallery-slider :src="gallery" fullscreen v-on:slide="setNewTitle($event)"></q-gallery-slider>
      </div>
      <div class="row flex justify-center wrap" style="padding-top: 20px">
        <button class="primary" @click="fetchImages()">
          Get lovely images
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      gallery: [],
      titles: [],
      title: '',
      disaster: false
    }
  },
  methods: {
    fetchImages: function () {
      // there are 4302 paintings at the rijksmuseum that have been
      // photographed and made available through their api
      // per default the api returns 10 results per query
      // so a total of 430 pages exist
      // we want to view at "random" set of 10 images
      var pagenr = Math.floor(Math.random() * 430) + 1
      var url = 'https://www.rijksmuseum.nl/api/en/collection?key=tsPl33Xq&format=json&type=painting&imgonly=True&p=' + pagenr
      var ref = this
      axios.get(url).then(function (response) {
        var paintings = response.data.artObjects
        ref.gallery = []
        ref.titles = []
        paintings.forEach(function (painting) {
          ref.gallery.push(painting.webImage.url)
          ref.titles.push(painting.longTitle)
        })
      })
      .catch(function (error) {
        // something went wrong in our request
        // notify user
        console.log(error)
        ref.disaster = true
      })
    },
    setNewTitle: function (param) {
      this.title = this.titles[param]
    }
  }
}
</script>

<style>
</style>
