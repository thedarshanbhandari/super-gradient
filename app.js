//====================================== Download Images ======================================//
const btns = document.querySelectorAll(".card .download-link");
let image;

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        image = btn.parentElement.children[0].src;
        downloadImage(image);
    })
})

function downloadImage(image) {
    fetch(image).then((res) => res.blob()).then((file) => {
        let imageUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = imageUrl
        aTag.download = image;
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    })
}

//====================================== Toggle Menu ======================================//

const barsContainer = document.querySelector(".bars");
const rightSide = document.querySelector(".right-side");

barsContainer.addEventListener("click", () => {
    barsContainer.classList.toggle("active");
    rightSide.classList.toggle("active");
})
