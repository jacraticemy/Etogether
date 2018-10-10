<template>
    <div class="release1">
        <ictheader></ictheader>
        <input v-model="title" class="release-input releaseall" placeholder="请输入标题" maxlength="15"/>
        <textarea v-model="content" class="release-textarea releaseall" placeholder="请输入发布内容"></textarea>
        <button class="release-button releaseall" @click="releaseNews">发布</button>
    </div>
</template>
<script>
import axios from 'axios'
import ictheader from '../components/common/ictheader'
export default {
    data(){
        return{
            title:'',
            content:''
        }
    },
    components:{
        ictheader
    },
    methods:{
        releaseNews(){
            axios.post('http://172.20.10.11:8080/ict/api/Released/Publish',{
                    topic:this.title,
                    content:this.content,
                    member_id: this.GLOBAL.member_id,
                    category: 'zy'
            })
            .then(res=>{
                console.log('aa');
                console.log(this.title); 
                console.log(this.content);
                console.log(this.GLOBAL.member_id);    
                console.log(res);
                this.$router.replace('/ResourceSharing');
            })
        }
    }
}
</script>
<style scoped>
.release1{
    background-color: #efeef4;
    height: 100%;
}
.releaseall{
    display: block;
    width: 100%;
    margin: 0 auto;
    border: 1px solid silver;
    font-size: 16px;
}
.release-input{
    height: 6vh;
    border: none;
    padding: 2px 5px;
    border-bottom: 1px solid #d3e1f3;
    font-family: 微软雅黑;
    font-size: 18px;
}
.release-textarea{
    padding:10px 5px;
    height: 45vh;
    border: none;
    width: 100%;
    font-family: 微软雅黑;
    font-size: 18px;
}
.release-button{
    bottom: 20vh;
    height: 5vh;
    border: none;
    border-radius: 5px;
    color: #fefefe;
    background-color: #5087d0;
    font-size: 18px;
    width: 60%;
    position: absolute;
    left: 20%;
    bottom: 20vh;
}
</style>
