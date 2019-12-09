<template>
	<div class="wrapper">
		<h1>My blog</h1>
		<nav class="menu">
			<a href="/index">首页</a>
			<a href="/blog">博客</a>
			<a href="/photo">图片</a>
		</nav>
		<div class="write">
			<a href="/write">写日志</a>
		</div>
		<div class="searchw">
			<input type="text" name="search" placeholder="搜索日志">
		</div>
		<ul id="blogList" v-for="x in bloglist">
			<li>
				<router-link
				    :to="{
				        path: '/Article',
				        params: {
				            key: x.id,
				        }
				    }">
				    <button type="button">{{x.title + "   "}} {{x.name}} </button>
				</router-link>
			</li>
		</ul>
	</div>
</template>


<script>
export default {
  name: 'blog',
  data () {
    return {
    	bloglist: {
    		id: '',
    		title: '',
    		name: ''
    	}
    }
  },
  created: function(){
  	console.log("blog page")
  	this.$axios.
  	get('http://127.0.0.1:7777/list',{
  		params:{
		username: this.$route.params.username,
  		},
    	headers: {
    	'Content-Type': 'application/x-www-form-urlencoded'}
    	}).then(res => {
        if (res.data.ok) {
          this.bloglist = res.data.data
        } else {
        	console.log(res.data.data)
        	//this.$router.push('/Sign')
        	return
        }
      }).catch(err => {
        console.log(err)
        return
      })
  	},
	method: {

	}
}

</script>

<style>
@import "../assets/css/blog.css";
</style>