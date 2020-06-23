<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #717173 !important;
  margin-top: 0px;
}
.st-btn, .st-toolbar{
  background-color: #1d2675 !important;
  color: #ffffff !important;
}
.st-title {
  color: #717173 !important;
}
</style>
