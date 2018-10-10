<template>
    <div class="register">
        <div>联系电话：<input/></div>
        <div>验证码：<input/></div>
        <div>
            昵称：<input/>
        </div>
        <div>
            密码：<input/>
        </div>
        <div>
            确认密码：<input/>
        </div>
        <div>姓名：<input/></div>
        <div>性别：<input/></div>
        <div>
            邮箱：<input/>
        </div>
        <router-link to="/registerTea"><button>我是老师</button></router-link>
        <router-link to="/registerStu"><button>我是学生</button></router-link>
    </div>
</template>
<script>
export default {
    name: 'register',
}
</script>
<style scoped>
.register{
    text-align: center;
}
</style>
