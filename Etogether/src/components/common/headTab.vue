<template>
    <div class="headTab">
        <div class="headTabAll">
            <div class="siteName">E启编</div>
            <ul class="tabMainItem">
                <router-link to="/"><li>首页</li></router-link>
                <router-link to="/billZone"><li>赛事专区</li></router-link>
                <router-link to="/scoreInquiry"><li>成绩查询</li></router-link>
                <router-link to="/onProgramming"><li>在线编程</li></router-link>
                <router-link to="/courseCenter"><li>课程中心</li></router-link>
                <router-link to="/downloadCenter"><li>下载中心</li></router-link>
            </ul>            
            <ul class="rANDl" v-if="!ifLogin">
                <router-link to="/register"><img src="../../../static/logoAll/common/1.png"/><li>注册</li></router-link>
                <router-link to="/login"><img src="../../../static/logoAll/common/1.png"/><li>登录</li></router-link>
            </ul>
            <div class="hiUser" v-else><router-link to="/personalInfo">Hi nicerWu</router-link></div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'headTab',
    data() {
        return{
            ifLogin: this.GLOBAL.ifLogin
        }
    },
    mounted(){
        var that = this;
        that.ifLogin = that.GLOBAL.ifLogin;
        console.log(that.ifLogin)
    },
    watch:{
        ifLogin:function(val,oldval){
            console.log(this.ifLogin)
        }          
    }
}
</script>
<style scoped>
.hiUser{
    width: 127px;
    text-align: right;
}
a:-webkit-any-link{
    color: #000;
    text-decoration: none;
}
.rANDl li:hover{
    color: #fff;
    font-weight: bold;
}
.rANDl li{
    font-size: 14px;
    color: #000;
    padding-left: 5px;
}
.rANDl img{
    width: 16px;
    vertical-align: middle;
    margin-left: 10px;
}
ul{
    list-style: none;
}
ul li{
    display: inline-block;
}
.headTab{
    height: 50px;
    width: 100%;
    line-height: 50px;
    background-color: #0099ff;
}
.headTabAll{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 1100px;
}

.siteName{
    font-size: 32px;
    font-weight: bolder;
}

.tabMainItem li{
    padding: 0 25px;
    height: 43px;
    line-height: 44px;
    color: #000;
}
.tabMainItem li:hover{
    font-weight: bold;
    border-bottom: 5px solid #99ccff;
    color: #fff;
}
</style>
