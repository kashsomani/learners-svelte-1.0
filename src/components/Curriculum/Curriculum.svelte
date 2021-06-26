<script>
	import * as animateScroll from "svelte-scrollto";
	import { onMount } from "svelte";
	onMount(() => {
		animateScroll.scrollToTop({ duration: 1000 });
	});
</script>

<svelte:head>
	<title>Our Curriculum</title>
</svelte:head>
<div class="px-12 md:px-20 my-10 grid grid-cols-1 place-items-center">
	<h2>Curriculum:</h2>
	<div
		class="grid grid-cols-1  md:grid-cols-2  place-items-stretch gap-4 "
	>
		<div
			class="text-center py-2 px-8 shadow-lg rounded-lg my-6 bg-card"
		>
			<h3 class="text-xl font-semibold">STD I - II</h3>
			<div>
				<ul class="text-lg ">
					<li>English Language</li>
					<li>English Literature</li>
					<li>Hindi</li>
					<li>Marathi</li>
					<li>Math</li>
					<li>Science</li>
					<li>Computer / Coding</li>
					<li>Value Education</li>
					<li>Purposeful Pursuits (P.P)</li>
					<li>S.T.E.M</li>
				</ul>
			</div>
		</div>
		<div
			class=" text-center py-2 px-8 shadow-lg rounded-lg my-6 bg-card"
		>
			<h3 class="text-xl font-semibold">STD III - V</h3>

			<div class="grid grid-cols-1 place-items-center">
				<ul class="text-lg ">
					<li>English Language</li>
					<li>English Literature</li>
					<li>Hindi</li>
					<li>Marathi</li>
					<li>Math</li>
					<li>Science</li>
					<li>Computer / Coding</li>
					<li>Value Education</li>
					<li>Socially Useful Productive Work (S.U.P.W)</li>
					<li>Personal Pursuits (P.P)</li>
					<li>S.T.E.M</li>
				</ul>
			</div>
		</div>
		<div
			class="grid grid-cols-1 place-items-center text-center py-2 px-8 shadow-lg rounded-lg my-6 bg-card"
		>
			<h3 class="text-xl font-semibold">STD VI - VIII</h3>
			<ul class="text-lg ">
				<li>English Language</li>
				<li>English Literature</li>
				<li>Hindi</li>
				<li>French</li>
				<li>Marathi (STD VI - VII)</li>
				<li>Math</li>
				<li>Science (STD VII - VIII)</li>
				<li>Physics, Chemistry, and Biology</li>
				<li>Computer / Coding</li>
				<li>History</li>
				<li>Geography</li>
				<li>Socially Useful Productive Work (S.U.P.W)</li>
				<li>Personal Pursuits (P.P)</li>
				<li>S.T.E.M</li>
			</ul>
		</div>
		<div
			class="grid grid-cols-1 place-items-center text-center py-2 px-8 shadow-lg rounded-lg my-6 bg-card"
		>
			<h3 class="text-xl font-semibold">STD VI - VIII</h3>
			<ul class="text-lg ">
				<li>English Language</li>
				<li>English Literature</li>
				<li>Hindi</li>
				<li>French</li>
				<li>Marathi</li>
				<li>Math</li>
				<li>Science (STD VII - VIII)</li>
				<li>Physics, Chemistry, and Biology</li>
				<li>Computer / Coding</li>
				<li>History</li>
				<li>Geography</li>
				<li>Socially Useful Productive Work (S.U.P.W)</li>
				<li>Personal Pursuits (P.P)</li>
				<li>S.T.E.M</li>
			</ul>
		</div>
		<div
			class="md:col-span-2 xl:col-span-2 text-center py-2 px-8 shadow-lg rounded-lg my-6 bg-card"
		>
			<h3 class="text-xl font-semibold">STD IX - X</h3>
			<ul class="grid grid-cols-1 md:grid-cols-2 text-xl ">
				<li>
					<div>
						<h4>Group I</h4>
						<p>(Mandatory)</p>
						<ul>
							<li>
								English
								<ul class="sub-list">
									<li>Language</li>
									<li>Literature</li>
								</ul>
							</li>
							<li>
								Secondary Language
								<ul class="sub-list">
									<li>French</li>
									<li>Hindi</li>
								</ul>
							</li>
							<li>History, Civics and Geography - Paper I</li>
							<li>History, Civics and Geography - Paper II</li>
						</ul>
					</div>
				</li>
				<li>
					<div>
						<div class="p-1">
							<h4>Group II</h4>
							<p>(choose one)</p>
							<ul>
								<li>
									Mathematics and Science
									<ul class="sub-list">
										<li>Physics</li>
										<li>Chemistry</li>
										<li>Biology</li>
									</ul>
								</li>
								<li>Mathematics and Commercial Studies</li>
								<li>Commercial Studies and Envioronmental Science</li>
							</ul>
						</div>
						<div class="p-1">
							<h4>Group III</h4>
							<p>(choose one)</p>
							<ul>
								<li>Computer Applications</li>
								<li>Art</li>
								<li>Home Science</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div
			class="md:col-span-2 grid grid-cols-1 place-items-center text-center py-2 px-8 shadow-lg rounded-lg my-6 bg-card"
		>
			<h3 class="text-xl font-semibold">
				To enhance and enrich our academic offerings, we also offer:
			</h3>
			<ul class="text-base sm:text-lg ">
				<li>Swimming</li>
				<li>Speech & Drama</li>
				<li>Vedic Math</li>
				<li>Dance</li>
				<li>Music and Choir</li>
				<li>Cookery</li>
				<li>Yoga</li>
				<li>Applied Computer Science</li>
				<ul class="sub-list">
					<li>Robotics</li>
					<li>Game-Development</li>
				</ul>
				<li>Creative Masters</li>
				<ul class="sub-list">
					<li>Animation</li>
					<li>Graphic Design</li>
					<li>3D Models</li>
				</ul>
			</ul>
		</div>
	</div>
</div>

<style lang="postcss">
	.bg-card {
		background-color: #16bd0734;
		border: 0.2em solid #16bd0785;
	}
	h4 {
		@apply font-semibold;
	}
	li {
		@apply p-1;
	}
	h3 {
		@apply p-4;
	}
	h2 {
		color: var(--primary);
		@apply text-3xl;
	}
	.sub-list {
		@apply text-sm grid grid-flow-col place-content-center;
	}
</style>
