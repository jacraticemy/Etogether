<template>
  <div class="ictbottom">
    <!-- <div class="left"><router-link to="/HomePage"><i class="icon-shouye iconfont icon"></i><br/>首页</router-link></div>
    <div class="right"><router-link to="/MyInfo"><i class="icon-iconfuzhi iconfont icon"></i><br/>我的</router-link></div> -->
    <tabbar>
      <tabbar-item link="/HomePage">
        <img slot="icon" src="../../../static/icon/首页.png">
        <!-- <img slot="icon-active" src="../../../static/icon/首页.png"> -->
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item   link="/MyInfo">
        <img slot="icon" src="../../../static/icon/我的.png">
        <!-- <img slot="icon-active" src="../../../static/icon/我的.png"> -->
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components:{
    Tabbar,TabbarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('http://at.alicdn.com/t/font_798777_r0klozi9eah.css');
a{
    text-decoration: none;
    color: #0a3c64;
}
.router-link-active {
    text-decoration: none;
    color: #5087d0;
}
.ictbottom{
    height: 50px;
    display: flex;
    width: 100%;
    color: #0a3c64;
    position: fixed;
    bottom: 0;
    background-color: #d7d7d7;
}
.icon{
    font-size: 25px;
}
.left{
    text-align: center;
    height: 64px;
    width: 50%;
    border-right: 1px solid #fff;
}
.right{
    text-align: center;
    height: 64px;
    width: 50%;
    border-left: 1px solid #fff;
}
</style>
