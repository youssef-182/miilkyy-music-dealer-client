<template>
	<form @submit.prevent="handleRegister" class="flex flex-col" method="POST">
		<h1 class="text-center font-bold text-2xl">Register!!!!11!!!1</h1>
		<div class="mb-3 text-center">
			<label class="required block" for="username-field">Username</label>
			<input v-model="formData.username" type="text" class="p-2 border border-black focus:outline-none rounded" id="username-field" name="username-field" placeholder="e.g. cocklover666" />
			<span v-for="(error, index) in errors.username" :key="index" class="block text-red-500">{{error}}</span>
		</div>
		<div class="mb-3 text-center">
			<label class="required block" for="email-field">Email address</label>
			<input v-model="formData.email" type="email" class="p-2 border border-black focus:outline-none rounded" id="email-field" name="email-field" placeholder="e.g. cum@drool.com" />
			<span v-for="(error, index) in errors.email" :key="index" class="block text-red-500">{{error}}</span>
		</div>
		<div class="mb-3 text-center">
			<label class="required block" for="password-field">Password</label>
			<input v-model="formData.password" type="password" class="p-2 border border-black focus:outline-none rounded" id="password-field" name="password-field" placeholder="************************" />
			<span v-for="(error, index) in errors.password" :key="index" class="block text-red-500">{{error}}</span>
		</div>
		<div class="mb-3 text-center">
			<label class="required block" for="password-conf-field">Repeat password</label>
			<input v-model="repeat_password" type="password" class="p-2 border border-black focus:outline-none rounded" id="password-conf-field" name="password-conf-field" placeholder="************************" />
		</div>
		<div class="mb-3 text-center">
			<button class="bg-pink-500 hover:bg-pink-600 text-white font-bold p-3 rounded">Register</button>
		</div>
		<div class="text-center">
			<router-link class="text-pink-500" to="/auth/login">Already got an account? Login ay!</router-link>
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
	name: 'RegisterForm',

	setup() {
		const formData = {
			username: '',
			email: '',
			password: ''
		}

		const repeat_password: Ref = ref('');
		const repeat_password_error: Ref = ref('');
		const errors: Ref = ref({});

		const store = useStore();
		const router = useRouter();

		const handleRegister = async () => {
			try {
				await store.dispatch('auth/HANDLE_REGISTER', formData);
				router.push('/');
			} catch(err) {
				errors.value = err.response.data.errors;	
			}
		} 

		return {formData,repeat_password,errors,handleRegister}
	}
});
</script>