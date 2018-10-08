<template>
    <div class="headTab">
        <div class="headTabLogo">
            <img src="../../../static/logoAll/common/LOGO.png"/>
        </div>
        <div class="siteName">E启编</div>
        <ul class="tabMainItem">
            <router-link to="/"><li>首页</li></router-link>
            <router-link to="/billZone"><li>赛事专区</li></router-link>
            <router-link to="/scoreInquiry"><li>成绩查询</li></router-link>
            <router-link to="/onProgramming"><li>在线编程</li></router-link>
            <router-link to="/courseCenter"><li>课程中心</li></router-link>
            <router-link to="/downloadCenter"><li>下载中心</li></router-link>
        </ul>
        <div class="tabSearch">
            <router-link to="/search">搜索</router-link>
        </div>
        <ul>
            <router-link to="/register"><li>注册</li></router-link>
            <router-link to="/login"><li>登录</li></router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'headTab'
}
</script>
<style scoped>
ul{
    list-style: none;
}
ul li{
    display: inline-block;
}
.headTab{
    height: 100px;
    width: 100%;
    line-height: 100px;
    display: flex;
    flex-direction: row;
}
.headTabLogo img{
    height: 100px;
}
.siteName{
    font-size: 32px;
    font-weight: bolder;
}
.tabMainItem{
    margin: auto;
}
.tabMainItem li{
    padding: 0 25px;
}
.tabSearch{
    margin-right: 30px;
}
</style>
