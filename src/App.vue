<template>
	<div class="pt-7 background min-h-screen">
		<main class="max-w-xl mx-auto bg-white p-6 rounded-2xl">
	  	<router-view/>
		</main>
	</div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

.background {
	background-image: url('./assets/u3e2l1jt0ar61.jpg');
	height: 100%;
	// background-position: center;
	background-repeat: repeat;
	background-size: cover;
}
</style>
