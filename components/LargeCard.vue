<template>
	<NuxtLink :to="`/products/${card.id}`" class="card">
		<img
			:src="require(`@/assets/image/${card.image || 'laptop1.jpg'}`)"
			alt="laptop image"
			class="image"
		/>
		<h3 class="header">{{ card.title }}</h3>
		<p class="snippet">{{ card.snippet }}</p>
	</NuxtLink>
</template>

<script>
export default {
	props: ["card"],
};
</script>

<style scoped>
.card {
	width: 31.5%;
	height: 25rem;
	border: none;
	overflow: hidden;
	padding: 0;
	cursor: pointer;
	text-decoration: none;
}
.image {
	height: 65%;
	border-radius: 0.5rem;
}
.header {
	/* color: black; */
	font-size: 1.15rem;
	margin-top: 0.4rem;
}
.header:hover {
	color: black;
	text-decoration: none;
}
.snippet {
	color: grey;
}
</style>
