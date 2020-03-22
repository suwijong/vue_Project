<template>
  <div id="appContainer">
      <router-view></router-view>
      <FooterNav v-show="$route.meta.isShowFooter"/>
     
  </div>
</template>

<script type="text/ecmascript-6">
import FooterNav from './components/footerNav/footerNav'
  export default {
    components:{FooterNav}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>

