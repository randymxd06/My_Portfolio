<script>
import AboutClientSingle from './AboutClientSingle.vue';
import technologies from '../../data/technologies';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			technologiesHeading: 'Algunas de las tecnologías y herramientas con las que he trabajado',
			technologies,
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ technologiesHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-8 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="technology in technologies"
				:key="technology.id"
				:technology="technology"
			/>
		</div>
	</div>
</template>
