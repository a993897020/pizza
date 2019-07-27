import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
Vue.use(Vuex)

export const store =new Vuex.Store({
		/* 存放数据 */
	state:{
		MenuItems:{},
		currenUser:null,
		isLogin:false
	},
		/* 获取数据的状态 */
	getters,
		/* 改变数据的状态 */
	mutations,
		/* 应用mutations */
	actions
})