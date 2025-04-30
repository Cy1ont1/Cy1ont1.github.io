let slider = document.getElementById("sliderScroll")
let currentPos = 0;
slider.addEventListener("scroll", function() {
    currentPos = slider.scrollLeft
})

function sliderRight() {
    slider.scrollTo({
        top: 0,
        left: currentPos + 440,
        behavior: "smooth",
    })
}

function sliderLeft() {
    slider.scrollTo({
        top: 0,
        left: currentPos - 440,
        behavior: "smooth",
    })
}