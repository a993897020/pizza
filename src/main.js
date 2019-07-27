import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import axios from 'axios'
import {store} from './store/store.js'

Vue.use(VueRouter)
//axios默认配置根路径
axios.defaults.baseURL="https://pizza-f79ac.firebaseio.com/"
//配置Vue原型（在任何组件中都可以正常使用axios）
Vue.prototype.http=axios
const router=new VueRouter({
	routes,
	mode:'history',
	scrollBehavior(to,from,savedPosition){
		// return {x:0,y:100}   //点击页面滚动的位置定位
		// return {selector:'.	btn'} ,//定位到按钮位置
		
		if(savedPosition){  //保存你滚动的位置，返回上一层会回到你滚动的位置
			return savedPosition
		}else{
			return {x:0,y:0}
		}
	}
})
//全局守卫
// router.beforeEach((to,from,next)=>{  //to点击链接去到哪里，from点击链接的位置，next函数是呈现网页
// 	// alert('没有登录，请先登录');
// 	// next();
// 		
// 	// 	判断登陆状态store.gettes.isLogin==false
// 	if(to.path=='/login'||to.path=='/register'){
// 		next();
// 	}else{
// 		alert('没有登录，请先登录');
// 		next('/login')
// 		
// 	}
// })
// 
//后置钩子，与全局守卫类似，不推荐使用这种
/* router.afterEach((to,from)=>{
	alert('after each')
	}) */
new Vue({
  el: '#app',
	router,
	store,
  render: h => h(App),
  data(){
	  return{
	  }
  },
	

})
