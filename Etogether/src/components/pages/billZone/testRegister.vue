<template>
    <div>
        竞赛项目：<input/>
        姓名:<input/>
        性别：<input/>
        年龄：<input/>
        联系电话：<input/>
        身份证号：<input/>
        学校：<input/>
        年级：<input/>
        <router-link to="/testRegisterMem"><button>我是队员</button></router-link>
        <router-link to="/testRegisterCap"><button>我是队长</button></router-link>
    </div>
</template>
<script>
export default {
    name:'testRegister'
}
</script>
<style scoped>

</style>

