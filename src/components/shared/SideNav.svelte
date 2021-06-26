<div class="fixed top-48 w-8 sm:w-12 md:w-14 left-2" id="sidenav">
	<div class=" inset-y-0 left-0 text-center justify-items-center">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#" class="pt-1 px-6 "
			><img src="./assets/home.svg" alt="home" /></a
		>
		<a href="#/activities" class="pt-1 px-6 "
			><img src="./assets/pictures.svg" alt="activities" /></a
		>
		<a href="#/teachers" class="pt-1 px-6 "
			><img src="./assets/teachers.svg" alt="teachers" /></a
		>
		<a href="#/reviews" class="pt-1 px-6 "
			><img src="./assets/reviews.svg" alt="reviews" /></a
		>
		<a href="#/curriculum" class="pt-1 px-6 "
			><img src="./assets/curriculum.svg" alt="curriculum" /></a
		>
	</div>
	<div />
</div>

<style>
	img {
		width: 90%;
		margin: 0 auto;
	}
	#sidenav {
		background: #4fc46850;
		border-style: solid;
		border-color: var(--primary);
		border-width: 0.25rem;
		border-radius: 6rem;
		z-index: 1000;
		box-shadow: 0.2em 0.2em 0.5em green;
	}
</style>
