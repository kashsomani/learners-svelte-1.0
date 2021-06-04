<script>
    import { images } from "../scripts/imageData.js";
    import Slide from "./Slide.svelte";
    import Thumbnail from "./Thumbnail.svelte";
    import Caption from "./Caption.svelte";

    let imageShowingIndex = 0;
    $: console.log(imageShowingIndex);
    $: image = images[imageShowingIndex];

    const nextSlide = () => {
        if (imageShowingIndex === images.length - 1) {
            imageShowingIndex = 0;
        } else {
            imageShowingIndex += 1;
        }
    };

    const prevSlide = () => {
        if (imageShowingIndex === 0) {
            imageShowingIndex = images.length - 1;
        } else {
            imageShowingIndex -= 1;
        }
    };

    const goToSlide = (number) => (imageShowingIndex = number);
</script>

<main>
    <div class="container">
        <Slide
            image={image.imgurl}
            altTag={image.name}
            slideNo={image.id + 1}
            totalSlides={images.length}
        />
    </div>

<div>
    <Caption caption={images[imageShowingIndex].name}
    on:prevClick={prevSlide}
    on:nextClick={nextSlide}/>
</div>
    

    <!-- Thumbnail images -->
    <div class="thumbnails-row">
        {#each images as { id, imgurl, name }}
            <Thumbnail
                thumbImg={imgurl}
                altTag={name}
                {id}
                selected={imageShowingIndex === id}
                on:click={() => goToSlide(id)}
            />
        {/each}
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap");

    * {
        box-sizing: border-box;
        font-family: "Josefin Sans", sans-serif;
    }

    main {
        width: 100%;
		height: 100%;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 10px;
    }

    /* Position the image container (needed to position the left and right arrows) */
    .container {
        display: flexbox;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
        position: relative;
        width: 520px;
		height: 344px;
    }

    .thumbnails-row {
        width: 100%;
        display: flex;
        align-self: flex-end;
    }
</style>
