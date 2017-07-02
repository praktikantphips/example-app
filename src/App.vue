<template>
  <div id="q-app">
    <q-layout>

      <!-- =============================================== -->
      <!--                      HEADER                     -->
      <!-- =============================================== -->
      <div slot="header" class="toolbar">
        <!-- opens left-side drawer using its ref -->
        <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
          <i>menu</i>
        </button>
        <q-toolbar-title :padding="1">
          Useless App
        </q-toolbar-title>
        <a href="https://github.com/praktikantphips/example-app" class="text-white"><i>code</i>Source</a>
      </div>
      <!-- =============================================== -->



      <!-- =============================================== -->
      <!--                DRAWER ON LEFT SIDE              -->
      <!-- =============================================== -->
      <q-drawer ref="leftDrawer">
        <div class="toolbar light">
          <q-toolbar-title :padding="1">
              Drawer
          </q-toolbar-title>
        </div>
        <div class="list no-border platform-delimiter">
          <q-drawer-link icon="home" to="/">Home</q-drawer-link>
          <q-drawer-link icon="local_hospital" to="/dracula">Dr. Acula game</q-drawer-link>
          <q-drawer-link icon="palette" to="/zen-paintings">Zen Paintings</q-drawer-link>
          <q-drawer-link icon="videogame_asset" to="/game-of-life">Game Of Life</q-drawer-link>
        </div>
      </q-drawer>
      <!-- =============================================== -->




      <router-view class="layout-view"></router-view>

    </q-layout>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style></style>
