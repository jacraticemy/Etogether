<template>
	<div class="homePage" id="homePage">
		<div class="homePage-eventNotice  box-shadow">
			<div class="hp-title">
				<div class="hp-title-notice">
					<img src="../../../../static/logoAll/homePage/painter.png" />
					<span>赛事通知</span>
				</div>
				<div class="hp-title-more">
					<div>查看全部通知
						<img src="../../../../static/logoAll/homePage/more-arrow.png" /></div>
				</div>
			</div>
			<ul class="noticeDetail">
				<li v-for="(item, index) in noticeList"><div style="display:inline-block;width:700px;">{{index+1}}.{{item.contestName}}</div>
					<div style="display:inline-block;" class="noticeTime">发布时间：{{item.pubulishTime}}</div>
					<div class="homeDownload">点击下载</div>
				</li>
			</ul>
		</div>
		<div class="homePage-reCourse">
			<div class="hp-title">
				<div class="hp-title-notice">
					<img src="../../../../static/logoAll/homePage/clock.png" />
					<span>推荐课程</span>
				</div>
				<div class="hp-title-more">
					<div style="display:inline-block;">查看全部通知
						<img src="../../../../static/logoAll/homePage/more-arrow.png" /></div>
				</div>
			</div>
			<ul class="recommonCourse">
				<li v-for="item in recommonList" class="box-shadow">
					<img :src="item.picURL" />
					<div class="course-item">
						<div class="recommonName">{{item.courseName}}</div>
						<div class="course-item-re">
							
							<div class="recommonTime">发布时间：{{item.publishTime}}</div>
							<div class="recommonNum">{{item.hasLearnt}}人已学</div>
						</div>
					</div> 
				</li>
			</ul>
		</div>
		<div class="homePage-interact box-shadow">
			<span class="hp-title">
                <div class="hp-title-notice">
					<img src="../../../../static/logoAll/homePage/clock.png" />
					<span>师生互动</span>
				</div>
			</span>
			<div class="interactDetail">
				<img :src="interraction.picURL" />
				<div class="interactDetail-abstract">
					<div class="interactDetail-title">{{interraction.interTitle}}</div>
					<div class="interactDetail-detail">{{interraction.interAbstract}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name: 'homePage',
		data() {
			return {
				noticeList: [],
				recommonList: [],
				interraction: {}
			}
		},
		created(){
			axios.get('http://rap2api.taobao.org/app/mock/94413/homePage')
			.then(res=>{
				this.noticeList = res.data.contestNotice.contestDetail;
				this.recommonList = res.data.recommonCourse.recommonDetail;
				this.interraction = res.data.interraction;
			})
		}
	}
</script>
<style scoped>
	
	.noticeDetail li:hover{
		color: #0066CC;
		border: 1px solid #0066cc;
		height: 33px;
		line-height: 33px;
	}
	.homeDownload{
		display: inline-block;
		font-size: 16px;
		color: #000;
		margin-left: 80px;
	}
	.homeDownload:hover{
		color: #06c;
	}
	.noticeTime{
		font-size: 14px;
		color: #999;
	}
	.box-shadow{
		-moz-box-shadow:0 0 10px #888;
     	-webkit-box-shadow:0 0 10px #888;
    	box-shadow:0 0 10px #888;
	}
	.homePage{
		width: 100%;
	}
	ul {
		list-style: none;
	}
	
	.hp-title {
		width: 100%;
		height: 60px;
		margin-bottom: 18px;
		line-height: 60px;
		border-radius: 3px;
		background-color: #99ccff;
		font-size: 14px;
		position: relative;
	}
	
	img {
		position: relative;
		top: 5px;
		width: 22px;
	}
	.hp-title img{
		width: 22px;
		height: 22px;
	}
	.hp-title-notice {
		position: absolute;
		left: 20px;
	}
	
	.hp-title-more {
		position: absolute;
		right: 20px;
	}
	span {
		text-decoration: none;
		color: #000;
		display: inline-block;
		font-family: "微软雅黑";
		font-size: 18px;
	}
	
	.homePage-eventNotice {
		margin-bottom: 32px;
	}
	
	.homePage-eventNotice ul {
		padding-bottom: 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	
	.homePage-eventNotice li {
		height: 35px;
		line-height: 35px;
		padding: 10px 44px;
		font-size: 16px;
		font-family: "微软雅黑";
		color: #000;
	}
	
	.homePage-eventNotice ul:hover {
		color: #0066CC;
	}
	
	.homePage-reCourse ul {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		margin-bottom: 64px;
	}
	
	.recommonCourse img {
		height: 248px;
		width: 100%;
		margin-top: -5px;
	}
	
	.homePage-reCourse ul li {
		display: flex;
		flex-direction: column;
		width: 24%;
		height: 320px;
	}
	.recommonName{
		font-size: 18px;
	}
	.recommonTime{
		font-size: 14px;
		color:#999;
	}
	.recommonNum{
		font-size: 14px;
	}
	.course-item {
		display: flex;
		flex-direction: column;
		height: 80px;
		justify-content: center;
		padding: 0 15px;
	}
	.course-item-re{
		display: flex;
		justify-content: space-between;
	}
	.interactDetail {
		display: flex;
		height: 200px;
		padding: 30px 30px;
		margin-bottom: 40px;
		margin-top: -18px;
	}
	
	.interactDetail img {
		display: inline-block;
		width: 30%;
	}
	
	.interactDetail-abstract {
		display: inline-block;
		padding-left: 40px;
		height: 200px;
	}
	.interactDetail-title{
		font-size: 24px;
		margin-bottom: 10px;
	}
	.interactDetail-detail{
		color: #999;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis; /* for Opera */
		-icab-text-overflow: ellipsis; /* for iCab */
		-khtml-text-overflow: ellipsis; /* for Konqueror Safari */
		-moz-text-overflow: ellipsis; /* for Firefox,mozilla */
		-webkit-text-overflow: ellipsis; /* for Safari,Swift*/
		height: 80%;
	}
	.homePage-interact{
		margin-top: -30px;
	}
</style>