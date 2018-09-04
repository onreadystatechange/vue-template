<style>
  #app{
    min-width: 320px;
    max-width: 750px;
    margin: 0 auto;
    position: relative;
  }
</style>
<template>
  <div id="app">
    
   <router-view></router-view>

   <!-- foot nav.-->
  </div>
</template>

<script>
import store from './store/'
export default {
  data() {
    return {
      
    }
  },
  methods: {
    handleGoback() {
      this.$router.back()
    }
  },
  watch: {
    '$route' (to, from) {
      /**
       * 页面跳转清楚绑定的 禁止页面滚动事件.
       * 在选择车款和搜索车款的时候回向window添加禁止页面滚动事件，如果没有清除直接点击回退，会出现页面不能滚动bug.
       * @clear bind forbid scroll
       */
      basics.bindWinOpenScroll()
    }
  }
}
</script>
