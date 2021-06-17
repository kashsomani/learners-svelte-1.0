<script>
    import {academicManagementData} from './teachersData/academicManagement'
    import {teachingFacultyData} from './teachersData/teachingFaculty'
    import TeachingFacultySection from './components/TeachingFacultySection.svelte'
</script>

<TeachingFacultySection heading="Academic Management" teachers={academicManagementData}/>

<TeachingFacultySection heading="Teaching Faculty" teachers={teachingFacultyData}/>

