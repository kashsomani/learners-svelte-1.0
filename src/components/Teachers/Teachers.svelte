<script>
    import TeacherCard from './components/TeacherCard.svelte'
</script>
<div class="grid grid-cols-1 place-items-center">
    <div class="page-heading p-4">
        <h5>Teaching Faculty</h5>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center m-0 px-20">
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
    </div>
</div>

<style>
    .page-heading{
        font-size:xx-large;
        color: var(--primary);
    }
</style>
