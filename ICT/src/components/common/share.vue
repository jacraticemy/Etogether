<template>
<router-link :to="{path:'/newsDetail',query: {released_id:released_id}}">
    <div class="share">
        <div class="share-head">
            <img src="http://img5.imgtn.bdimg.com/it/u=4233882545,270382672&fm=27&gp=0.jpg"/>
            <div>
                <span class="name">{{name}}</span>
                <span class="time">{{time}}</span>
            </div>
        </div>
        <div class="abstract">
            {{abstract}}
        </div>
    </div>
</router-link>
</template>
<script>
export default {
    props:{
        name:{
            type:String
        },
        time:{
            type:String
        },
        abstract:{
            type:String
        },
        released_id:{
            type:Number
        }
    }
}
</script>
<style scoped>
.share{
    padding: 20px;
    margin-bottom: 2px;
    background-color:#fefefe;
}
.share-head{

    display: flex;
    align-items: center;
}
.share-head img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    flex: 0;
    margin-right: 10px;
}
.share-head div{
    flex: 1;
}
.share-head div span{
    display: block;
    height: 20px;
    line-height: 20px;
    padding: 3px;
}
.time{
    font-size: 14px;
    color: gray;
}
.abstract{
    margin-top: 10px;
}
</style>
