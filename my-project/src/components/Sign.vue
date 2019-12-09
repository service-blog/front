<template>
	<div>
	<h1>My blog</h1>
	<div class="handleWrap">
		<h2>请进行以下操作</h2>
		<button class="outbutton" v-on:click="signin='enable'">登录</button>
		<button class="outbutton" v-on:click="signup='enable'">注册</button>
	</div>
	<div class="wrap" id="signin" v-bind:class="signin">
		<h2>登录</h2>
		<div class="content animate">
			<div class="imgcontainer">
				<span class="close" v-on:click="signin='disable'">&times</span>
				<img class="img" src="">
				<div v-show="error1==1"></div>
			</div>
			<div class="container">
				<label><b>Username</b></label>
				<input type="text" id = "username" placeholder= "enter username" v-model ="userIn.username" required>
				<label><b>Password</b></label>
				<input type="password" id = "password" placeholder= "enter password" v-model ="userIn.password" required>
				<button v-on:click="signIn()">登录</button>
			</div>
			<div class="container" style="background-color: #f1f1f1">
				<button class="cancel" type="button" v-on:click="signin='disable'"> Cancel</button>
			</div>
		</div>
	</div>
	<div class="wrap" id="signup" v-bind:class="signup">
		<h2>注册</h2>
		<div class="content animate">
			<div class="imgcontainer">
				<span class="close" v-on:click="signup='disable'">&times</span>
				<img class="img" src="">
				<div v-show="error2==1"></div>
			<div class="container">
				<label><b>Username</b></label>
				<input type="text" id = "username" placeholder= "enter username" v-model ="userUp.username" required>
				<label><b>Password</b></label>
				<input type="password" id = "password" placeholder= "enter password" v-model="userUp.password" required>
			</div>
			<div class="button">
				<button class="reset" type="reset">清除</button>
				<button class="submit" v-on:click="signUp()">注册</button>
			</div>
			<div class="container" style="background-color: #f1f1f1">
				<button class="cancel" type="button" v-on:click="signup='disable'"> Cancel</button>
			</div>
			</div>
		</div>
	</div>
</div>
</template>


<script>
import Qs from 'qs'
export default {
  name: 'sign',
  data () {
    return {
    	userIn: {
    		username: '',
    		password: ''
    	},
    	userUp: {
    		username: '',
    		password: ''
    	},
    	msg: '',
    	signin: 'disable',
    	signup: 'disable'
    }
  },
	methods: {
	signIn: function () {
          this.$axios.post('http://127.0.0.1:7777/signin', {
            username: this.userIn.username,
            password: this.userIn.password
          },{headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
			}}).then(res => {
            if (res.status==200) {
              this.$cookies.remove('jwt')
              let token = res.data.token
              alert('登陆成功')
              this.$cookies.set('jwt', token)
              this.$router.push('/Blog/' + this.userIn.username)
            } else {
              this.$router.push('/')
              return
            }
          }).catch(err => {
            console.log(err)
            return
          })
    },
    signUp: function () {
    	alert(this.userUp.password)
          this.$axios.post('http://127.0.0.1:7777/signup', {
      		username: this.userUp.username,
            password: this.userUp.password
          },{headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
			}})
          .then(res => {
            if (res.status==200) {
              alert('注册成功')
            } else {
              alert(res.data)
            }
          }).catch(err => {
            console.log(err)
            return
          })
          this.$router.push('/')
          return
    	}
	}
}
</script>
<style>
@import "../assets/css/sign.css";
</style>