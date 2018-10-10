<template>
    <div class="MyInfo">
        <x-header :left-options="{showBack: false}" style="background-color:#5087d0">ICT云端</x-header>
        
        <div class="myinfo">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535209540909&di=5646303940a957fd2af6b5bc2ae169d3&imgtype=0&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F150414%2F00264455X-0.jpg"/>
            <div>
               
                <span class="identity">{{identity_}}</span>
                 <span class="name">{{name}}</span>
            </div>
        </div>
        <router-link to="/MyAllNews">
        <div class="sysitem">
            <i class="iconfont icon-wodexiaoxiicon"></i>我的消息
            <img src="../../static/icon/more.png">
        </div>
        </router-link>
        <router-link to="/changeKey">
        <div class="sysitem">
             <i class="iconfont icon-genggaimima"></i>修改密码
             <img src="../../static/icon/more.png">
        </div>
        </router-link>
        <div class="sysitem">
             <i class="iconfont icon-guanyuwomen"></i>关于我们
             <img src="../../static/icon/more.png">
        </div>
        <button @click="changeUser">切换绑定</button>
        <ictbottom></ictbottom>
    </div>
</template>
<script>
import axios from 'axios'
import ictheader from '../components/common/ictheader'
import ictbottom from '../components/common/bottom'
import {XHeader} from 'vux'
export default {
    data(){
        return{
            name:this.GLOBAL.name,
            identity_:''
        }
    },
    components:{
        ictheader,
        ictbottom,
        XHeader
    },
    created(){
            if(this.GLOBAL.is_manager == 1){
                this.identity_ = '管'
            }else{
                this.identity_ = ''
            }
    },
    methods:{
        changeUser(){
            this.$router.replace('/');
        }
    }
}
</script>
<style scoped>
@import url('http://at.alicdn.com/t/font_798777_r0klozi9eah.css');
.MyInfo{
    overflow: hidden;
    height: 100%;
    background-color: #EFEEF4;
}
.myinfo{
    width: 100%;
    height: 22vh;
    line-height: 100px;
    background-color: #5087d0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 1vh 0;
    /* margin-top: 15px; */
    margin-top: -1px;
    justify-content: center;
}
.myinfo div{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
    height: 3vh;
    line-height: 3vh;
    margin-top: -5px;
}
.myinfo div span{
    display: inline-block;
    width: 15%;
    text-align: center;
    height: 3vh;
    line-height: 3vh;
}
.myinfo img{
    flex: 0;
    width: 85px;
    border-radius: 50%;
    margin-bottom: 3.5vh;
}
.identity{
    display: inline-block;
    /* padding: 3px 8px; */
    width: 18px!important;
    height: 18px !important;
    text-align: center;
    line-height: 18px !important;
    border: 1px solid #fefefe;
    border-radius: 50%;
    color: #fefefe;
    font-size: 12px;
}
.name{
    display: inline-block;
    text-align: center;
    color: #fff;
}
.sysitem{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    margin-top: 20px;
    padding-left: 30px;
    vertical-align: middle;
    background-color: #FEFEFE;
    color: #848484;
    position: relative;
}
.sysitem img{
    width: 30px;
    position: absolute;
    top: 21%;
    right: 5vh;
}
.iconfont{
    font-size: 22px;
    margin-right: 10px;
    position: relative;
    top: 2px;
}
button{
    width: 60%;
    height: 45px;
    border: none;
    background-color:rgb(248, 89, 89);
    border-radius: 5px;
    position: absolute;
    bottom: 20%;
    left: 25%;
    color: #fff;
    font-size: 18px;
}
</style>
