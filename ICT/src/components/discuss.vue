<template>
  <div class="hello">
    <ictheader></ictheader>
    <ictshare v-for="item in ResourceSharing" :released_id="item.released_id" :name="item.name" :time="item.created_at" :abstract="item.topic"></ictshare>
    <router-link to="/release2"><img class="release" src="../../static/icon/add_circle.png"/></router-link>

  </div>
</template>

<script>
import axios from 'axios'
import ictheader from '../components/common/ictheader'
import ictshare from '../components/common/share'
export default {
  name: 'ResourceSharing',
  data () {
    return {
      ResourceSharing:{}
    }
  },
  components:{
      ictheader,
      ictshare
  },
  created(){
    this.mounted
  },
  mounted(){
    axios.get('http://172.20.10.11:8080/ict/api/Released/GetTlList')
    .then(res=>{     
      this.ResourceSharing = res.data.data
      for(var i in this.ResourceSharing){
        this.ResourceSharing[i].created_at = this.formatTime(this.ResourceSharing[i].created_at)
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
.release{
  width: 50px;
  height: 50px;
  position: fixed;
  right: 2vh;
  bottom: 2vh;
}
.hello{
  height: 100%;
  background-color: #efeef4;
}
</style>
