<script>
  import SlideShow from './SlideShow.svelte';
  import Cards from './Cards.svelte'
  import AboutUs from './AboutUs.svelte'
  import Intro from './Intro.svelte'
</script>
<div class="p-20 text-justify">
  <Intro/>
</div>
<div id="slideshow">
  <SlideShow/>
</div>
<div class="p-20 text-justify">
  <AboutUs/>
</div>
<div id="cards">
  <Cards/>
</div>

<style>
  #slideshow{
    width:75%;
    position: relative;
    left: 50%;
    margin-left: -37.5%;
  }
  #cards{
    width: 75%;
    position: relative;
    left: 50%;
    margin-left: -37.5%;
  }

</style>
