<script>
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import projects from '../data/projects';

export default {
	name: 'Projects',
	data() {
		return {
			projects,
		}
	},
	components: {
		ProjectsGrid,
	},
};
</script>

<template>
	<div class="container mx-auto">
		<ProjectsGrid :projects="projects" />
	</div>
</template>

<style scoped></style>
