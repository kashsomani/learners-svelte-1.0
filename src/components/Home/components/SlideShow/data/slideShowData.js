const SlideshowDirectory = "assets/slideshow"
const src = (img) => `${SlideshowDirectory}/${img}`
export const images = [
    {
        id: 0,
        name: "School Building",
        imgurl: src("School building.png"),
    },
    {
        id: 1,
        name: "Mr. and Mrs. Gupta with Respected Asif Zakaria",
        imgurl: src("Actors.png"),
    },
    {
        id: 2,
        name: "Our ex-student Ranveer Singh revisits",
        imgurl: src("ranveer1.jpg"),
    },
    {
        id: 3,
        name: "Sports Day",
        imgurl: src("Sports.png"),
    },
    {
        id: 4,
        name: "Annual Day Special Guest",
        imgurl: src("Annual Day.png"),
    },
    {
        id: 5,
        name: "Choir practice",
        imgurl: src("Choir.png"),
    },
];