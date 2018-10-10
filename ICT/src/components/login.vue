<template>
  <div>
    <x-header :left-options="{showBack: false}" style="background-color:#5087d0">ICT云端</x-header>
    <div class="login">
    <img class = "logo" src="../../static/logo/ICTLOGO.jpg">
			<form class = "form" method="post">
				<div class="inpt">
					<label for="username">账 号 |</label>
					<input v-model="username" type="text"/>
				</div>
				<div class="inpt">
					<label for="password">密 码 |</label>
					<input v-model="password" type="password"/>
				</div>
        <div class="inpt">
					<label for="password">电 话 |</label>
					<input v-model="phone" type="text" placeholder=" 首次登陆请输入手机号"/>
				</div>
			</form>
			<input class = "btn" type="submit" value="登 录" @click="login">
			<a class = "signIn" href="#">没有账号？立即加入我们！</a>
    </div>
  </div>
</template>

<script>
// import router from 'vue-router'
import axios from 'axios'
import ictheader from '../components/common/ictheader'
import { AlertModule,XHeader } from 'vux'
const is_manager = ''
const member_id = '';
const name = '';
export default {
  is_manager,
  member_id,
  name,
  name: 'login',
  data () {
    return {
      password:'',
      username:'',
      phone:''
    }
  },
  components:{
    ictheader,
		AlertModule,
		XHeader
  },
  methods:{
      login(){
        axios.post('http://172.20.10.11:8080/ict/api/Member/DoLogin',{
         username:this.username,
         password:this.password,
         phone:this.phone
      })
        .then(res=>{
          console.log(res)
             if(res.data.code == 1){ 
               this.GLOBAL.is_manager = res.data.data.is_manager;
               this.GLOBAL.member_id = res.data.data.member_id;
               this.GLOBAL.name = res.data.data.name;
               this.$router.push('/HomePage');
             }else if(res.data.code == -3){
                AlertModule.show({
                title: '提示',
                content: '账号密码有误',
              })
             }else{
								AlertModule.show({
									title: '提示',
									content: '填写信息缺失',
								})
						 }
             
        })
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login{
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	align-items: center;
}

.form{
	display: flex;
	flex-direction: column;
	margin-top: 5vh;
}
.inpt{
	margin-top: 5vh;
	height: 5vh;
	width: 80vw;
	border: 0.1ex solid #5087d0;
	border-radius: 25vh;
	font-size: 3vmin;
	display: flex;
	align-items: center;
}
.btn{
	background: linear-gradient(to top right,#5087d0,#5087d0);
	color: white;
	font-size: 3vmin;
	height: 5vh;
	width: 80vw;
	border: 1px solid #FFC800;
	border: none;
	border-radius: 25vh;
	margin-top: 5vh;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
}
.signIn{
	width: 80vw;
	display: flex;
	justify-content: flex-end;
	font-size: 3vmin;
	margin-top: 3vh;
	color: #0a3c64;
}
.logo{
	margin-top: 10vh;
	width: 20vw;

}
input{
	border: none;
	height: 4vh;
	width: 50vw;
	font-size: 3vmin;
	display: flex;
	align-items: center;
	background:none; 
}
label{
	margin-left: 1em;
	color : #0a3c64;
}
</style>
