<script>
	import AboutUs from "./components/AboutUs.svelte";
	import Intro from "./components/Intro.svelte";
	import SlideShow from "./components/SlideShow/SlideShow.svelte";
	import Cards from "./components/Cards/Cards.svelte";
	import { fly } from "svelte/transition";
	import * as animateScroll from "svelte-scrollto";
	import { onMount } from "svelte";
	onMount(() => {
		animateScroll.scrollToTop({ duration: 1000 });
	});
</script>

<svelte:head>
	<title>Learners' Academy - ICSE SCHOOL, Mumbai</title>
</svelte:head>

<main in:fly={{ duration: 2000 }}>
	<div class="p-20 text-justify">
		<Intro />
	</div>
	<div id="slideshow">
		<SlideShow />
	</div>
	<div class="p-20 text-justify">
		<AboutUs />
	</div>
	<div id="cards">
		<Cards />
	</div>
</main>

<style>
	#slideshow {
		width: 75%;
		position: relative;
		left: 50%;
		margin-left: -37.5%;
	}
	#cards {
		width: 75%;
		position: relative;
		left: 50%;
		margin-left: -37.5%;
	}
</style>
