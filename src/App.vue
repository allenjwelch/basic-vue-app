<template>
  <div id="app">
    <Header :title="title"/>
    <div class="main">
        <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
  data() {
      return {
          title: "Vue App",
      }
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
