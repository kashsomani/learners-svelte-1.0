<script>
    import { images } from "./data/slideShowData.js";
    import Slide from "./components/Slide.svelte";
    import Thumbnail from "./components/Thumbnail.svelte";
    import Caption from "./components/Caption.svelte";

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

<main id="slideshow" class="grid grid-cols-1 place-items-center items-center">
    <div class="main-container">
        <div class="container">
            <Slide
                image={image.imgurl}
                altTag={image.name}
                slideNo={image.id + 1}
                totalSlides={images.length}
            />
        </div>
    
    <div id="bottom-info">
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
    </div>
    
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap");

    * {
        box-sizing: border-box;
        font-family: "Josefin Sans", sans-serif;
    }

    main {
        display: flex;
        flex-direction: column;
        
    }
    .main-container{
        width: 100%;
    position: relative;
    left: 50%;
    margin-left: -50%;
    }
    #slideshow{
        max-width: 70%;
    }

    /* Position the image container (needed to position the left and right arrows) */
    .container {
  width: 100%;
    position: relative;
    left: 50%;
    margin-left: -50%;
    
    }

    .thumbnails-row {
        width: 100%;
        display: flex;
        align-self: flex-end;
    }
</style>
