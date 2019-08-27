$(document).ready(function () {
    $("[data-menu-underline-from-center] a").addClass("underline-from-center");
});

var section1 = $("#section1"),
    section1Top = section1.offset().top - 45,

    section2 = $("#section2"),
    section2Top = section2.offset().top - 45,

    section3 = $("#section3"),
    section3Top = section3.offset().top - 45,

    section4 = $("#section4"),
    section4Top = section4.offset().top - 45,

    section1Btn = document.getElementById("section1Btn"),
    section2Btn = document.getElementById("section2Btn"),
    section3Btn = document.getElementById("section3Btn"),
    section4Btn = document.getElementById("section4Btn");

section1Btn.onclick = function () {
    TweenMax.to(window, 1, { scrollTo: section1Top, ease: Power1.easeOut });
}
section2Btn.onclick = function () {
    TweenMax.to(window, 1, { scrollTo: section2Top, ease: Power1.easeOut });
}
section3Btn.onclick = function () {
    TweenMax.to(window, 1, { scrollTo: section3Top, ease: Power1.easeOut });
}
section4Btn.onclick = function () {
    TweenMax.to(window, 1, { scrollTo: section4Top, ease: Power1.easeOut });
}