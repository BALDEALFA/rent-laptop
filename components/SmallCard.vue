<template>
	<NuxtLink :to="`/products/${card.id}`" class="card-container">
		<img
			:src="require(`@/assets/image/${card.image || 'laptop1.jpg'}`)"
			alt="laptop image"
			class="image"
		/>
	</NuxtLink>
</template>

<script>
export default {
	props: ["card"],
};
</script>

<style scoped>
.card-container {
	width: 24%;
	height: 12.5rem;
	border-radius: 0.5rem;
	overflow: hidden;
	margin-bottom: 1.5rem;
	cursor: pointer;
}
.image {
	width: 100%;
	height: 100%;
}
</style>
