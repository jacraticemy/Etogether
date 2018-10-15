<template>
  <div id="app">
    <head-tab></head-tab>
    <div :style="{minHeight: minHeight + 'px'} "  class="wholePage">
      <slideShow></slideShow>
      <router-view/>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import headTab from '../src/components/common/headTab'
import slideShow from '../src/components/common/slideShow'
import bottom from '../src/components/common/bottom'
export default {
  name: 'App',
  data(){
        return{
            minHeight: 0
        }
    },
    mounted(){
        this.minHeight = document.documentElement.clientHeight - 133;
        var that = this;
        window.onresize = function(){
            that.minHeight = document.documentElement.clientHeight - 133;
        }
    },
  components: {
    headTab,
    slideShow,
    bottom
  }
}
    
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
  overflow-x:hidden;
}
.wholePage{
  /* box-sizing: border-box;
  padding: 0 160px; */
  width: 1100px;
  margin: 0 auto;
}
.element::-webkit-scrollbar {width:0px}
</style>
