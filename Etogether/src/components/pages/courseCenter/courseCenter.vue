<template>
	<div class="courseCenter wholePage">
		<div class="course-orderList">
			<div class="title">
				<img class="title-img" src="../../../assets/courseCenter/paixu.png" />
				<span>排序方式</span>
			</div>
			<ul>
				<li>最热课程<img class="fire" src="../../../assets/courseCenter/fire.png" /></li>
				<li>最新课程</li>
			</ul>

			<form class="course-form">
				<input class="search-input" placeholder="搜索内容">
				<input type="submit" value=" " class="search-button" />
			</form>
		</div>
		<div class="course-picker">
			<div class="title">
				<img class="title-img" src="../../../assets/courseCenter/picker.png" />
				<span>筛选方式</span>
			</div>
			<ul class="course-picker-f">
				<li>全部课程</li>
				<li>初级课程</li>
				<li>中级课程</li>
				<li>高级课程</li>
			</ul>
			<ul class="course-picker-s">
				<li>全部课程</li>
				<li>Scratch</li>
				<li>Python</li>
				<li>C++</li>
			</ul>
		</div>
		<ul class="course-list">
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
		<fen-ye :cur.sync="cur" :all.sync="all" v-on:btn-click="listen" class='fenye wholePage'></fen-ye>
	</div>
</template>
<script>
	import fenYe from '../../../components/pages/courseCenter/fenYe.vue'
	export default {
		name: 'courseCenter',
		components: {
			fenYe
		},
		data() {
			return {
				cur: 1,
				// 总页数
				all: 12,
				msg: '',
				recommonList: [{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					},
					{
						"picURL": "http://img5.duitang.com/uploads/item/201410/17/20141017235209_MEsRe.thumb.700_0.jpeg",
						"courseName": "Stratch案例",
						"publishTime": "2018.08.10",
						"hasLearnt": 222
					}
				]
			}
		},
		created() {
			axios.get('http://rap2api.taobao.org/app/mock/94413/homePage')
				.then(res => {
					this.recommonList = res.data.recommonCourse.recommonDetail;
				})
		}
	}
</script>
<style scoped>
	.box-shadow {
		-moz-box-shadow: 0 0 10px #888;
		-webkit-box-shadow: 0 0 10px #888;
		box-shadow: 0 0 10px #888;
	}
	
	li {
		list-style: none;
	}
	
	.course-orderList {
		/*background-color: red;*/
		padding: 12px 0px 12px 6px;
		margin-bottom: 5px;
		height: 35px;
		position: relative;
	}
	
	.course-orderList .title {
		float: left;
		margin-right: 5px;
	}
	
	.course-orderList .title ul {
		float: left;
	}
	
	.course-orderList li {
		width: 90px;
		float: left;
		padding-right: 40px;
		line-height: 35px;
		font-size: 18px;
	}
	
	.course-orderList li:hover {
		color: #0062CC;
		cursor: pointer;
	}
	
	.fire {
		width: 30px;
		position: absolute;
	}
	
	.course-form {
		border: 1px solid gainsboro;
		position: absolute;
		right: 5px;
		height: 39px;
	}
	
	.course-form .search-input {
		width: 170px;
		height: 38px;
		padding-left: 10px;
		border: none;
		outline: none;
	}
	
	.course-form .search-button {
		background: url(../../../assets/courseCenter/glass.png) no-repeat center;
		background-color: #0066CC;
		width: 80px;
		height: 40px;
		border: none;
		outline: none;
		cursor: pointer;
	}
	
	.course-orderList span,
	.course-picker span {
		display: inline-block;
		font-family: "微软雅黑";
		font-size: 18px;
		width: 80px;
		margin-right: 45px;
	}
	
	.title-img {
		width: 23px;
		height: 24px;
		position: relative;
		top: 6px;
	}
	
	.course-picker {
		/*background-color: gray;*/
		margin-bottom: 20px;
		padding: 12px 0px 12px 4px;
		height: 80px;
	}
	
	.course-picker .title {
		width: 160px;
		height: 50px;
		float: left;
	}
	
	.course-picker ul {
		float: left;
	}
	
	.course-picker li:hover {
		color: #0062CC;
		cursor: pointer;
	}
	
	.course-picker-f li {
		padding-right: 40px;
		line-height: 35px;
		font-size: 18px;
	}
	
	.course-picker-s {
		margin-left: 160px;
		clear: both;
	}
	
	.course-picker-s li {
		padding-right: 40px;
		line-height: 35px;
		font-size: 18px;
	}
	
	.course-picker li {
		width: 90px;
		float: left;
	}
	
	.course-list {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 44px;
	}
	
	.course-list li {
		display: flex;
		flex-direction: column;
		width: 24%;
		height: 250px;
		margin-bottom: 20px;
	}
	
	.course-list img {
		width: 100%;
		height: 185px;
		margin-top: -5px;
	}
	
	.recommonName {
		font-size: 22px;
	}
	
	.recommonTime {
		font-size: 12px;
		color: #999;
	}
	
	.recommonNum {
		font-size: 12px;
	}
	
	.course-item {
		display: flex;
		flex-direction: column;
		height: 80px;
		justify-content: center;
		padding: 0 15px;
	}
	
	.course-item-re {
		display: flex;
		justify-content: space-between;
	}
	
	.fenye {
		width: 600px;
		margin-bottom: 40px;
	}
</style>