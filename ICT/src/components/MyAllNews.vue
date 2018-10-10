<template>
  <div class="MyAllNews">
    <ictheader></ictheader>
    <MyNews v-for="item in mynewsList" :name='item.comment_name' :time='item.created_at' :reply="item.content" :pname="item.name" :replyNewsAb="item.topic"></MyNews>
  </div>
</template>

<script>
import axios from 'axios'
import ictheader from '../components/common/ictheader'
import MyNews from '../components/common/MyNews'
export default {
  name: 'MyAllNews',
  data () {
    return {
      mynewsList:[]
    }
  },
  components:{
      ictheader,
      MyNews
  },
  mounted(){
    axios.post('http://172.20.10.11:8080/ict/api/Comment/MyMessage',
    {
      member_id:this.GLOBAL.member_id,
      page:1
    })
    .then(res=>{
      console.log(res)
      this.mynewsList = res.data.data;
      for(var i in this.mynewsList){
        this.mynewsList[i].created_at = this.formatTime(this.mynewsList[i].created_at)
      };
    })
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
.MyAllNews{
  height: 100%;
  background-color: #EFEEF4;
}
</style>
