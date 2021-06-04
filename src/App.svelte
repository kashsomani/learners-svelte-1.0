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

	@layer utilities {
		.ml-55 {
			margin-left: 55%;
		}
	}

	h1 {
		margin: 0 0 5px;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 10%;
	}
</style>
