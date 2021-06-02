<script>
</script>

<main>
  <div class="Title">
    <img src="assets/logo.png" alt="logo" class="w-16" />
    <div class="heading">Learners' Academy</div>
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer utilities {
    .ml-55 {
      margin-left: 55%;
    }
  }
	
  .heading {
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: #00923c;
		@apply text-2xl
  }
	.Title{
		@apply flex flex-col justify-center items-center;
	}
</style>
