<template>
  <div>
    <ictheader></ictheader>
    <x-table :full-bordered="false" :content-bordered="true" :cell-bordered="false">
        <thead>
          <tr>
            <th>排名</th>
            <th>姓名</th>
            <th>学号</th>
            <th>分数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in grades">
            <td>{{item.num}}</td>
            <td>{{item.name}}</td>
            <td>{{item.stuID}}</td>
            <td>{{item.mark}}</td>
          </tr>
        </tbody>
      </x-table>
  </div>
</template>

<script>
import axios from 'axios'
import ictheader from '../components/common/ictheader'
import { XTable } from 'vux'

export default {
  data () {
    return {
      grades:{}
    }
  },
  components:{
      ictheader,
      XTable
  },

  mounted(){
    axios.get('http://rapapi.org/mockjsdata/36307/grades')
    .then(res=>{     
        this.grades = res.data.grades
        console.log(this.grades)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
