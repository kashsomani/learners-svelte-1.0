<script>
	export let name;
	export let info;
	export let src;
	export let email;
	import TeacherCardHoverable from "./TeacherCardHoverable.svelte";
	import { fade } from "svelte/transition";
</script>


		<div class="relative m-0 shadow-lg grid grid-cols-2 inner">
			<div
				class="grid grid-cols-1 place-items-center h-full card-image"
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
							class="grid grid-cols-1 grid-flow-col place-items-center p-4 h-full"
						>
							<a href="mailto:{email}" class="w-3/4"
								><img src="assets/email.png" alt="email" /></a
							>
						</div>
					{/if}
				</div>
			</TeacherCardHoverable>
		</div>

<style>
	.teacher-image {
		min-width: 70px;
	}
	.card-container {
		border-radius: 76px;
	}
	.inner{
		border-radius: 76px;
background: #b0e8b7;
box-shadow: inset 26px 26px 64px #9dcea3,
            inset -26px -26px 64px #c3ffcb;
		@apply p-4;
	}
	img{
		padding:1em;
		border-radius: 76px;
background: #b0e8b7;
box-shadow:  26px 26px 64px #9dcea3,
             -26px -26px 64px #c3ffcb;
						 overflow:hidden;
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
