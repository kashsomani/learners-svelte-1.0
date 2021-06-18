<script>
	import Footer from "./components/shared/Footer.svelte";
	import SideNav from "./components/shared/SideNav.svelte";
	import Router from "svelte-spa-router";
	import { routes } from "./router/routes.js";
</script>

<main>
	<SideNav />
	<div class="Title">
		<img src="assets/logo.png" alt="logo" class="w-16" />
		<div class="heading"><h1>Learners' Academy</h1></div>
		<div id="motto">Life is Learning</div>
	</div>

	<Router {routes} />

	<Footer />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	main {
		flex: 1 1 auto;
	}
	#motto {
		font-style: normal;
		font-weight: bold;
		text-align: center;
		color: var(--primary);
		@apply text-3xl;
	}
	.heading {
		font-style: normal;
		font-weight: bold;
		text-align: center;
		color: var(--primary);
		@apply text-6xl;
		top: 0%;
	}
	.Title {
		@apply flex flex-col justify-center items-center p-4;
	}
</style>
