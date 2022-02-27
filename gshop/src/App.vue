<template>
  <div id="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components: {FooterGuide},
  mounted () {
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getAllCategories')
    this.$store.dispatch('getallshops')
    // this.getAddress111()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .app
   width: 100%;
   height: 100%;
   background: #f5f5f5;
   position: relative;
</style>
