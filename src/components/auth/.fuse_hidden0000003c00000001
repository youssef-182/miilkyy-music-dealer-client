<template>
	<form @submit.prevent="handleLogin" class="flex flex-col" method="POST">
		<h1 class="text-center font-bold text-2xl">Login!!!!11!!!1</h1>
		<div class="mb-3 text-center">
			<label class="required block" for="username-field">Username</label>
			<input v-model="formData.username" type="text" class="p-2 border border-black focus:outline-none rounded" id="username-field" name="username-field" placeholder="e.g. cocklover666" />
			<span v-for="(error, index) in errors.username" :key="index" class="block text-red-500">{{error}}</span>
		</div>
		<div class="mb-3 text-center">
			<label class="required block" for="password-field">Password</label>
			<input v-model="formData.password" type="password" class="p-2 border border-black focus:outline-none rounded" id="password-field" name="password-field" placeholder="************************" />
			<span v-for="(error, index) in errors.password" :key="index" class="block text-red-500">{{error}}</span>
		</div>
		<div class="mb-3 text-center">
			<button class="bg-pink-500 hover:bg-pink-600 text-white font-bold p-3 rounded">Login</button>
		</div>
		<div class="text-center">
			<router-link class="text-pink-500" to="/auth/register">Don't have an account? Register!</router-link>
		</div>
	</form>
</template>

<script lang="ts">
import {defineComponent,reactive,ref,Ref} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import Api from '@/api/Api';
import Csrf from '@/api/CsrfCookie';

export default defineComponent({
	name: 'LoginForm',

	setup() {
		const formData = {
			username: '',
			password: ''
		}

		const errors: Ref = ref({});

		const store = useStore();
		const router = useRouter();

		const handleLogin = async () => {
			try {
				await store.dispatch('auth/HANDLE_LOGIN', formData);
				router.push('/');
			} catch(err) {
				errors.value = err.response.data.errors;	
			}
		} 

		return {formData,errors,handleLogin}
	}
});
</script>