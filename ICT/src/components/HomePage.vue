<template>
  <div class="HomePage">
    <x-header :left-options="{showBack: false}" style="background-color:#5087d0">ICT云端</x-header>
    <div class="HomePage-head">
        <div class="header"><img src="../../static/icon/notice.png"/>通知栏</div>
        <div>
            <h4>{{title}}</h4>
            <div class="notice">{{notice}}</div>
        </div>
        <span class="morenotice"><router-link to="/MoreNotice">更多通知<img src="../../static/icon/more.png"/></router-link></span>
    </div>
    <div class="HomePage-middle">
        <ul>
            <li @click="gotoSign"><i class="icon iconfont icon-kaoqin"></i>实时考勤</li>
            <li><router-link to="/ResourceSharing"><i class="icon iconfont icon-986caidan_ziyuangongxiang"></i>资源共享</router-link></li>
            <li><router-link to="/discuss"><i class="icon iconfont icon-taolun"></i>讨论专区</router-link></li>
            <!-- <li><router-link to="/grades"><i class="icon iconfont icon-chengjiguanli"></i><br/>成绩</router-link></li> -->
        </ul>
    </div>
    <ictbottom></ictbottom>
  </div>
</template>

<script>
import axios from 'axios'
import ictheader from '../components/common/ictheader'
import ictbottom from '../components/common/bottom'
import {XHeader} from 'vux'
export default {
  name: 'HomePage',
  data () {
    return {
        notice:'',
        title:''
    }
  },
  components: {
      ictheader,
      ictbottom,
      XHeader
  },
  created(){
        axios.get('http://172.20.10.11:8080/ict/api/Notice/LatestNotice')
        .then(res=>{
             this.notice = res.data.data.content;
             this.title = res.data.data.topic;
        })
  },
  methods:{
      gotoSign(){
          if(this.GLOBAL.is_manager == 1){
              this.$router.push('/signTeacher')
          }else{
              this.$router.push('/signIn')
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('http://at.alicdn.com/t/font_798777_r0klozi9eah.css');
.HomePage{  
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: #EFEEF4;
    overflow: hidden;
}
.HomePage-head{
    width: 100%;
    border-bottom: 1px solid #EFEEF4;
    padding-bottom: 25px;
    border-radius: 5px;
    background-color: #FEFEFE;
}
.header{
    width: 100%;
    height: 5vh;
    line-height: 5vh;
    font-size: 14px;
    color: #848484;
    border-bottom: 1px solid #EFEEF4;
    padding-left: 20px;
}
.header img{
    width: 25px;
    vertical-align: middle;
}
h4{
    text-align: center;
    padding: 10px;
    color: #363636;
}
.notice{
    padding: 0 25px;
    font-size: 14px;
    color: #363636;
}
.morenotice{
    font-size: 12px;
    position: absolute;
    right: 30px;
}
.morenotice img{
    width: 12px;
    vertical-align: middle;
}
.morenotice a{
    color: #848484;
}
.HomePage-middle{
    margin-top: 50px;
    width: 100%;
    text-align: center;
    height: 250px;   
}
.HomePage-middle ul{
    margin: 0 auto;
    height: 60vh;
    display: flex;
    width: 95%;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
.HomePage-middle ul li{
    width: 100%;
    height: 25%;
    line-height: 350%;
    border-radius: 15px;
    background-color: #FEFEFE;
    /* border: 1px solid #848484; */
    font-size: 30px;
    position: relative;
    color: #5087d0;
}
.HomePage-middle ul li a{
    color: #5087d0;
}
.icon{
    font-size: 32px;
    color: #5087d0;
    vertical-align: middle;
    margin-right: 5px;
    position: absolute;
    top: -4.5vh;
    right: 0;
}
</style>
