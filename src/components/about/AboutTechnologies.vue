<script>
import AboutClientSingle from './AboutClientSingle.vue';
import technologies from '../../data/technologies';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			technologiesHeading: 'Tecnologías y Herramientas',
			technologies,
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20 container">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ technologiesHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-5 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="technology in technologies"
				:key="technology.id"
				:technology="technology"
			/>
		</div>
	</div>
</template>
