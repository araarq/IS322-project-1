(function (){
    function switchDisplay() {
        slides[indexOfActive].classList.remove("section__img--active");
        slides[indexOfNext].classList.add("section__img--active");

        indexOfActive = indexOfNext;
        if (indexOfActive !== lastIndex) {
            indexOfNext++;
        }
        else {
            indexOfNext = 0;
        }
    }

    let slides = document.querySelectorAll(".section__img");
    let indexOfActive = 0, indexOfNext = 1;
    let lastIndex = slides.length - 1;

    let id = setInterval(switchDisplay, 5000);
}());