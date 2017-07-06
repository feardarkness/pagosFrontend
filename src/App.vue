<template>
  <div id="app">
    <div class="container">
      <img src="./assets/logo.png">
      <h1>Esto debería estar en todo lado, por eso está, cambiar por los headers y esas cosas...</h1>
      <hr />
      <div class="columns">
        <div class="column">
          <!-- crea transiciones entre los routers :O -->
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <!-- Sticky footer investigar -->
    <footer>
      <div class="container">
        <h2>Agetic @ 2017</h2>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  /* useless just for testing */
  background-color: white;
}
</style>
