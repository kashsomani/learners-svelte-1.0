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
  <div class="main-container ">
    <div class="container grid grid-cols-12 place-items-center">
      <div class="col-span-1 grid grid-cols-1 place-items-center pr-2">
        <button on:click={prevSlide} class="h-12">
          <img src="./assets/prev.png" alt="previous image" />
        </button>
      </div>
      <div class="col-span-10">
        <Slide image={image.imgurl} altTag={image.name} />
      </div>

      <div class="col-span-1 grid grid-cols-1 place-items-center pl-2">
        <button on:click={nextSlide} class="h-12">
          <img src="./assets/next.png" alt="next image" /></button
        >
      </div>
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
  .main-container {
    border-radius: 50px;
    background: #94f09a;
    box-shadow: 20px 20px 60px #7ecc83, -20px -20px 60px #aaffb1;
  }
  #slideshow {
    max-width: 70%;
  }

  /* Position the image container (needed to position the left and right arrows) */
  .container {
    @apply p-8;
  }

  .thumbnails-row {
    width: 100%;
    display: flex;
    align-self: flex-end;
  }
</style>
