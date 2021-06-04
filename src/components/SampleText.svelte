<script>
  import SlideShow from './SlideShow.svelte';
  import Cards from './Cards.svelte'
  import AboutUs from './AboutUs.svelte'
</script>

<div id="slideshow">
  <SlideShow/>
</div>
<div class="p-10 text-justify" id="about-us">
  <AboutUs/>
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
    width: 75%;
    position: relative;
    left: 50%;
    margin-left: -37.5%;
  }
  #about-us{
    width: 75%;
    position: relative;
    left: 50%;
    margin-left: -37.5%;
  }
</style>
