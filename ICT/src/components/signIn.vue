<template>
    <div class="signIn">
        <ictheader></ictheader>
        <!-- <router-link to="/signleave"><button class="signleave">请假</button></router-link> -->
        <div class="countdown">
            {{min}}:{{second}}
        </div>
        <div>
            <div class="text">签到码</div>
            <div class="inputtotal">
                <input v-model="n1" maxlength="1"/><input v-model="n2" maxlength="1"/><input v-model="n3" maxlength="1"/><input v-model="n4" maxlength="1"/>
            </div>
        </div>
        <button class="signsubmit" @click="subSign">提交</button>
    </div>
</template>
<script>
import ictheader from '../components/common/ictheader'
import { Countup } from 'vux'
import axios from 'axios'
export default {
    data(){
        return{
            min:'',
            second:'',
            n1:'',
            n2:'',
            n3:'',
            n4:''
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
        subSign(){
            var numall = this.num1*1000 + this.num2*100 + this.num3*10 + this.num4;
            axios({
                method:'post',
                url:'http://172.20.10.11:8080/ict/api/Member/SignIn',
                data:{
                    member_id: 1,
                    num: numall
                }
            })
            .then(res=>{
                
            })
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
    border: 1px solid black;
    text-align: center;
    line-height: 60px;
    font-size: 36px;
    border-radius: 8px;
}
.signsubmit{
    width: 60%;
    height: 40px;
    line-height: 40px;
    position: absolute;
    bottom: 20%;
    left: 20%;
    border: none;
    font-size: 18px;
    color: #FEFEFE;
    background-color: #5087d0;
    border-radius: 8px;
}
</style>
