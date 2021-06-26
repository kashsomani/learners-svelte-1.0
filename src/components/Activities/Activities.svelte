<script>
	import { fly } from "svelte/transition";
	import * as animateScroll from "svelte-scrollto";
	import { onMount } from "svelte";
	onMount(() => {
		animateScroll.scrollToTop({ duration: 1000 });
	});
</script>

<svelte:head>
	<title>Activities</title>
</svelte:head>
<div
	in:fly={{ duration: 2000 }}
	class="p-20 grid grid-cols-1 place-items-center"
>
	<div>
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/J8KhgXSJWVU"
			title="Our Activities"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
</div>

<style>
	iframe {
		width: 70vw;
		height: 39.375vw;
		max-height: 100%;
	}
</style>
