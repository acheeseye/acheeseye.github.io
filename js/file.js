$(document).ready(function () {
    $("[data-menu-underline-from-center] a").addClass("underline-from-center");
});

var scrollToExtraTopOffset = 130;

var section1 = $("#section1"),
    section1Top = section1.offset().top - scrollToExtraTopOffset,

    section2 = $("#section2"),
    section2Top = section2.offset().top - scrollToExtraTopOffset,

    section3 = $("#section3"),
    section3Top = section3.offset().top - scrollToExtraTopOffset,

    section4 = $("#section4"),
    section4Top = section4.offset().top - scrollToExtraTopOffset,

    section1Btn = document.getElementById("section1Btn"),
    section2Btn = document.getElementById("section2Btn"),
    section3Btn = document.getElementById("section3Btn"),
    section4Btn = document.getElementById("section4Btn");

section1Btn.onclick = function () {
    TweenMax.to(window, 1.5, { scrollTo: section1Top, ease: Expo.easeOut });
}
section2Btn.onclick = function () {
    TweenMax.to(window, 1.5, { scrollTo: section2Top, ease: Expo.easeOut });
}
section3Btn.onclick = function () {
    TweenMax.to(window, 1.5, { scrollTo: section3Top, ease: Expo.easeOut });
}
section4Btn.onclick = function () {
    TweenMax.to(window, 1.5, { scrollTo: section4Top, ease: Expo.easeOut });
}

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}