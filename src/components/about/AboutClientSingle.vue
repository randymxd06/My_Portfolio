<script>
export default {
	props: ['technology'],
};
</script>

<template>
	<div>
		<a :href="technology.url">
			<img
				:title="technology.title"
				:src="technology.img"
				:alt="technology.title"
				class="w-40 h-20 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light"
			/>
		</a>
	</div>
</template>

<style lang="scss" scoped></style>
