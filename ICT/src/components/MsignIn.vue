<template>
    <div class="MsignIn">
        <ictheader></ictheader>
        <div>
            <tab active-color="blue" bar-active-color="blue">
                <tab-item selected @on-item-click="onItemClick">未签到</tab-item>
                <tab-item @on-item-click="onItemClick">已签到</tab-item>
            </tab>
            <div class="if-sign">
                <ul v-show="ifshow">
                    <li v-for="item in SignList" v-if="item.state==='0'"><div>{{item.name}}</div><div>未签到</div></li>
                </ul>
                <ul v-show="!ifshow">
                    <li v-for="item in SignList" v-if="item.state==='1'"><div>{{item.name}}</div><div>签到成功</div></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import ictheader from '../components/common/ictheader'
import { Tab, TabItem } from 'vux'
import axios from 'axios'
export default {
    data(){
        return{
            ifshow:true,
            SignList:{}
        }
    },
    components:{
        ictheader,
        Tab,
        TabItem
    },
    methods:{
        onItemClick(){
            this.ifshow = !this.ifshow
        },
        deviceList(){

        }
    },
    mounted(){
        axios.get('http://172.20.10.11:8080/ict/api/Member/LastSign')
        .then(res=>{
            console.log(res);
            this.SignList = res.data.data.sign_result;
            this.deviceList();
        })
    }
}
</script>
<style scoped>
.if-sign ul li{
    width: 100%;
    display: flex;
    border-bottom: 1px solid #808080;
    padding: 8px 0;
}
.if-sign ul li div{
    width: 50%;
    text-align: center;
}
</style>
