<template>
  <div class="flex justify-around">
  	<router-link class="bg-pink-500 p-3 rounded text-white" to="/auth/register">Register</router-link>
  	<router-link class="bg-pink-500 p-3 rounded text-white" to="/auth/login">Login</router-link>
  	<button @click="logout" class="bg-pink-500 p-3 rounded text-white">Logout</button>
  	<router-link class="bg-pink-500 p-3 rounded text-white" to="/post/create">Create Post</router-link>
  	<button @click="getPosts" class="bg-pink-500 p-3 rounded text-white">Get Posts</button>
  	<ul class="list-none">
  		<li v-for="post in posts" :key="post.user_id">{{post.body}}</li>
  	</ul>
  </div>
</template>

<script lang="ts">
import {defineComponent,ref,Ref,reactive} from 'vue';
import {useStore} from 'vuex';
import Api from '@/api/Api';

export default defineComponent({
  name: 'Home',
  setup() {
  	const store = useStore();
  	const posts = ref([]);
  	const getPosts = async () => {
  		try {
  			const {data} = await Api.get('/post', {
  				headers: {
  					'Authorization': `Bearer ${store.getters['auth/TOKEN']}`
  				}
  			});
  			posts.value = data.post;
  			console.log(data);
  		} catch(err) {
  			throw err;
  		}
  	} 

  	const logout = async () => {
  		try {
  			const {data} = await store.dispatch('auth/LOGOUT');
  		} catch(err) {
  			throw err;
  		}
  	}
  	return {getPosts,posts,logout}
  }
});
</script>