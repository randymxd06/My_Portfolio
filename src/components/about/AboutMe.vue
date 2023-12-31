<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio: '¡Hola! 👋 Soy Randy Rafael Martínez Cepeda, un joven apasionado de la tecnología 💻 Técnico en Informatica egresado de INFOTEP y estudiante de termino de Ingenieria en Sistemas Computacionales de UTESA.',
				},
				{
					id: 2,
					bio: 'Trabajé como desarrollador web, comenzando en el backend con Laravel, PostgreSQL, Slack, Git y MySQL, entre otras tecnologías. Posteriormente, me trasladé al frontend utilizando Vue.js y React.js para crear experiencias de usuario atractivas, por último, desempeñé el rol de desarrollador FullStack con tecnologías como Nest.js, Node.js, Laravel, React.js, Vue 3 con Pinia, TypeScript y Composition API, además de trabajar con herramientas como Asana, Firebase, Docker, MongoDB y muchas más.',
				},
				{
					id: 3,
					bio: 'Estoy emocionado por seguir creciendo profesionalmente y explorar nuevas oportunidades en el mundo de la tecnología. Siempre estoy dispuesto a conectar y aprender de personas con ideas afines. ¡No dudes en contactarme y comenzar una conversación!',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/randy-profile-photo.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
