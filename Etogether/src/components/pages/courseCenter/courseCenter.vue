<template>
    <div class="courseCenter">
        <h3>排序方式</h3>
        <h3>筛选方式</h3>
        <ul>
            <li><router-link to="/courseDetail">
                <img src="http://d.hiphotos.baidu.com/image/h%3D300/sign=b9cd963b6663f624035d3f03b745eb32/203fb80e7bec54e77d03071cb4389b504ec26ac0.jpg"/>
                    <div class="course-item">
                        <div>
                            <div>Scratch案例</div>
                            <div>发布时间：2018.08.10</div>
                        </div>
                        <div>222</div>
                    </div></router-link>
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
</template>
<script>
export default {
    name: 'courseCenter',
}
</script>
<style scoped>
.courseCenter{
    padding: 0 150px;
}
.courseCenter ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}
.courseCenter ul li{
    width: 30%;
}
.courseCenter ul li img{
    width: 80%;
}
</style>
