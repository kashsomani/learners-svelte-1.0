const cardDirectory = "./assets/cards"
const src = (dir) => `${cardDirectory}/${dir}`
export const cardData = [
    {
        id: 0,
        alt: "Mr Sumeet Gupta",
        position: "Trustee",
        descr: "Mr. Sumeet Gupta is the spearhead and visionary of Learners’.",
        email: "shahinsomani@learnersacademy.education",
        src: src("sumeet.jpg")
    },
    {
        id: 1,
        alt: "Mrs. Shahin Somani",
        position: "Administrator",
        descr: "Mrs.Shahin Somani is an inspiring leader who ensures that Learners’ remains a step ahead.",
        email: "shahinsomani@learnersacademy.education",
        src: src("shahin.jpg")
    },
    {
        id: 2,
        alt: "Miss Jessica Sequeira",
        position: "Principal",
        descr: "Ms.Jessica Sequeira is a dynamic principal who maintains the excellent academics at Learners’.",
        email: "jessicasequeira@learnersacademy.education",
        src: src("jessica.jpg")
    },
    {
        id: 3,
        alt: "Miss Yashica Patel",
        position: "Vice-Administrator",
        descr: "Ms.Yashica Patel is an enthusiastic deputy admin who mentors the engaging activities of Learners'.",
        email: "yashicapatel@learnersacademy.education",
        src: src("yashica new.jpg")
    }
]