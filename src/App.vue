<template>
  <div id="app">
    <app-navigation></app-navigation>
    <!-- {{denthub}} -->
    

  </div>
</template>

<script>
import AppNavigation from './components/shared/Navigation.vue';

export default {
  name: 'App',
  components: {
     AppNavigation,
  },
  data() {
    return {
      //denthub
    };
  }
}
</script>

<style>

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
