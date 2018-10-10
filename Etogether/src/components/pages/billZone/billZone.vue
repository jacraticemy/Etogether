<template>
    <div class="billZone">
        <div class="billZone-item" style="border-right:1px solid black">
            <h3>重庆市青少年机器人技术等级考试</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</div>
            <span>
                <span>报名时间</span>
                <span>2018.08.10-2018.08.10</span>
            </span>
            <span>
                <span>比赛时间</span>
                <span>2018.08.10-2018.08.10</span>
            </span>
            <router-link to="/testRegister"><h4>考试报名</h4></router-link>
            <div>
                <tr><router-link to="/stimulationTest">模拟考试</router-link><td>考点分布</td></tr>
                <tr><td>考试计划</td><td>报名须知</td></tr>
            </div>
        </div>
        <div class="billZone-item">
            <h3>重庆市青少年机器人技术等级考试</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</div>
            <span>
                <span>报名时间</span>
                <span>2018.08.10-2018.08.10</span>
            </span>
            <span>
                <span>比赛时间</span>
                <span>2018.08.10-2018.08.10</span>
            </span>
            <router-link to="/testRegister"><h4>考试报名</h4></router-link>
            <div>
                <tr><td><router-link to="/stimulationTest">模拟考试</router-link></td><td>考点分布</td></tr>
                <tr><td>考试计划</td><td>报名须知</td></tr>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'billZone',
}
</script>
<style scoped>
.billZone{
    height: 50%;
    padding: 0 50px;
    display: flex;
}
.billZone-item{
    padding: 0 20px;

}
</style>
