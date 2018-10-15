<template>
    <div class="login">
        <div class="scoreInquiry-title">E启编官方成绩查询</div>
            <div class="scoreInquiry-content">
                <div :class="{ scoreInquiryInput:whichBorder1,'scoreInquiry-input-dark':!whichBorder1}">
                    <img src="../../../../static/logoAll/login/idnum.png" />
                    <input @click="changeBorder1" type="text" placeholder="账号"/>
                </div>
                <div :class="{ scoreInquiryInput:whichBorder2,'scoreInquiry-input-dark':!whichBorder2}">
                    <img src="../../../../static/logoAll/login/passwd.png" />
                    <input @click="changeBorder2" type="password" placeholder="密码"/>
                </div>
                <router-link to="/"><div class="button" @click="loginOK">点击进入</div></router-link>
                <div class="registerNew">
                    <div class="forget">忘记密码？</div>
                    <router-link to="/register"><div class="regisNow">立即注册</div></router-link>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data(){
        return{
            whichBorder1:true,
            whichBorder2:true
        }
    },
    methods:{
        changeBorder1(){
            var that = this;
            that.whichBorder1 = false;
            that.whichBorder2 = true;
        },
        changeBorder2(){
            var that = this;
            that.whichBorder2 = false;
            that.whichBorder1 = true;
        },
        loginOK(){
            var that = this;
            that.whichBorder2 = true;
            that.whichBorder1 = true;
            this.GLOBAL.ifLogin = true;
            this.$forceUpdate();
        }
    }
}
</script>
<style scoped>
.forget{
    font-size: 14px;
    color: #25ccff;
}
.regisNow{
    font-size: 14px;
    color: #999;
}
.registerNew{
    width: 410px;
    display: flex;
    justify-content: space-between;
}
.login{
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #99ccff;
    align-items: center;
    height: 350px;
}
.scoreInquiry-title{
    height: 60px;
    font-weight: bold;
    font-size: 18px;
    line-height: 60px;
    text-align: center;
}
.scoreInquiry-content{
    height: 246px;
    background-color: #fff;
    border-radius: 3px;
    width: 99%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 0;
}
.scoreInquiryInput{
    border: 2px solid #99ccff;
    height: 50px;
    padding: 0 30px;
    display: flex;
    align-items: center;

}
.scoreInquiry-input-dark{
    border: 2px solid #0099ff;
    height: 50px;
    padding: 0 30px;
    display: flex;
    align-items: center;

}
.scoreInquiry-content img{
    background-color: #99ccff;
    border-radius: 50%;
    width: 36px;
}
.login input{
    width: 300px;
    height: 30px;
    border: none;
    margin-left: 10px;
    outline:none;
}
.login .button{
    height: 50px;
    background-color: #6699ff;
    width: 410px;
    text-align: center;
    color: #fff;
    line-height: 44px;
    font-size: 18px;
    text-decoration: none;
}
a:-webkit-any-link{
    text-decoration: none;
}
</style>
