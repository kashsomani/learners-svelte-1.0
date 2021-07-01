const teachersDirectory = "./assets/teachers/office-staff";
const src = (dir) => `${teachersDirectory}/${dir}`;
const email = "support@learnersacademy.education";
export const officeStaffData = [
	{
		name: "Pooja Ahuja",
		info: "Mrs. Ahuja is our office manager",
		src: src("PoojaAhuja.png"),
		email: email,
	},
	{
		name: "Pooja Padwal",
		info: "Ms. Padwal is our office administrator",
		src: src("RutujaPadwal.png"),
		email: email,
	},
];
