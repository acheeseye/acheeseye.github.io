$(document).ready(function () {
    $("[data-menu-underline-from-center] a").addClass("underline-from-center");
});

// animated scroll to
var half_spacer = 40,
    scrollToDuration = 2.5;
var scrollToExtraTopOffset = half_spacer;
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

section0Btn.onclick = function () {
    TweenMax.to(window, scrollToDuration, { scrollTo: section1Top, ease: Expo.easeOut });
    TweenMax.from(".menu", 2.5, { opacity: 0, ease: Power2.easeOut });
}
section1Btn.onclick = function () {
    TweenMax.to(window, scrollToDuration, { scrollTo: section1Top, ease: Expo.easeOut });
}
section2Btn.onclick = function () {
    TweenMax.to(window, scrollToDuration, { scrollTo: section2Top, ease: Expo.easeOut });
}
section3Btn.onclick = function () {
    TweenMax.to(window, scrollToDuration, { scrollTo: section3Top, ease: Expo.easeOut });
}
section4Btn.onclick = function () {
    TweenMax.to(window, scrollToDuration, { scrollTo: section4Top, ease: Expo.easeOut });
}

// sticky navbar

window.onscroll = function () { stickyFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

var vh_value = document.documentElement.clientHeight;

// sine wave get started text
var roundButton = document.getElementById("#fi-arrow-down");

TweenMax.to(".fi-arrow-down", 1.5, { ease: Sine.easeInOut, top: 10, repeat: -1 });
var testTween = TweenMax.to(".logo", { left: 300 });

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    offset: vh_value + half_spacer * 3 + vh_value / 4, // starting px
    triggerElement: "#trigger2",
    duration: vh_value / 4 // offset + duration = ending px
})
    .setTween(".curtain", { y: -855 })
    .addIndicators({ name: "2 (duration: 600)" })
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    offset: vh_value + half_spacer * 3 + vh_value / 8 * 3, // starting px
    triggerElement: "#trigger2",
    duration: vh_value / 8 // offset + duration = ending px
})
    .setTween(".imgmeshadow", { x: 25 })
    .addIndicators({ name: "2 (duration: 600)" })
    .addTo(controller);

