<template>
    <div class="newsDetail">
        <ictheader></ictheader>
        <div class="newshead">
            <div class="newsinfo">
                <img src="http://img5.imgtn.bdimg.com/it/u=4233882545,270382672&fm=27&gp=0.jpg">
                <div class="newsuser">
                    <span class="newsusername">{{releaseName}}</span>
                    <span class="newstime">{{releaseTime}}</span>
                </div>
            </div>
            <div class="newscontent">
                <span style="font-weight:bolder;">{{releaseTitle}}</span>
                <div style="margin-top: 8px;word-break:break-all;">
                {{releaseContent}}
                </div>
            </div>
        </div>
        <div class="newsmiddle">
            <span>评论列表</span>
        </div>
        <div class="newsbottom">
            <ul>
                <li v-for="item in commentslist">
                    <div class="commentinfo">
                        <img src="http://img5.imgtn.bdimg.com/it/u=4233882545,270382672&fm=27&gp=0.jpg"/>
                        <div class="newsuser">
                            <span class="newsusername">{{item.name}}</span>
                            <span class="newstime">{{item.created_at}}</span>
                        </div>
                    </div>
                    <div class="commentcontent">
                        {{item.content}}
                    </div>
                </li>
            </ul>
        </div>
        <div class="comment">
            <input v-model="commentValue"/>
            <button @click="commentSub">发送</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import ictheader from '../common/ictheader'
export default {
    inject:['reload'],
    props:{
        released_id:{
            type:Number
        }
    },
    data(){
        return{
            commentslist:{},
            releaseHead:'',
            releaseTime:'',
            releaseTitle:'',
            releaseContent:'',
            releaseName:'',
            commentValue:''
        }
    },
    components:{
        ictheader
    },
    methods:{
        add0(m){
            return m<10?'0'+ m : m
        },
        formatTime(timePoint){
            var time = new Date(timePoint);
            var y = time.getFullYear();
            var m = time.getMonth()+1;
            var d = time.getDate();
            return y+'-'+this.add0(m)+'-'+this.add0(d);
        },
        commentSub(){
            axios.post('http://172.20.10.11:8080/ict/api/Comment/DoComment',{
                member_id:this.GLOBAL.member_id,
                content:this.commentValue,
                released_id:this.$route.query.released_id
            })
            .then(res=>{
                this.reload();
            })
        }
    },
    mounted(){
        this.ifShow = false;
        axios({
            method:'post',
            url:'http://172.20.10.11:8080/ict/api/Released/GetMore',
            data:{
                released_id: this.$route.query.released_id
            }
        })
        
        .then(res=>{
            this.releaseName = res.data.data.name;
            this.releaseTime = this.formatTime(res.data.data.created_at);
            this.releaseTitle = res.data.releaseTitle;
            this.releaseContent = res.data.data.content;
            this.commentslist = res.data.data.comments;
            for(var i in this.commentslist){
                this.commentslist[i].created_at = this.formatTime(this.commentslist[i].created_at)
            };
        })
    }
}
</script>
<style scoped>
.comment button{
    margin-left: 5px;
    width: 15%;
    border: none;
    border-radius: 5px;
    background-color: #5087d0;
    color: #fefefe;
    height: 25px;
    vertical-align: middle;
}
.comment input{
    height: 25px;
    border: none;
    border-radius: 5px;
    width: 80%;
}
.comment{
    padding: 5px 5px;
    height: 30px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #aeccf5;
}
.newsbottom{
    padding-bottom: 30px;
}
.newsbottom ul{
    background-color: #efeef4;
}
.newsbottom ul li {
    padding: 10px 10px;
    margin-bottom: 2px;
    background-color: #fefefe;
}
.commentcontent{
    padding: 5px 20px;
}
.commentinfo{
    padding: 5px 10px;
    display: flex;
    align-items: center;
}
.commentinfo img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
.newshead{
    padding: 20px;
}
.newsinfo{
    display: flex;
    align-items: center;
}
.newsinfo img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}
.newsuser{
    display: flex;
    flex-direction: column;
}
.newstime{
    font-size: 14px;
    color: gray;
}
.newscontent{
    padding: 15px 0;
}
.newsmiddle{
    border-bottom: 2px solid #5087d0;
    font-size: 15px;
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    color: #5087d0;
}
</style>
