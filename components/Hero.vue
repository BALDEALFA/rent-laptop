<template>
	<div class="Hero conatiner">
		<div class="text-container">
			<h1 class="header">Find your Laptop</h1>
			<p class="snippet">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta commodi
				autem nemo, qui quas debitis mollitia nobis fugit dignissimos libero
				iure nihil, nostrum doloribus eius quam, quis delectus inventore
				distinctio?
			</p>
			<button class="button btn">Start Looking</button>
		</div>
		<img src="~assets/image/laptop.jpg" alt="laptop image" class="image" />
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	computed: {
		...mapState(["products"]),
	},
};
</script>

<style scoped>
.Hero {
	height: 50vh;
	position: relative;
	display: flex;
	padding: 5rem 0;
	align-items: flex-start;
	justify-content: space-between;
}
.text-container {
	width: 50%;
	margin-top: 4rem;
}
.header {
	font-weight: 900;
	font-size: 5rem;
}
.snippet {
	color: grey;
	font-size: 1.25rem;
}
.image {
	width: 27.5rem;
	margin-top: 2rem;
}
.overlay {
	background: rgba(0, 0, 0, 0);
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
}
.button {
	padding: 1rem 4rem;
	border-radius: 100rem;
	background-color: rgb(231, 81, 43);
	color: white;
	width: 20rem;
	font-weight: 700;
	transition: 0.5s;
}
.button:hover {
	width: 21.5rem;
}
@media (max-width: 500px) {
	.Hero {
		height: 40vh;
	}
}
</style>
