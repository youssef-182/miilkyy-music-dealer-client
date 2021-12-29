<template>
	<div class="login">
		<login-form/>
	</div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue';

export default {
	name: 'login',
	components: {LoginForm}
}
</script>