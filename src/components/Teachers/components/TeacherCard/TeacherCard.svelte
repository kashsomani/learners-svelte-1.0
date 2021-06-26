<script>
	export let name;
	export let info;
	export let src;
	export let email;
	import TeacherCardHoverable from "./TeacherCardHoverable.svelte";
	import { fade } from "svelte/transition";
</script>

<div class="card-container ">
	<div class="max-w-md mx-auto p-0 m-0">
		<div class="relative m-0 shadow-lg bg-light grid grid-cols-2 ">
			<div
				class="grid grid-cols-1 place-items-center h-full card-image "
			>
				<img
					alt={name}
					class="teacher-image p-0 w-48 block mx-auto"
					{src}
				/>
			</div>
			<TeacherCardHoverable let:hover={active}>
				<div class="h-full">
					{#if !active}
						<div class="p-2 md:p-4" in:fade={{ duration: 500 }}>
							<h4 class="mb-0 md:mb-3" id="name">
								{name}
							</h4>
							<p id="info">
								{info}
							</p>
						</div>
						<!-- content here -->
					{:else}
						<div
							in:fade={{ duration: 500 }}
							class="grid grid-cols-1 grid-flow-col place-items-center p-4"
						>
							<a href="mailto:{email}" class="w-3/4"
								><img src="assets/email.png" alt="email" /></a
							>
						</div>
					{/if}
				</div>
			</TeacherCardHoverable>
		</div>
	</div>
</div>

<style>
	.teacher-image {
		min-width: 70px;
	}
	.card-container {
		box-shadow: 0.5rem 0.5rem 0.5rem rgba(15, 58, 33, 0.6);
	}
	.card-image {
		border: 0.6em solid rgba(15, 58, 33, 0.6);
		padding: 0.25em;
	}
	.bg-light {
		background-color: rgba(62, 200, 120, 0.3);
	}
	@media only screen and (max-width: 1800px) {
		#name {
			font-size: x-large;
			text-align: center;
		}
		#info {
			font-size: small;
			text-align: center;
		}
	}
	@media only screen and (max-width: 1280px) {
		#name {
			font-size: x-large;
			text-align: center;
		}
		#info {
			font-size: medium;
			text-align: center;
		}
	}
	@media only screen and (max-width: 600px) {
		.card-image {
			border: 0.6em solid rgba(15, 58, 33, 0.6);
			padding: 0.5em;
		}
		#name {
			font-size: x-large;
			text-align: center;
		}
		#info {
			font-size: small;
			text-align: center;
		}
	}
	@media only screen and (max-width: 340px) {
		.card-image {
			border: 0.6em solid rgba(15, 58, 33, 0.6);
			padding: 0.5em;
		}
		#name {
			font-size: medium;
			text-align: center;
		}
		#info {
			font-size: xx-small;
			text-align: center;
		}
	}
</style>
