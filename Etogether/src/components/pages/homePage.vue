<template>
    <div class="homePage">
        <div class="homePage-eventNotice">
            <span class="hp-title">
                <h3>赛事通知</h3>
                <span>查看全部通知</span>
            </span>
            
            <ul>
                <li><span>全国青少年机器人创客师资和青少年变成师培训的通知</span><span>发布时间：2018.08.10</span><span>点击下载</span></li>
                <li><span>全国青少年机器人创客师资和青少年变成师培训的通知</span><span>发布时间：2018.08.10</span><span>点击下载</span></li>
                <li><span>全国青少年机器人创客师资和青少年变成师培训的通知</span><span>发布时间：2018.08.10</span><span>点击下载</span></li>
                <li><span>全国青少年机器人创客师资和青少年变成师培训的通知</span><span>发布时间：2018.08.10</span><span>点击下载</span></li>
                <li><span>全国青少年机器人创客师资和青少年变成师培训的通知</span><span>发布时间：2018.08.10</span><span>点击下载</span></li>
                <li><span>全国青少年机器人创客师资和青少年变成师培训的通知</span><span>发布时间：2018.08.10</span><span>点击下载</span></li>
            </ul>
        </div>
        <div class="homePage-reCourse">
            <span class="hp-title">
                <h3>推荐课程</h3>
                <span>查看全部通知</span>
            </span>
            <ul>
                <li>
                    <img src="http://d.hiphotos.baidu.com/image/h%3D300/sign=b9cd963b6663f624035d3f03b745eb32/203fb80e7bec54e77d03071cb4389b504ec26ac0.jpg"/>
                    <div class="course-item">
                        <div>
                            <div>Scratch案例</div>
                            <div>发布时间：2018.08.10</div>
                        </div>
                        <div>222</div>
                    </div>
                </li>
                <li>
                    <img src="http://d.hiphotos.baidu.com/image/h%3D300/sign=b9cd963b6663f624035d3f03b745eb32/203fb80e7bec54e77d03071cb4389b504ec26ac0.jpg"/>
                    <div class="course-item">
                        <div>
                            <div>Scratch案例</div>
                            <div>发布时间：2018.08.10</div>
                        </div>
                        <div>222</div>
                    </div>
                </li>
                <li>
                    <img src="http://d.hiphotos.baidu.com/image/h%3D300/sign=b9cd963b6663f624035d3f03b745eb32/203fb80e7bec54e77d03071cb4389b504ec26ac0.jpg"/>
                    <div class="course-item">
                        <div>
                            <div>Scratch案例</div>
                            <div>发布时间：2018.08.10</div>
                        </div>
                        <div>222</div>
                    </div>
                </li>
                <li>
                    <img src="http://d.hiphotos.baidu.com/image/h%3D300/sign=b9cd963b6663f624035d3f03b745eb32/203fb80e7bec54e77d03071cb4389b504ec26ac0.jpg"/>
                    <div class="course-item">
                        <div>
                            <div>Scratch案例</div>
                            <div>发布时间：2018.08.10</div>
                        </div>
                        <div>222</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="homePage-interact">
            <span class="hp-title">
                <h3>师生互动</h3>
                <span>查看全部通知</span>
            </span>
            <div class="interactDetail">
                <img src="http://a.hiphotos.baidu.com/image/pic/item/377adab44aed2e73c3dc082b8a01a18b87d6fa84.jpg"/>
                <div class="interactDetail-abstract">
                    <span>第九届蓝桥杯大赛</span>
                    <div>从某种意义上说，个人简介的写作不亚于参加面试。通过短短数百字的个人简介，不但要能较充分地展现出毕业生的才能及综合素质，而且要使聘任者感到自己是位思维清晰、条理性强、语言表达能力突出的应聘者。因此，写好个人简介是求职成功的第一步。 但是，在实际中，不少毕业生对个人简介和求职信之间的界线辨析不清，影向了求职效果。这里，我就先讲一下两者的区别与联系。从某种意义上说，个人简介的写作不亚于参加面试。通过短短数百字的个人简介，不但要能较充分地展现出毕业生的才能及综合素质，而且要使聘任者感到自己是位思维清晰、条理性强、语言表达能力突出的应聘者。因此，写好个人简介是求职成功的第一步。 但是，在实际中，不少毕业生对个人简介和求职信之间的界线辨析不清，影向了求职效果。这里，我就先讲一下两者的区别与联系。</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'homePage',
}
</script>
<style scoped>
ul{
    list-style: none;
}
.homePage{
    padding: 0 80px;
}
.hp-title,.hp-title h3,.hp-title span{
    display: inline-block;
}
.homePage-reCourse ul{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}
.homePage-reCourse ul li{
    display: flex;
    flex-direction: column;
    width: 20%;
}
.course-item{
    display: flex;
    flex-direction: row;
}
.interactDetail{
    display: flex;
    height: 150px;
}
.interactDetail img{
    display: inline-block;
    width: 20%;
}
.interactDetail-abstract{
    width: 80%;
    display: inline-block;
}
</style>
