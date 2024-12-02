let button = document.querySelector(".button");
let img = document.querySelector(".img");
let clickName = document.querySelector(".clickName");

button.addEventListener("click", () => {

    img.classList.toggle("remove");

    clickName.innerText = img.classList.contains("remove") ? "Pokaż" :
        "Ukryj";
});