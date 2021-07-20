<script>
  export let image;
  export let altTag;
</script>

<!-- Full-width images with number text -->
<div class="mySlides">
  <div class="img-container p-8">
    <img src={image} alt={altTag} />
  </div>
</div>

<style>
  /* Number text (1/3 etc) */

  .numbertext {
    color: #f2f2f2;
    font-size: 0.9rem;
    padding: 8px 12px;
    text-shadow: 1px 1px black;
    position: absolute;
    top: 0;
  }
  .img-container {
    border-radius: 50px;
    background: #94f09a;
    box-shadow: inset 40px 40px 60px #7ecc83, inset -40px -40px 60px #aaffb1;
  }
  img {
    width: 100%;
    position: relative;
    left: 50%;
    margin-left: -50%;
    border-radius: 50px;
    background: #94f09a;
    box-shadow: inset 20px 20px 60px #7ecc83, inset -20px -20px 60px #aaffb1;
  }
</style>
