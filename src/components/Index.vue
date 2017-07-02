<template>
  <div>


    <div class="layout-padding" style="max-width: 900px">
      <div class="card">
        <div class="card-title bg-primary text-white">
            Welcome to this useless App
        </div>
        <div class="card-content">


          <div class="layout-padding">


                <p class="caption">
                  There isn't much to do around here:
                </p>

            <div class="list no-border centerme" v-for="(place, i) in items" key="i">

              <router-link
                tab="div"
                class="item item-link two-lines"
                :to="place.path">
                <img class="item-primary" :src="place.avatar">
                <div class="item-content">
                  <div>{{place.title}}</div>
                  <div>{{place.description}}</div>
                </div>
              </router-link>


            </div>



          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {title: 'Dr. Acula Game', description: 'Become a vampire doc', avatar: './statics/dracula-light.jpg', path: '/dracula'},
        {title: 'Conways Game Of life', description: 'Create life, and evolve', avatar: './statics/bacteria128.png', path: '/game-of-life'},
        {title: 'Zen Paintings', description: 'Zen paintings from the Rijksmuseum', avatar: './statics/monalisa128.jpg', path: '/zen-paintings'}
      ]
    }
  },
  computed: {
    getPath: function (ind) {
      return this.items[ind].path
    }
  }
}
</script>

<style scoped>
  .centerme {
    max-width: 300px;
    margin: auto;
  }
</style>
