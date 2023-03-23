// const urlParams = new URLSearchParams(window.location.search);
// const surah = urlParams.get("surah");
// let link = "https://quranapi.idn.sch.id/surah/" + surah;
// fetch(link)
//     .then((response) => response.json())
//     .then((data) => {
//         const dataArray = Object.values(data);
//         let loop = dataArray[3];
//         let title = document.querySelector(".title h1");
//         let tr = document.querySelector(".title p");
//         title.textContent = dataArray[2];
//         tr.textContent = `( ${dataArray[4]} | ${dataArray[0]} )`;
//         for (let i = 0; i <= loop; i++) {
//             const listItem1 = document.createElement("li");
//             const listItem2 = document.createElement("li");
//             const listItem3 = document.createElement("li");
//             const listItem4 = document.createElement("li");
//             listItem2.classList.add(
//                 "text-end",
//                 "fw-bold",
//                 "text-light",
//                 "listItem2",
//                 "mt-2"
//             );
//             listItem3.classList.add(
//                 "translate",
//                 "text-start",
//                 "text-dark",
//                 "listItem2",
//                 "mt-2"
//             );
//             listItem4.classList.add("mt-3");
//             const newUL = document.createElement("ul");
//             newUL.id = "myUL";
//             newUL.classList.add(
//                 "tb-ul",
//                 "bg-info",
//                 "text-light",
//                 "text-end",
//                 "fw-bold",
//                 "mt-3",
//                 "ms-2",
//                 "border",
//                 "rounded",
//                 "p-2"
//             );
//             listItem1.textContent = `${dataArray[9][i]["ayahText"]}`;
//             listItem2.textContent = `( ${dataArray[9][i]["readText"]} )`;
//             listItem3.textContent = `${dataArray[9][i]["verseId"]}. ${dataArray[9][i]["indoText"]}`;
//             const audio = document.createElement("audio");
//             audio.setAttribute("src", dataArray[9][i]["audio"]);
//             audio.setAttribute("controls", "controls");
//             audio.style.height = "40px";
//             listItem4.appendChild(audio);
//             newUL.appendChild(listItem1);
//             newUL.appendChild(listItem2);
//             newUL.appendChild(listItem3);
//             newUL.appendChild(listItem4);
//             const ayatList = document.getElementById("ayat");
//             ayatList.appendChild(newUL);
//         }
//     });

// const searchAyat = () => {
//     const input = document.querySelector("input");
//     const filter = input.value.toUpperCase();
//     const surahs = document.querySelectorAll("#ayat");

//     surahs.forEach((surah) => {
//         const surahName = surah
//             .querySelector(".translate")
//             .textContent.toUpperCase();
//         console.log(surahName);
//         if (surahName.indexOf(filter) > -1) {
//             surah.style.display = "";
//         } else {
//             surah.style.display = "none";
//         }
//     });
// };


const urlParams = new URLSearchParams(window.location.search);
const surah = urlParams.get("surah");
let link = "https://quranapi.idn.sch.id/surah/" + surah;
fetch(link)
    .then((response) => response.json())
    .then((data) => {
        const dataArray = Object.values(data);
        let loop = dataArray[3];
        let title = document.querySelector(".title h1");
        let tr = document.querySelector(".title p");
        title.textContent = dataArray[2];
        tr.textContent = `( ${dataArray[4]} | ${dataArray[0]} )`;
        for (let i = 0; i <= loop; i++) {
            const listItem1 = document.createElement("li");
            const listItem2 = document.createElement("li");
            const listItem3 = document.createElement("li");
            const listItem4 = document.createElement("li");
            listItem2.classList.add(
                "text-end",
                "fw-bold",
                "text-light",
                "listItem2",
                "mt-2"
            );
            listItem3.classList.add(
                "translate",
                "text-start",
                "text-dark",
                "listItem2",
                "mt-2"
            );
            listItem4.classList.add("mt-3");
            const newUL = document.createElement("ul");
            newUL.id = "myUL";
            newUL.classList.add(
                "tb-ul",
                "bg-info",
                "text-light",
                "text-end",
                "fw-bold",
                "mt-3",
                "ms-2",
                "border",
                "rounded",
                "p-2"
            );
            listItem1.textContent = `${dataArray[9][i]["ayahText"]}`;
            listItem2.textContent = `( ${dataArray[9][i]["readText"]} )`;
            listItem3.textContent = `${dataArray[9][i]["verseId"]}. ${dataArray[9][i]["indoText"]}`;
            const audio = document.createElement("audio");
            audio.setAttribute("src", dataArray[9][i]["audio"]);
            audio.setAttribute("controls", "controls");
            audio.style.height = "40px";
            listItem4.appendChild(audio);
            newUL.appendChild(listItem1);
            newUL.appendChild(listItem2);
            newUL.appendChild(listItem3);
            newUL.appendChild(listItem4);
            const ayatList = document.getElementById("ayat");
            ayatList.appendChild(newUL);
        }
    });

const searchAyat = () => {
    const input = document.querySelector("input");
    const filter = input.value.trim().toUpperCase();
    const surahs = document.querySelectorAll("#ayat ul");

    surahs.forEach((surah) => {
        const surahName = surah
            .querySelector(".translate")
            .textContent.trim().toUpperCase();
        if (surahName.indexOf(filter) > -1) {
            surah.style.display = "";
        } else {
            surah.style.display = "none";
        }
    });
};

document.querySelector("input").addEventListener("input", searchAyat);