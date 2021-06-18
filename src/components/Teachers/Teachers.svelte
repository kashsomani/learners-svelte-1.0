<script>
    import { academicManagementData } from "./teachersData/academicManagement";
    import { teachingFacultyData } from "./teachersData/teachingFaculty";
    import TeachingFacultySection from "./components/TeachingFacultySection.svelte";
    import { fly } from "svelte/transition";
</script>

<div in:fly={{ duration: 2000 }}>
    <TeachingFacultySection
        heading="Academic Management"
        teachers={academicManagementData}
    />

    <TeachingFacultySection
        heading="Teaching Faculty"
        teachers={teachingFacultyData}
    />
</div>
