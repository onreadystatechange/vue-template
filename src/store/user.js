import Vue from 'vue'
import { storage } from '../landrover/business/index'
export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default {
	state: JSON.parse(storage.getItemSync('user')) || {},
	mutations: {
		[USER_SIGNIN](state, user) {
			storage.setItemSync('user', JSON.stringify(user))
			Object.assign(state, user)
		},
		[USER_SIGNOUT](state) {
			storage.removeItemSync('user')
			Object.keys(state).forEach(k => Vue.delete(state, k))
		}
	},
	actions: {
		[USER_SIGNIN]({commit}, user) {
			commit(USER_SIGNIN, user)
		},
		[USER_SIGNOUT]({commit}) {
			commit(USER_SIGNOUT)
		}
	}
}
