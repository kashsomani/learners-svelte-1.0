<script>
	export let thumbImg;
	export let altTag;
	export let titleLink;
	export let id;
	export let selected;
</script>

<div class="thumbnail-cont">
	<img
		class="sample cursor"
		class:active={selected}
		{id}
		src={thumbImg}
		alt={altTag}
		title="Image from {titleLink}"
		on:click
	/>
</div>

<style>
	/* Six columns side by side */
	.thumbnail-cont {
		width: 16.66%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ddd;
	}

	/* Add a transparency effect for thumnbail images */
	.sample {
		opacity: 0.4;
	}

	.sample:hover {
		opacity: 1;
	}

	img {
		width: 80%;
		height: 80%;
		transition: all 0.1s ease-in-out;
	}

	/* Add a pointer when hovering over the thumbnail images */
	.cursor {
		cursor: pointer;
	}

	.active {
		opacity: 1;
		padding: 5px;
		width: 85%;
		height: 85%;
	}
</style>
