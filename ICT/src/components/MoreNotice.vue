<template>
  <div class="MoreNotice">
    <ictheader></ictheader>
    <ul>
        <li v-for="item in MoreNotice">
            <h4>日常通知</h4>
            <div class="notice">{{item.content}}</div>
            <div class="time">{{item.created_at}}</div>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import ictheader from '../components/common/ictheader'
export default {
  name: 'MoreNotice',
  data () {
    return {
        MoreNotice:{}
    }
  },
  components:{
      ictheader
  },
  mounted(){
        axios.get('http://172.20.10.11:8080/ict/api/Notice/MoreNotice')
        .then(res=>{
            this.MoreNotice = res.data.data.data
            for(var i in this.MoreNotice){
                this.MoreNotice[i].created_at = this.formatTime(this.MoreNotice[i].created_at)
            }
        });
        
  },
  methods:{
      add0(m){
          return m<10?'0'+ m : m
      },
      formatTime(timePoint){
          var time = new Date(timePoint);
            var y = time.getFullYear();
            var m = time.getMonth()+1;
            var d = time.getDate();
            return y+'-'+this.add0(m)+'-'+this.add0(d);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MoreNotice{
    height: 100%;
    background-color: #efeef4;
}
.MoreNotice ul li{
    background-color: #FEFEFE;
    margin-top: 14px;
}
h4{
    width: 100%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-weight: normal;
    border-bottom: 1px dotted #efeef4;
}
.notice{
    padding: 20px;
    font-size: 14px;
    border-bottom: 1px dotted #efeef4;
}
.time{
    text-align: center;
    padding: 5px 0;
    font-size: 14px;
    color: #808080;
}
</style>
