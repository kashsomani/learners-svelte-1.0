const teachersDirectory = "./assets/teachers/academic-management"
const src = (dir) => `${teachersDirectory}/${dir}`
const email = "support@learnersacademy.education"
export const academicManagementData = [
    {
        name: "Shabana Afsar",
        info: "Mrs. Afsar is our head coordinator and also teaches Science in the secondary section",
        src: src("ShabanaAfsar.png"),
        email: email

    },
    {
        name: "Francisca Gonsalves",
        info: "Ms. Gonsalves is the secondary coordinator, and teaches Math and Commercial Studies to our secondary section",
        src: src("FranciscaGonsalves.png"),
        email: email

    },
    {
        name: "Brunella D'silva",
        info: "Mrs. D'silva is the middle school coordinator and teaches Social Studies and English",
        src: src("BrunellaDsilva.png"),
        email: email
    },
    {
        name: "Urvashi Parmar",
        info: "Mrs. Parmar is our primary school coordinator and teaches Math",
        src: src("UrvashiParmar.png"),
        email: email
    },
    {
        name: "Amina Agwan",
        info: "Mrs. Agwan is our pre-primary coordinator and teaches EVS, Math and English",
        src: src("AminaAgwan.png"),
        email: email
    }];