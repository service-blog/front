<template>
	<div class="wrapper">
		<h1>My blog</h1>
		<nav class="menu">
			<a v-bind:href="'/index/' + this.$route.params.username">首页</a>
			<a v-bind:href="'/blog/' + this.$route.params.username">博客</a>
			<a v-bind:href="'/photo/' + this.$route.params.username">图片</a>
		</nav>
		<div class="detail">
			<h1>{{blog.titile}}</h1>
			<div>{{blog.content}}</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'article',
  data () {
    return {
    	blog: {
    		name: '',
    		title: '',
    		date: '',
    		content: ''
    	}
    }
  },
  created: function(){
  	console.log("article page")
  	this.$axios.
  	get('http://127.0.0.1:7777/getarticle',{
  		params:{username: this.$route.params.username,
  				id: this.$route.params.id},
    	headers: {
    'Content-Type': 'application/x-www-form-urlencoded'}
    	}).then(res => {
        if (res.data.ok) {
          this.blog = res.data.data
          return
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
@import "../assets/css/article.css";
</style>