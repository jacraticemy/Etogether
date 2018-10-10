<template>
    <div class="onProgramming">
        <button>选择题目</button>
        <div class="onPro-head">
            <div>（初级）请编写代码使运行结果展示为一个3*6的长方形</div>
            <div class="onPro-head-ab">
                <div>程序分析</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</div>
            </div>
        </div>
        <div class="onProDetail">
            <button>点击运行</button><button>清空</button>
            <div class="onProDetail-Input">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'onProgramming',
}
</script>
<style scoped>
.onPro-head{
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
.onPro-head-ab{
    display: flex;
    flex-direction: row;
}
.onProDetail{
    width: 80%;
    margin: 0 auto;
    border: 1px solid black;
}
.onProDetail-Input{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.onProDetail-Input div{
    border: 1px solid black;
    height: 300px;
    width: 45%;
}
</style>
