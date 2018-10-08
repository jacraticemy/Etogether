<template>
    <div class="scoreInquiry">
        <div>
            <h2>请输入查询代码</h2>
            <input/>
            <button>查询</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'scoreInquiry',
}
</script>
<style scoped>
.scoreInquiry{
    height: 60%;
    width: 100%;
}
.scoreInquiry div{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.scoreInquiry input{
    width: 20%;
    height: 30px;
}
.scoreInquiry button{
    width: 20%;
    height: 30px;
}
</style>
