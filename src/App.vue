<template>
  <div id="app">
    <RideList />
  </div>
</template>

<script>
import RideList from './components/RideList';

export default {
  name: 'App',
  components: {
    RideList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
