<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'Portafolio de Randy',
			author: 'Randy',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="https://github.com/randymxd06/my-portfolio"
				target="__blank"
				class="font-general-medium hover:underline hover:text-blue-600 dark:hover:text-blue-300 duration-500"
			>
				{{ projectName }}
			</a>
			. Desarrollado por
			<a
				href="https://www.instagram.com/randymxd06/"
				target="__blank"
				class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-blue-600 dark:hover:text-blue-300 duration-500"
				>{{ author }}</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
