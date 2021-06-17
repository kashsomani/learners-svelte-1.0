<script>
	export let name;
	export let info;
	export let src;
	export let email;
	import TeacherCardHoverable from './TeacherCardHoverable.svelte'
	import {fade} from 'svelte/transition'
</script>

<div class="card-container ">
	<div class="max-w-md mx-auto p-0 m-0">
		<div class="relative m-0 shadow-lg bg-light grid grid-cols-2">
			<div class="grid grid-cols-1 place-items-center h-full card-image ">
				<img
					alt=""
					class="p-4 w-48 block mx-auto"
					src={src}
				/>
			</div>
			<TeacherCardHoverable let:hover={active}>
				<div class="h-full">
					{#if !active}
						<div class="p-4" in:fade={{ duration: 300 }}>
							<h4 class=" text-2xl mb-3">{name}</h4>
							<p class="leading-normal">
								{info}
							</p>
						</div>
						<!-- content here -->
					{:else}
						<div
							in:fade={{ duration: 300 }}
							class="grid grid-cols-1 grid-flow-col place-items-center p-4"
						>	
							<a href="mailto:{email}" class="w-3/4"><img src="assets/email.png" alt=""/></a>
							
						</div>
					{/if}
				</div>
			</TeacherCardHoverable>
		</div>
	</div>
</div>

<style>
	.card-container {
		box-shadow: 0.5rem 0.5rem 0.5rem rgba(15, 58, 33, 0.6);
	}
	.card-image {
		border: 1rem solid rgba(15, 58, 33, 0.6);
	}
	.bg-light {
		background-color: rgba(62, 200, 120, 0.3);
	}
</style>
