<template>
	<div class="wrapper">
		<h1>My blog</h1>
		<nav class="menu">
			<a href="/index">首页</a>
			<a href="/blog">博客</a>
			<a href="/photo">图片</a>
		</nav>
		<div class="writteWrap">
			<id id="handBlog">
				<input type="text" v-model="blog.title" placeholder="标题" class="headT">
				<br>
				<textarea class="article" v-model="blog.content" ></textarea>
				<button v-on:click="subArticle()">提交微博</button>
			</id>
		</div>
	</div>
</template>

<script>
export default {
  name: 'write',
  data () {
    return {
    	blog: {
    		title: '',
    		content: ''
    	}
    }
  },
  	created: function(){
  	console.log("blog page")
  	this.$axios.
  	get('http://127.0.0.1:7777/list', {
  		params:{username: this.$route.params.username},
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
	methods: {
		subArticle: function () {
          this.$axios.post('http://127.0.0.1:7777/createarticle', {
            title: this.blog.title,
            content: this.blog.content,
            name: this.$route.params.username
          },{headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
			}}).then(res => {
            if (res.status==200) {
            	alert("上船成功")
            } else {
              msg = res.data.data
              return
            }
          }).catch(err => {
            console.log(err)
            return
          })
    	}
	}
}

</script>

<style>
@import "../assets/css/write.css";
</style>