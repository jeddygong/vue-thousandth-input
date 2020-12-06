<template>
  <div id="app">
    <thousandth
      v-model="value"
    />

    <h5><br>Value is: {{ value }}</h5>
  </div>
</template>

<script>
import thousandth from './../components/thousandth.vue'

export default {
  name: 'App',
  components: {
    thousandth
  },
  data () {
    return {
      value: ''
    }
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
