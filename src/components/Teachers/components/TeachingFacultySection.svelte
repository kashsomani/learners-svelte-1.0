<script>
	export let teachers;
	export let heading;
	import TeacherCard from "./TeacherCard/TeacherCard.svelte";
</script>

<div class="grid grid-cols-1 place-items-center">
	<div class="teacher-section-heading p-4 text-center">
		<h5>{heading}</h5>
	</div>
	<div
		class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center m-0 px-6 md:px-20"
	>
		{#each teachers as teacher}
			<TeacherCard {...teacher} />
		{/each}
	</div>
</div>

<style>
	.teacher-section-heading {
		font-size: xx-large;
		color: var(--primary);
	}
</style>
