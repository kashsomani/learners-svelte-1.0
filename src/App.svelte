<script>
	import Cards from "./cards.svelte";
	import SlideShow from "./SlideShow.svelte";
</script>

<main>
	<div class="object-center">
		<img src="assets/logo.png" alt="logo" />
	</div>


	<SlideShow />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

</style>
