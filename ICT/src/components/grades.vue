<template>
    <div class="grades">
        <ictheader></ictheader>
        <div class="empty">
            第三次团队考核成绩
        </div>
        <div class="empty">
            第二次团队考核成绩
        </div>
        <div class="empty">
            第一次团队考核成绩
        </div>
    </div>
</template>
<script>
import ictheader from '../components/common/ictheader'
export default {
    data(){
        return{
            
        }
    },
    components:{
        ictheader
    }
}
</script>
<style scoped>
@import url('http://at.alicdn.com/t/font_798777_r0klozi9eah.css');
.grades{
    width: 100%;
}
.empty{
    width: 70%;
    height: 80px;
    border: 1px solid #000;
    margin: 20px auto;
    text-align: center;
    line-height: 80px;
}
</style>
