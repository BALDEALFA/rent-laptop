<template>
	<div>
		<Nav />
		<div class="container">
			<Hero />
			<LargeCardDisplay
				v-for="cardInfo in largeCardInfo"
				:key="cardInfo.id"
				:cardsSection="cardInfo"
			/>
			<SmallCardDisplay
				v-for="cardInfo in smallCardSections"
				:key="cardInfo.id"
				:cardsSection="cardInfo"
			/>
		</div>
	</div>
</template>

<script>
import { largeCardSections, smallCardSections } from "@/assets/data.js";
import Nav from "../components/Nav.vue";
import Hero from "../components/Hero.vue";
import LargeCardDisplay from "../components/LargeCardDisplay.vue";
import SmallCardDisplay from "../components/SmallCardDisplay.vue";
export default {
	components: { Nav, Hero, LargeCardDisplay, SmallCardDisplay },
	data() {
		return {
			largeCardInfo: largeCardSections,
			smallCardSections,
		};
	},
};
</script>

<style></style>
