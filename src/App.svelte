<script>
  import Footer from "./components/shared/Footer.svelte";
  import SideNav from "./components/shared/SideNav.svelte";
  import Router from "svelte-spa-router";
  import { routes } from "./router/routes.js";
</script>

<main>
  <SideNav />
  <div class="Title embossed">
    <img src="assets/logo.png" alt="logo" class="w-16" />
    <div class="heading"><h1>Learners' Academy</h1></div>
    <div id="motto">Life is Learning</div>
  </div>

  <Router {routes} />

  <Footer />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  .embossed-depressed {
    border-radius: 50px;
    background: linear-gradient(145deg, #9ed1a5, #bcf8c4);
    box-shadow: 20px 20px 25px #96c59c, -20px -20px 25px #caffd2;
  }
  .embossed {
    border-radius: 50px;
    background: #b0e8b7;
    box-shadow: 10px 10px 25px #96c59c, -10px -10px 25px #caffd2;
  }
  .depressed {
    border-radius: 76px;
    background: #b0e8b7;
    box-shadow: inset 26px 26px 64px #9dcea3, inset -26px -26px 64px #c3ffcb;
  }
  main {
    flex: 1 1 auto;
  }
  #motto {
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: var(--primary);
    @apply text-3xl;
  }
  .heading {
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: var(--primary);
    @apply text-6xl;
    top: 0%;
  }
  .Title {
    @apply flex flex-col justify-center items-center p-4 m-20;
  }
</style>
