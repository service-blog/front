import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/Sign'
import Article from '@/components/Article'
import Blog from '@/components/Blog'
import Write from '@/components/Write'
Vue.use(Router)

export default new Router({
	base: '/',
	mode: 'history',
  	routes: [
    {
		path:'/',
		name:'sign',
		component:Sign
    },

    {
    	path:'/blog/:username',
    	name:'blog',
    	component:Blog,
    	meta: {
    		requireAuth: true,
    	},
    	children:[
    	{
	    	path:'/article/:username/:id',
	    	name:'article',
	    	component:Article
    	},
    	{
	    	path:'/write/:username',
	    	name:'write',
	    	component:Write
    	}
    	]
    }
  ]
})
