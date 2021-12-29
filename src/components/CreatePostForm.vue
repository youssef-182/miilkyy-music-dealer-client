<template>
	<form @submit.prevent="createPost" class="flex flex-col" method="POST">
		<h1 class="text-center font-bold text-2xl">Create Post</h1>
		<div class="mb-3 text-center">
			<label class="required block" for="title-field">Title</label>
			<input v-model="formData.title" type="text" class="p-2 border border-black focus:outline-none rounded" id="title-field" name="title-field" placeholder="e.g. yb better" />
			<span v-for="(error, index) in errors.title" :key="index" class="block text-red-500">{{error}}</span>
		</div>
		<div class="mb-3 text-center">
			<label class="required block" for="body-field">Body</label>
			<textarea v-model="formData.body" type="text" class="p-2 border border-black focus:outline-none rounded" id="body-field" name="body-field" placeholder="express how much you'd like yb to fuck your small asshole"></textarea>
			<span v-for="(error, index) in errors.body" :key="index" class="block text-red-500">{{error}}</span>
		</div>
		<div class="mb-3 text-center">
			<button class="bg-pink-500 hover:bg-pink-600 text-white font-bold p-3 rounded">Create Post</button>
		</div>
		<div class="text-center">
			<router-link class="text-pink-500" to="/">Go home</router-link>
		</div>
	</form>
</template>

<script lang="ts">
import {defineComponent,reactive,ref,Ref} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
import Api from '@/api/Api';

export default defineComponent({
	name: 'Create Post Form',
	setup() {
		const store = useStore();
		
		const formData = reactive({
			title: '',
			body: ''
		});
		const errors: Ref = ref({});

		const createPost = () => {
			Api.post('/post/create', formData, {
				headers: {
					'Authorization': `Bearer ${store.getters['auth/TOKEN']}`
				}
			});
		}

		return {formData,errors,createPost}
	}
});
</script>