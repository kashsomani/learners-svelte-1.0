<script>
	import { parents } from "./parentsData/parents.js";
	import * as animateScroll from "svelte-scrollto";
	import { onMount } from "svelte";
	onMount(() => {
		animateScroll.scrollToTop({ duration: 1000 });
	});
</script>

<svelte:head>
	<title>Our Parents' Reviews</title>
</svelte:head>
<div class="parent-section-heading p-4 text-center">
	<h5>Our Parents' Reviews</h5>
</div>

<div
	class="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 place-items-center gap-6 px-12 md:px-20 my-10"
	id="container"
>
	{#each parents as parent}
		<div
			class=" grid grid-cols-1 gap-0 max-w-md py-4 px-8 shadow-lg rounded-lg my-6 bg-card"
		>
			<div class="flex justify-center md:justify-end -mt-16">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					class="w-20 h-20 object-cover rounded-full border-2 border-green-500"
					src={parent.src}
				/>
			</div>
			<div>
				<h2 class=" text-3xl font-semibold">{parent.title}</h2>
				<p class="mt-2 ">
					{parent.info}
				</p>
			</div>
			<div class="flex justify-end">
				<p class="text-xl font-medium ">{parent.name}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.bg-card {
		background-color: #16bd0734;
	}
	#container {
		align-items: stretch;
		place-items: stretch;
	}
	.parent-section-heading {
		font-size: xx-large;
		color: var(--primary);
	}
</style>
