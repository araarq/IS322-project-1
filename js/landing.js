function switchDisplay() {

}

let slides = document.querySelectorAll(".section__img");

for (let counter = 0; counter < slides.length; counter++) {
    console.log(slides[counter].classList);
}

let currentImage = slides[0];

document.setInterval(switchDisplay(), 3000);