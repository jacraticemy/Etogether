<template>
    <div class="signIn">
        <ictheader></ictheader>
        <div class="countdown">
            {{min}}:{{second}}
        </div>
        <div>
            <div class="text">签到码</div>
            <div class="inputtotal">
                <span class="input">{{num1}}</span>
                <span class="input">{{num2}}</span>
                <span class="input">{{num3}}</span>
                <span class="input">{{num4}}</span>
            </div>
        </div>
        <div class="signsubmit3">输入签到时间<input v-model="totaltime" maxlength="2" type="number"/>分钟</div>
        <button class="signsubmit2" @click="releaseSign">发布签到</button>
        <router-link to="/MsignIn"><button class="signsubmit1">查看签到</button></router-link>
    </div>
</template>
<script>
import axios from 'axios'
import ictheader from '../components/common/ictheader'
import { Countup,AlertModule } from 'vux'
import { setInterval, clearInterval } from 'timers';

export default {
    data(){
        return{
            totaltime:'',
            num1:'',
            num2:'',
            num3:'',
            num4:'',
            hour: '00',
            min: '00',
            second: '00'
        }
    },
    components:{
        ictheader,
        Countup
    },
    mounted(){
        axios.get('http://172.20.10.11:8080/ict/api/Member/GetTime')
        .then(res=>{
            if(res.data.data == null){
                this.hour = '00';
                this.min = '00';
                this.second = '00';
            }else{
                var totaltime = res.data.data;
                this.second = parseInt(totaltime%60);
                this.min = parseInt((totaltime - this.second)/60);
                console.log('second'+this.second);
                console.log('min'+this.min);
                if(this.min>=0 && this.min <=9){
                    this.min = '0' + this.totaltime;
                }
                this.count();
            }
        })
    },
    methods:{
        releaseSign(){
            if(this.totaltime == ''){
                AlertModule.show({
                    title: '提示',
                    content: '请输入签到时间',
                })
            }else{
                axios({
                    method:'post',
                    url:'http://172.20.10.11:8080/ict/api/Member/SetSign',
                    data:{
                        member_id: this.GLOBAL.member_id,
                        time: this.totaltime
                    }
                })
                .then(res=>{
                    AlertModule.show({
                        title: '提示',
                        content: '发布签到成功',
                    })
                    var num = res.data.data.num;
                    this.num1 = parseInt(num / 1000);
                    this.num4 = num % 10;
                    this.num2 = parseInt((num - this.num1 * 1000) / 100);
                    this.num3 = parseInt(( num - this.num1 * 1000 -this.num2 * 100) / 10);
                    console.log(res)
                    axios.get('http://172.20.10.11:8080/ict/api/Member/GetTime')
                    .then(res=>{
                        if(res.data.data == null){
                            this.hour = '00';
                            this.min = '00';
                            this.second = '00';
                        }else{
                            var totaltime = res.data.data;
                            this.second = parseInt(totaltime%60);
                            this.min = parseInt((totaltime - this.second)/60);
                            if(this.min>=0 && this.min <=9){
                                this.min = '0' + this.totaltime;
                            }
                            this.count();
                        }
                    })
                })
            } 
        },
        count(){
            var interval = setInterval(()=>{
                if(this.second == '00'){
                    this.min--;
                    this.second = '59';
                    if(this.min>=0 && this.min <=9){
                        this.min = '0' + this.min;
                    }
                }else{
                    this.second--;
                    if(this.second>=0 && this.second <=9){
                        this.second = '0' + this.second;
                    }
                };
                if(this.min == '00' && this.second == '00'){
                    clearInterval(interval)
                }
            },1000)
 
        }
    }
}
</script>
<style scoped>
.signleave{
    position: absolute;
    top: 80px;
    right: 20px;
    width: 50px;
    height: 25px;
}
.countdown{
    margin-top: -1px;
    text-align: center;
    height: 180px;
    font-size: 40px;
    line-height: 180px;
    background-color: #5087d0;
    color: #FEFEFE;
}
.text{
    margin-top: 20px;
    font-size: 40px;
    text-align: center;
    font-family: 幼圆;
}
.inputtotal{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    padding: 0 10%;
    
}
.inputtotal input{
    width: 60px;
    height: 60px;  
    border: 1px solid gray;
    
}
button{
    border: none;
    background-color: #5087d0;
    color: #FEFEFE;
    font-size: 18px;
    border-radius: 8px;
}
.signsubmit1{
    width: 60%;
    height: 35px;
    position: absolute;
    bottom: 8%;
    left: 20%;
    line-height: 35px;
}

.signsubmit2{
    width: 60%;
    height: 35px;
    position: absolute;
    bottom: 16%;
    left: 20%;
    line-height: 35px;
}
.signsubmit3{
    width: 60%;
    height: 30px;
    position: absolute;
    bottom: 22%;
    left: 20%;
    font-size: 18px;
    text-align: center;
}
.signsubmit3 input{
    width: 30px;
    height: 30px;
    border: 1px solid black;
    line-height: 30px;
    font-size: 22px;
    text-align: center;
    margin:-5px 5px 0 5px;
    border-radius: 5px;
}
.input{
    display: inline-block;
    width: 60px;
    height: 60px;
    border: 1px solid black;
    text-align: center;
    line-height: 60px;
    font-size: 36px;
    border-radius: 8px;
}
</style>
