<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <table>
      <tr>
        <td>root: {{ root }}</td>
        <td>premium: {{ premium }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { getRoot, getPremium } from './api.js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      root : [],
      premium : []
    }
  },
  async mounted() {
    this.root = await getRoot();
    this.premium = await getPremium();
  },
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
