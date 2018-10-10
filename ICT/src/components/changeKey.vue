<template>
    <div class="changeKey">
        <ictheader></ictheader>
        <div class="changeKey-main">
            <span>旧密码  |  <input v-model="oldPasswd" type="password" maxlength="16"/></span>
            <span>新密码  |  <input v-model="newPasswd" type="password" maxlength="16"/></span>
            <span>请确认  |  <input v-model="confirmPasswd" type="password" maxlength="16"/></span>
        </div>
        <button @click="changeKey">修改</button>
    </div>
</template>
<script>
import axios from 'axios'
import ictheader from '../components/common/ictheader'
import { AlertModule } from 'vux'
export default {
    data(){
        return{
            oldPasswd:'',
            newPasswd:'',
            confirmPasswd:''
        }
    },
    components:{
        ictheader,
        AlertModule
    },
    methods:{
        changeKey(){
            if(this.newPasswd == this.confirmPasswd){
                axios.post('http://172.20.10.11:8080/ict/api/Member/ChangePassword',{
                    member_id:this.GLOBAL.member_id,
                    old_password:this.oldPasswd,
                    new_password:this.newPasswd
                })
                .then(res=>{
                    AlertModule.show({
                        title: '提示',
                        content: '密码修改成功',
                    });
                    this.$router.replace('/MyInfo');
                })
            }else{
                AlertModule.show({
                        title: '提示',
                        content: '密码有误，请重新输入',
                    });
            }
            
        }
    }
}
</script>
<style scoped>
.changeKey{
    width: 100%;
    height: 100%;
    background-color: #EFEEF4;
}
.changeKey-main{
    width: 70%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 25%;
    left: 12%;
    color: gray;
}
.changeKey-main span{
    width: 100%;
    padding: 0 15px;
    height: 35px;
    line-height: 35px;
    display: inline-block;
    margin: 20px auto;
    border-radius: 8px;
    background-color: #fefefe;
}
button{
    width: 60%;
    height: 40px;
    position: absolute;
    bottom: 25%;
    left: 20%;
    border: none;
    border-radius: 8px;
    color: #fefefe;
    background-color: #5084d0;
}
input{
    height: 20px;
    border: none;
    font-size: 16px;
}
</style>
