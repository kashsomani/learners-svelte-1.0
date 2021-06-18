const SlideshowDirectory="assets/slideshow"
const src = (img)=>`${SlideshowDirectory}/${img}`
export const images = [
    {
        id: 0,
        name: "School building",
        imgurl: src("School building 2.png"),
    },
    {
        id: 1,
        name: "Mr. and Mrs. Gupta with Respected Asif Zakaria",
        imgurl: src("Actors 2.png"),
    },
    {
        id: 2,
        name: "Our ex-student Ranveer Singh revisits",
        imgurl: src("ranveer1.jpg"),
    },
    {
        id: 3,
        name: "Sports Day",
        imgurl: src("French 2.png"),
    },
    {
        id: 4,
        name: "Annual Day Special Guest",
        imgurl: src("Farewell 2018 2.png"),
    },
    {
        id: 5,
        name: "Choir practice",
        imgurl: src("Children's day 2.png"),
    },
];