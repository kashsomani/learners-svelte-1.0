<script>
	import { academicManagementData } from "./teachersData/academicManagement";
	import { officeStaffData } from "./teachersData/officeStaff";
	import { teachingFacultyData } from "./teachersData/teachingFaculty";
	import TeachingFacultySection from "./components/TeachingFacultySection.svelte";
	import { fly } from "svelte/transition";
	import * as animateScroll from "svelte-scrollto";
	import { onMount } from "svelte";
	onMount(() => {
		animateScroll.scrollToTop({ duration: 1000 });
	});
</script>

<svelte:head>
	<title>Our Teachers</title>
</svelte:head>
<div in:fly={{ duration: 2000 }} class="px-4">
	<TeachingFacultySection
		heading="Academic Management"
		teachers={academicManagementData}
	/>

	<TeachingFacultySection
		heading="Teaching Faculty"
		teachers={teachingFacultyData}
	/>
	<TeachingFacultySection
		heading="Office Staff"
		teachers={officeStaffData}
	/>
</div>
