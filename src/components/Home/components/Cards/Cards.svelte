<script>
	import { cardData } from "./cardData.js";

	let selected;
	$: console.log(selected);

	let cardBackShowing = false;

	const toggleBackFront = (e) => {
		// if same card clicked twice to toggle front and back
		if (selected === Number(e.target.dataset.cardId)) {
			selected = null;
			cardBackShowing = !cardBackShowing;
		} else {
			cardBackShowing = !cardBackShowing;
			selected = Number(e.target.dataset.cardId);
		}
	};
</script>

<div class="row">
	{#each cardData as { alt, position, descr, email, src }, i}
		<div class="flip-box">
			<div class="flip-box-inner" class:show-back={selected === i}>
				<div class="flip-box-front card">
					<img {...{ src, alt }} />
				</div>

				<div class="flip-box-back container">
					<h2>{alt}</h2>
					<p class="title">{position}</p>
					<p>{descr}</p>
					<a href="mailto:{email}">Email</a>
				</div>
			</div>
			<footer on:click={toggleBackFront} data-card-id={i}>
				{position}
			</footer>
		</div>
	{/each}
</div>

<style>
	/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
	.flip-box {
		background-color: transparent;
		width: 199px;
		height: 310px;
		margin: 0 1rem 2rem;
		margin-top: 1rem;
		box-shadow: 0 4px 8px 0 rgba(178, 228, 185, 0.2);
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip when you move the mouse over the flip box container */
	/* 	.flip-box:hover .flip-box-inner {
		transform: rotateY(180deg);
	} */

	.show-back {
		transform: rotateY(180deg);
	}

	/* Position the front and back side */
	.flip-box-front,
	.flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
	}

	/* Style the back side */
	.flip-box-back {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: #00923c;
		color: white;
		transform: rotateY(180deg);
		border: 1px solid darkgray;
	}

	img {
		height: 100%;
		max-width: 100%;
	}

	footer {
		width: 100%;
		font-weight: 800;
		padding: 0.5rem 1rem;
		text-align: center;
		border: 1px solid darkgray;
		cursor: pointer;
		transition: 0.3s all;
	}

	footer:hover {
		color: #fff;
		background-color: #00923c;
		border: 1px solid darkgray;
		box-shadow: 0 8px 16px 0 rgba(226, 243, 234, 0.2);
	}

	footer:active {
		color: rgb(10, 63, 38);
		border: 1px solid darkgray;
		background-color: darkgray;
		box-shadow: 0 8px 16px 0 rgba(226, 243, 234, 0.2);
	}

	/* Add some shadows to create a card effect */
	.card {
		box-shadow: 0 4px 8px 0 #00923c;
	}

	/* Some left and right padding inside the container */
	.container {
		padding: 5px;
	}
	h2 {
		margin: 5px 0 0 0;
	}

	.title {
		color: grey;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 10%;
	}
</style>
