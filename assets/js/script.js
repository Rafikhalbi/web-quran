for (let i = 1; i <= 114; i++) {
    let link = "https://quranapi.idn.sch.id/surah/" + i;
    fetch(link)
        .then((response) => response.json())
        .then((data) => {
            const dataArray = Object.values(data);
            const listItem1 = document.createElement("li");
            const listItem2 = document.createElement("li");

            const newUL = document.createElement("ul");
            newUL.id = "myUL";
            newUL.classList.add(
                "tb-ul",
                "bg-info",
                "text-light",
                "fw-bold",
                "mt-3",
                "ms-2",
                "border",
                "rounded",
                "p-2"
            );

            listItem1.textContent = `${dataArray[5]}. Surah ${dataArray[2]} - ${dataArray[4]}`;
            listItem2.textContent = `Number of Ayat ${dataArray[3]}`;

            newUL.appendChild(listItem1);
            newUL.appendChild(listItem2);
            const surahList = document.getElementById("list-surah");
            surahList.appendChild(newUL);

            newUL.addEventListener("click", () => {
                window.location.href =
                    "../../read/surah.html?surah=" + dataArray[5];
            });
        })
        .catch((error) => console.error(error));
}

const searchSurah = () => {
    const input = document.querySelector("input");
    const filter = input.value.toUpperCase();
    const surahs = document.querySelectorAll("#list-surah ul");

    surahs.forEach((surah) => {
        const surahName = surah
            .querySelector("li:first-child")
            .textContent.toUpperCase();
        if (surahName.indexOf(filter) > -1) {
            surah.style.display = "";
        } else {
            surah.style.display = "none";
        }
    });
};
