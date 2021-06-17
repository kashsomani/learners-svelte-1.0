<script>
    export let teachers;
    export let heading;
    import TeacherCard from './TeacherCard.svelte'
</script>
<div class="grid grid-cols-1 place-items-center">
    <div class="teacher-section-heading p-4">
        <h5>{heading}</h5>
    </div>
    <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center m-0 px-20"
    >
    {#each teachers as teacher}
        <TeacherCard {...teacher}/>
    {/each}
    </div>
</div>

<style>
    .teacher-section-heading {
        font-size: xx-large;
        color: var(--primary);
    }
</style>