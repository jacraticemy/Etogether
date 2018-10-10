<template>
  <div >
    <x-header style="background-color: #5087d0;">ICT云端</x-header>
  </div>
</template>

<script>
import {XHeader} from 'vux'
export default {
  name: 'ictheader',
  data () {
    return {
    }
  },
  components:{
    XHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
    width: 100%;
    position: fixed;
    top: 0;
    height: 64px;
    background-color: #3366cc;
    text-align: center;
    line-height: 64px;
    color: #fff;
}
.empty{
  height: 64px;
  width: 100%;
}
</style>
