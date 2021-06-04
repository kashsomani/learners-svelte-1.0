<script>
  import SlideShow from './SlideShow.svelte';
  import Cards from './Cards.svelte'
</script>

<div id="slideshow">
  <SlideShow/>
</div>
<div id="cards">
  <Cards/>
</div>

<style>
  #slideshow{
    width:50%;
    position: relative;
    left: 50%;
    margin-left: -25%;
  }
  #cards{
    display: flex;
  }
</style>
