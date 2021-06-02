<script>
  import Footer from './Footer.svelte'
</script>

<main>
  <div class="Title">
    <img src="assets/logo.png" alt="logo" class="w-16" />
    <div class="heading">Learners' Academy</div>
  </div>
    <Footer/>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .heading {
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: var(--primary);
    @apply text-6xl;
  }
  .Title {
    @apply flex flex-col justify-center items-center;
  }
</style>
