<template>
  <div id="app">
    <GoodsList></GoodsList>
    <!-- <Cart></Cart> -->
  </div>
</template>

<script>
import GoodsList from './views/GoodsList'

export default {
  name: 'app',
  components: {
    GoodsList,


  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
