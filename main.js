let but = document.querySelector(".but")
window.onscroll = function () {
    if (window.scrollY >= 600) {
        but.style.display = "block"
    }
    else {
        but.style.display = "none"
    }
}
but.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
