<template>
  <div id="app">
    <h1>let's go somewhere</h1>
    <hr>
    <router-link to="/">Home</router-link>
    <router-link to="/users/10">Users:10</router-link>
    <router-link to="/users/12">Users:12</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
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

h1, h2 {
  font-weight: normal;
}

</style>
