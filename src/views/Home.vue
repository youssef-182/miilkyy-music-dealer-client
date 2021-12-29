<template>
  <div class="flex justify-around">
  	<router-link class="bg-pink-500 p-3 rounded text-white" to="/auth/register">Register</router-link>
  	<router-link class="bg-pink-500 p-3 rounded text-white" to="/auth/login">Login</router-link>
  	<button @click="logout" class="bg-pink-500 p-3 rounded text-white">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useStore} from 'vuex';

export default defineComponent({
  name: 'Home',
  setup() {
  	const store = useStore();
  	const logout = async () => {
  		try {
  			const {data} = await store.dispatch('auth/LOGOUT');
  		} catch(err) {
  			throw err;
  		}
  	}
  	return {logout}
  }
});
</script>