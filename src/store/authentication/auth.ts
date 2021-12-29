import {defineComponent,reactive,ref,Ref} from 'vue';
import Api from '@/api/Api';

const state = {
	token: localStorage.getItem('TOKEN')
}
const getters = {
	TOKEN: (state: any) => {
		return state.token;
	}
}
const mutations = {
	SET_TOKEN: (state: any, newToken: any) => {
		localStorage.setItem('TOKEN', newToken);
		state.token = newToken;
	},

	CLEAR_TOKEN: (state: any) => {
		state.token = '';
		localStorage.removeItem('TOKEN');
	}
}
const actions = {
	// CLEAR_TOKEN: ({commit}: any) => {
	// 	localStorage.removeItem('TOKEN');
	// 	return commit('SET_TOKEN', '')
	// },

	HANDLE_REGISTER: async ({commit}: any, formData: object) => {
		try {
			const {data} = await Api.post('/auth/register', formData);
			commit('SET_TOKEN', data.token)
		} catch(err) {
			throw err;
		}
	},

	HANDLE_LOGIN: async ({commit}: any, formData: object) => {
		try {
			const {data} = await Api.post('/auth/login', formData);
			commit('SET_TOKEN', data.token);
		} catch(err) {
			throw err;
		}
	},

	LOGOUT: async ({state,commit}: any) => {
		try {
			const {data} = await Api.post('/auth/logout', null, {
				headers: {
					'Authorization': `Bearer ${state.token}`
				}
			});
			// dispatch('CLEAR_TOKEN');
			commit('CLEAR_TOKEN');
		} catch(err) {
			throw err;
		}
	}
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}