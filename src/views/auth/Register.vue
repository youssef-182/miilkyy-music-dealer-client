<template>
	<div class="register">
		<register-form/>
	</div>
</template>

<script>
import RegisterForm from '@/components/auth/RegisterForm.vue';
export default {
	name: 'register',
	components: {RegisterForm}
}
</script>