<template>
    <div class="signleave" @click="hideDatetime">
        <ictheader></ictheader>
        <div class="leaveday">
            请假日期：<span class="thedate" id="datetime-view" @click="showDatetime">{{valuetoday}}</span>
        </div>
        <div class="leavereason">
            请假事由：<textarea></textarea>
        </div>
        <button class="leavebutton">提交</button>
        <datetime-view  id="datetime-view" v-show="ifshow" v-model="valuetoday" :format="format"></datetime-view>
    </div>
</template>
<script>
import ictheader from '../components/common/ictheader'
import { DatetimeView } from 'vux'

export default {
    data(){
        return{
            valuetoday: '',
            showPopup: false,
            format: 'YYYY-MM-DD',
            ifshow:false
        }
    },
    components:{
        ictheader,
        DatetimeView
    },
    methods:{
        showDatetime(){
            this.ifshow = true;
        },
        hideDatetime(event){
            if(event.target.id != 'datetime-view'){
                this.ifshow = false;
            }
        }
    },
    mounted(){
        var now = new Date();
	    var year = now.getFullYear(); 
	    var month = now.getMonth();
        var date = now.getDate();
        this.valuetoday = year + '-' + month + '-' + date;
    }
}
</script>
<style scoped>

.leaveday{
    height: 10vh;
    width: 80%;
    line-height: 50px;
    margin: 0 auto;
    padding: 0;
}
.thedate{
    display: inline-block;
    border: 1px solid black;
    width: 60%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    margin-left: 5px;

}
.leavereason{
    width: 80%;
    margin: 0 auto;
    height: 50%;
}
.leavereason textarea{
    border: 1px solid black;
    margin-left: 5px;
    width: 60%;
    height: 45vh;
    vertical-align: top;
}
.leavebutton{
    position: absolute;
    bottom: 20%;
    width: 50%;
    left: 25%;
    height: 30px;
}

</style>
