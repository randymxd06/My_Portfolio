<script>
import counter from 'vue3-autocounter';
export default {
	components: {
		counter,
	},
	data: () => {
		return {
			experienceTitle: 'Años de Experiencia',
			certificationsTitle: 'Certificaciones Obtenidas',
			// goalsTitle: 'Cumplimiento de Objetivos',
			collaborationsTitle: 'Colaboraciones Exitosas',
			projectsTitle: 'Proyectos Completados',
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<!-- About me counters -->
		<div
			class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"
		>
			<!-- Years of Experience Counter -->
			<div class="mb-20 sm:mb-0">
				<!-- @finished="alert(`Counting finished!`)" -->
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="3"
					:duration="1"
					prefix=""
					suffix=""
					:autoinit="true"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
					aria-label="About Status Counter"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ experienceTitle }}
				</span>
			</div>

			<!-- Certifications Counter -->
			<div class="mb-20 sm:mb-0">
				<!-- @finished="alert(`Counting finished!`)" -->
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="17"
					:duration="1"
					suffix=""
					:autoinit="true"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					>{{ certificationsTitle }}</span
				>
			</div>

			<!-- Achievement of Goals Counter -->
			<!-- <div class="mb-20 sm:mb-0">
				@finished="alert(`Counting finished!`)"
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="80"
					:duration="1"
					suffix="%"
					:autoinit="true"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ goalsTitle }}
				</span>
			</div> -->
			
			<!-- Successful Collaborations Counter -->
			<div class="mb-20 sm:mb-0">
				<!-- @finished="alert(`Counting finished!`)" -->
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="15"
					:duration="1"
					prefix=""
					suffix=""
					:autoinit="true"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ collaborationsTitle }}
				</span>
			</div>

			<!-- Projects completed counter -->
			<div class="mb-20 sm:mb-0">
				<!-- @finished="alert(`Counting finished!`)" -->
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="10"
					:duration="1"
					prefix="+"
					:autoinit="true"
					class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
				>
					{{ projectsTitle }}
				</span>
			</div>

		</div>

	</div>
	
</template>
