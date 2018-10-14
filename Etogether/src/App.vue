<template>
  <div id="app">
    <div class="wholePage">
      <head-tab></head-tab>
      <slideShow></slideShow>
      <router-view/>
      <bottom></bottom>
    </div>
  </div>
</template>

<script>
import headTab from '../src/components/common/headTab'
import slideShow from '../src/components/common/slideShow'
import bottom from '../src/components/common/bottom'
export default {
  name: 'App',
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
}
.wholePage{
  padding: 0 160px;
}
</style>
