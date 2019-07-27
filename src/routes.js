import Home from './components/Home'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/about'
/* 二级路由 */
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'
/* 三级路由 */
import PersonName from './components/about/contact/PersonName'
import Phone from './components/about/contact/Phone'

export const routes=[
	{path:'/',name:'homeLink',components:{
		default:Home,
		'orderingGuide':OrderingGuide,
		'delivery':Delivery,
		'history':History
	}},
	{path:'/admin',name:'adminLink',component:Admin},
	{path:'/menu',name:'menuLink',component:Menu},
	{path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,
		children:[
		{path:'/about/contact',name:'contactLink',redirect:'/about/contact/personname',component:Contact,children:[
			{path:'/about/contact/personname',name:'personName',component:PersonName},
			{path:'/about/contact/phone',name:'phoneNumber',component:Phone},
		]
		},
		{path:'/about/delivery',name:'deliveryLink',component:Delivery,
		beforeEnter:(to,from,next)=>{			//路由独享守卫
			alert('非VIP禁止入内');
			next(false)
		}},
		{path:'/about/history',name:'historyLink',component:History},
		{path:'/about/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
	]},
	{path:'/login',name:'loginLink',component:Login},
	{path:'/register',name:'registerLink',component:Register},
	{path:'*',redirect:'/'},/* 路径填写不符合以上，都会跳转到根页面 */
]
