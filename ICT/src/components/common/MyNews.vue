<template>
  <div class="MyNews">
    <div class="personInfo">
        <img src="http://imgsrc.baidu.com/imgad/pic/item/c83d70cf3bc79f3d5f29c12eb0a1cd11738b29e7.jpg" />
        <div class="personName">
            <span class="name">{{name}}</span>
            <span class="time">{{time}}</span>
        </div>
    </div>
    <div class="reply">
        {{reply}}
    </div>
    <div class="replyNews">
        <div class="replyNewsH">
            <span class="name">{{pname}}</span>
        </div>
        <div class="replyNewsAb">
            {{replyNewsAb}}
        </div>
    </div>
  </div>
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
        reply:{
            type:String
        },
        pname:{
            type:String
        },
        replyNewsAb:{
            type:String
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.replyNewsAb{
    font-size: 14px;
}
.replyNewsH span{
    margin-right: 10px;
    font-size: 14px;
}
.replyNewsH{
    padding-bottom: 10px;
}
.replyNews{
    background-color: rgb(243, 242, 242);
    padding: 10px;
}
.reply{
    font-size: 14px;
    padding: 5px 0;
}
.time{
    font-size: 14px;
    color: gray;
}
.personName span{
    display: inline-block;
}
.personName{
    display: flex;
    flex-direction: column;
}
.personInfo img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 5px;
}
.personInfo{
    height: 60px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.MyNews{
    padding: 10px;
    background-color: #fefefe;
    margin-bottom: 2px;
}
</style>
