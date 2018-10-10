<template>
    <div class="login">
        <h3>欢迎进入E启编</h3>
        <div>账号：<input/></div>
        <div>密码：<input/></div>
        <button>提交</button>
        <span><router-link to="/register">没有账号？立即注册！</router-link></span>
        <span><router-link to="">已有账号？立即激活！</router-link></span>
    </div>
</template>
<script>
export default {
    name: 'login',
}
</script>
<style scoped>
.login{
    display: flex;
    flex-direction:column;
    text-align: center;
}

</style>
