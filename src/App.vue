<template>
  <div id="app">
    <Header />
    <div class="main">
        <router-view></router-view>

        <!-- <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Fresh from './components/FreshComponent.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header, 
    Footer, 
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .main {
    padding: 20px;
    min-height: calc(100vh - 50px - 30px - 40px);

  }
  img {
    // display: block; 
    // margin: 0 20%; 
  }
}
</style>
