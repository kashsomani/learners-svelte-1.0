import Home from "../components/Home/Home.svelte";
import Activities from "../components/Activities/Activities.svelte";
import Teachers from "../components/Teachers/Teachers.svelte";
import Reviews from "../components/Reviews/Reviews.svelte";
import Curriculum from "../components/Curriculum/Curriculum.svelte";

export const routes = {
	"/": Home,
	"/activities": Activities,
	"/teachers": Teachers,
	"/reviews": Reviews,
	"/curriculum": Curriculum,
};
